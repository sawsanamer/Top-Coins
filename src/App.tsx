import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { createRouter } from "./routes";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./providers/theme";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { WebSocketConnection } from "./components/WebSocketConnection";

function App() {
  const router = createRouter();
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <WebSocketConnection>
            <RouterProvider router={router} />
          </WebSocketConnection>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
