import { createBrowserRouter } from "react-router-dom";
import { RoutesEnum } from "./routes-enum";
import CoinDetailsPage from "../views/CoinDetailsPage";
import NotFoundPage from "../views/NotFoundPage";
import HomePage from "../views/HomePage";

const routerConfig = [
  ...[RoutesEnum.HOME, RoutesEnum.COINS].map((path) => ({
    path,
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  })),
  {
    path: RoutesEnum.COIN_DETAILS,
    element: <CoinDetailsPage />,
    errorElement: <NotFoundPage />,
  },
];

export const createRouter = () => createBrowserRouter(routerConfig);
