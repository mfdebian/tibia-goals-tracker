import { createBrowserRouter } from "react-router-dom";
import App from './App';
import NotFound from './pages/NotFound';
import Login from "./pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <NotFound />
  },
  {
    path: "/home",
    element: <App/>,
  },
]);