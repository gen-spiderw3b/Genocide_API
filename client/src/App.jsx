import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Home } from "./pages/index";

// Browser Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
