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
  LeaveGroup,
  BrowseGroups,
  //End Of War
  //Investment Groups
  InvestmentLayout,
  BrowseAllGroups,
  CreateInvestmentGroup,
  GroupInfo,
  CreateMember,
  //End Of Investment Groups
  //My Investment Group
  SelectGroup,
  //End Of My Investment Group
  //User Layout
  UserLayout,
  //End Of User Layout
  Education,
  UpdateUser,
} from "./Pages/index";

//Actions
import { action as registerAction } from "./Pages/Register/Register";
import { action as loginAction } from "./Pages/Login/Login";
import { action as CreateWarAction } from "./Pages/War/CreateGroup";
import { action as joinAction } from "./Pages/War/JoinGroup";
import { action as deleteAction } from "./Pages/War/DeleteGroup";
import { action as deleteMemberAction } from "./Pages/War/DeleteMember";
import { action as deleteSelfAction } from "./Pages/War/DeleteSelf";
import { action as investmentAction } from "./Pages/Groups/CreateInvestmentGroup";
import { action as joinInvestmentAction } from "./Pages/Groups/JoinInvestmentGroup";
import { action as memberAction } from "./Pages/Groups/CreateMember";
import { action as groupCookieAction } from "./Pages/MyInvestmentGroup/SetGroupCookie";

//Loaders
import { loader as dashboardLoader } from "./Pages/Dashboard/DashboardLayout";
import { loader as warLoader } from "./Pages/War/WarLayout";
import { loader as myGroupsLoader } from "./Pages/War/MyGroups";
import { loader as joinedLoader } from "./Pages/War/JoinedGroups";
import { loader as investmentLoader } from "./Pages/Groups/InvestmentLayout";
import { loader as groupLoader } from "./Pages/Groups/GroupInfo";

import GroupLayout, {
  loader as myGroupLoader,
} from "./Pages/MyInvestmentGroup/GroupLayout";

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
            loader: warLoader,
            children: [
              {
                path: "create-group",
                element: <CreateGroup />,
                action: CreateWarAction,
              },
              {
                path: "browse-groups",
                element: <BrowseGroups />,
              },
              {
                path: "my-groups",
                element: <MyGroups />,
                loader: myGroupsLoader,
              },
              {
                path: "delete-member/:id/:user",
                action: deleteMemberAction,
              },
              {
                path: "delete-self/:id/:user",
                action: deleteSelfAction,
              },
              {
                path: "joined-groups",
                element: <JoinedGroups />,
                loader: joinedLoader,
              },
              {
                path: "delete-group/:id",
                action: deleteAction,
              },

              {
                path: "join-group/:id",
                action: joinAction,
              },
              {
                path: "leave-group",
                element: <LeaveGroup />,
              },
            ],
          },
          //Investment Groups
          {
            path: "investment/",
            element: <InvestmentLayout />,
            loader: investmentLoader,
            children: [
              {
                path: "create-groups",
                element: <CreateInvestmentGroup />,
                action: investmentAction,
              },
              {
                path: "create-member/:groupId",
                element: <CreateMember />,
                action: memberAction,
              },
              {
                path: "browse-all-groups",
                element: <BrowseAllGroups />,
              },
              {
                path: "group-info/:id",
                element: <GroupInfo />,
                loader: groupLoader,
              },
              {
                path: "join-group/:id/:userId",
                action: joinInvestmentAction,
              },
              //My Investment Group
              {
                path: "select-group",
                element: <GroupLayout />,
                loader: myGroupLoader,
                children: [
                  {
                    index: true,
                    element: <SelectGroup />,
                  },
                  {
                    path: "user-group/:id",
                    action: groupCookieAction,
                  },
                ],
              },
              {
                path: "user-group",
                element: <UserLayout />,
              },
              //End Of My Investment Group
            ],
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
