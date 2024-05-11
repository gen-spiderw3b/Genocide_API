import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Home,
  Register,
  Login,
  Dashboard,
  DashboardLayout,
  Error,
} from "./Pages/index";
import { action as registerAction } from "./Pages/Register/Register";
import { action as loginAction } from "./Pages/Login/Login";

const router = createBrowserRouter([
  //HomeLayout
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
    ],
  },
  // DashboardLayout
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
