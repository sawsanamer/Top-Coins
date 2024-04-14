import { Middleware } from "redux";
import {
  initialCoinState,
  updateCoins,
  updateErrorState,
} from "../../store/coinsSlice";
import { calculate24hPriceChange } from "../../utils/calculate24hPriceChange";
import { RootState } from "../../store/store";
import { UnknownAction } from "@reduxjs/toolkit";
import { PRODUCT_IDS, UPDATE_FREQUENCY_MS } from "./consts";
import { ActionTypes } from "./actions";
import throttle from "lodash.throttle";

// eslint-disable-next-line @typescript-eslint/ban-types
const websocketMiddleware: Middleware<{}, RootState> = ({ dispatch }) => {
  let socket: WebSocket | null = null;
  let coins = initialCoinState;
  let allCoinsUpdated = false;

  const throttledDispatch = throttle(
    () => dispatch(updateCoins(coins)),
    UPDATE_FREQUENCY_MS,
  );

  const initializeWebSocket = () => {
    socket = new WebSocket(process.env.REACT_APP_COINBASE_URL || "");

    socket.onopen = () => {
      //subscribe to the ticker channel
      socket?.send(
        JSON.stringify({
          type: "subscribe",
          channels: [
            {
              name: "ticker",
              product_ids: PRODUCT_IDS,
            },
          ],
        }),
      );
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.type === "ticker") {
        const coinCode = message.product_id.split("-")[0];
        const price = parseFloat(message.price).toFixed(2);
        const priceChangePercentage = calculate24hPriceChange(
          parseFloat(message.open_24h),
          parseFloat(message.price),
        ).toFixed(2);

        coins = {
          ...coins,
          [coinCode]: [price, priceChangePercentage],
        };

        //check if all coins recieved a real time value
        if (!allCoinsUpdated) {
          allCoinsUpdated = Object.values(coins).every(
            ([price, priceChange]) => price !== "" && priceChange !== "",
          );
        }

        //once all coin values are filled, dispatch the coins list, and throttle subsequent updates
        if (allCoinsUpdated) {
          throttledDispatch();
        }
      }
    };

    socket.onerror = () => {
      dispatch(updateErrorState(true));
    };
  };

  const closeWebSocket = () => {
    //unsubscribe from the ticker channel and close the socket
    if (socket) {
      socket?.send(
        JSON.stringify({
          type: "unsubscribe",
          product_ids: PRODUCT_IDS,
          channel: "ticker",
        }),
      );
      socket.close();
    }
  };

  return (next) => (action) => {
    switch ((action as UnknownAction).type) {
      case ActionTypes.WS_CONNECT:
        if (!socket) {
          initializeWebSocket();
        }
        break;
      case ActionTypes.WS_DISCONNECT:
        closeWebSocket();
        break;
      default:
        return next(action);
    }
  };
};

export default websocketMiddleware;
