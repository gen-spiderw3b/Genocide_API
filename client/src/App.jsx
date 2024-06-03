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
  //War
  WarLayout,
  CreateGroup,
  MyGroups,
  JoinedGroups,
  DeleteGroup,
  UpdateGroups,
  JoinGroup,
  LeaveGroup,
  BrowseGroups,
  //End Of War
  SeeAllGroups,
  CreateGroups,
  EditGroups,
  UserGroups,
  Education,
  UpdateUser,
} from "./Pages/index";

//Actions
import { action as registerAction } from "./Pages/Register/Register";
import { action as loginAction } from "./Pages/Login/Login";
import { action as CreateWarAction } from "./Pages/War/CreateGroup";

//Loaders
import { loader as dashboardLoader } from "./Pages/Dashboard/DashboardLayout";
import { loader as browseLoader } from "./Pages/War/BrowseGroups";
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
            element: <WarLayout />,
            children: [
              {
                path: "create-group",
                element: <CreateGroup />,
                action: CreateWarAction,
              },
              {
                path: "browse-groups",
                element: <BrowseGroups />,
                loader: browseLoader,
              },
              {
                path: "my-groups",
                element: <MyGroups />,
              },
              {
                path: "joined-groups",
                element: <JoinedGroups />,
              },
              {
                path: "delete-group",
                element: <DeleteGroup />,
              },
              {
                path: "update-groups",
                element: <UpdateGroups />,
              },
              {
                path: "join-group",
                element: <JoinGroup />,
              },
              {
                path: "leave-group",
                element: <LeaveGroup />,
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
