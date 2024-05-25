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
//test
import TestOne from "./Pages/War/TestOne";
import TestTwo from "./Pages/War/TestTwo";
//Actions
import { action as registerAction } from "./Pages/Register/Register";
import { action as loginAction } from "./Pages/Login/Login";
//Loaders
import { loader as dashboardLoader } from "./Pages/Dashboard/DashboardLayout";
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
      // DashboardLayout
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          // Headline
          {
            index: true,
            element: <Headline />,
          },
          //War
          {
            path: "war/",
            element: <War />,
            children: [
              {
                path: "test1",
                element: <TestOne />,
              },
              {
                path: "test2",
                element: <TestTwo />,
              },
            ],
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
