import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import AllTicketsPage from "./pages/AllTicketsPage/AllTicketsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/all-tickets",
    element: <AllTicketsPage />,
  },
]);

export default router;
