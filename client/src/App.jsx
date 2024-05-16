import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Home,
  Register,
  Login,
  DashboardLayout,
  Error,
  VersionInfo,
  Headline,
  War,
  SeeAllGroups,
  CreateGroups,
  EditGroups,
  UserGroups,
  Education,
  UpdateUser,
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
      // Headline
      {
        index: true,
        element: <Headline />,
      },
      //War
      {
        path: "war",
        element: <War />,
      },
      //See All Groups
      {
        path: "see-all-groups",
        element: <SeeAllGroups />,
      },
      //Create Groups
      {
        path: "create-groups",
        element: <CreateGroups />,
      },
      //Edit Groups
      {
        path: "Edit-groups",
        element: <EditGroups />,
      },
      //User Groups
      {
        path: "user-groups",
        element: <UserGroups />,
      },
      //Education
      {
        path: "education",
        element: <Education />,
      },
      //Update User
      {
        path: "update-user",
        element: <UpdateUser />,
      },
      //Version
      {
        path: "version-info",
        element: <VersionInfo />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
