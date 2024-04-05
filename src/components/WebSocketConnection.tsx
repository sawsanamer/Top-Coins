import { PropsWithChildren, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  connectToWS,
  disconnectWS,
} from "../middleware/websocketMiddleware/actions";

export function WebSocketConnection({ children }: PropsWithChildren) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectToWS());

    return () => {
      dispatch(disconnectWS());
    };
  }, [dispatch]);

  return <>{children}</>;
}
