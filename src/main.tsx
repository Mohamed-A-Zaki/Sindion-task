// import React from "react";
import ReactDOM from "react-dom/client";

import router from "./router";
import { store } from "./store/store";

import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </>
);
