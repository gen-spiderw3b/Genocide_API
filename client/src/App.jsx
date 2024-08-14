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
  SetGroupCookie,
  //End Of My Investment Group
  //User Groups Layout
  GroupLayout,
  UserLayout,
  CreateHeadline,
  CreateSchedule,
  SubGroupLayout,
  CreateSubGroup,
  SelectMembers,
  Promotion,
  DeleteHeadline,
  DeleteSchedule,
  DeleteSubgroup,
  ViewHeadline,
  ViewSchedule,
  ViewSubgroup,
  ViewSubGroups,
  Contact,
  //End Of User Groups Layout
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
import { action as headlineAction } from "./Pages/UserGroup/CreateHeadline/CreateHeadline";
import { action as scheduleAction } from "./Pages/UserGroup/Create Schedule/CreateSchedule";
import { action as createSubGroupAction } from "./Pages/UserGroup/Create Sub Groups/CreateSubGroup";
import { action as processAction } from "./Pages/UserGroup/Create Sub Groups/ProcessMember";
import { action as contactAction } from "./Pages/UserGroup/ActionPages/Contact";

//Loaders
import { loader as dashboardLoader } from "./Pages/Dashboard/DashboardLayout";
import { loader as warLoader } from "./Pages/War/WarLayout";
import { loader as myGroupsLoader } from "./Pages/War/MyGroups";
import { loader as joinedLoader } from "./Pages/War/JoinedGroups";
import { loader as investmentLoader } from "./Pages/Groups/InvestmentLayout";
import { loader as groupLoader } from "./Pages/Groups/GroupInfo";
import { loader as userGroupLoader } from "./Pages/UserGroup/UserLayout";
import { loader as scheduleLoader } from "./Pages/UserGroup/Views/ViewSchedule";
import { loader as viewCreatedSubgroupsLoader } from "./Pages/UserGroup/Create Sub Groups/ViewSubgroups";
import { loader as myGroupLoader } from "./Pages/MyInvestmentGroup/GroupLayout";
import { loader as selectMemberLoader } from "./Pages/UserGroup/Create Sub Groups/SelectMembers";
import { loader as viewLoader } from "./Pages/UserGroup/Views/ViewSubgroup";

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
                    element: <SetGroupCookie />,
                    action: groupCookieAction,
                  },
                ],
              },
              {
                path: "user-group/:groupId",
                element: <UserLayout />,
                loader: userGroupLoader,
                children: [
                  {
                    path: "create/create-headline",
                    element: <CreateHeadline />,
                    action: headlineAction,
                  },
                  {
                    path: "create/create-schedule",
                    element: <CreateSchedule />,
                    action: scheduleAction,
                  },
                  {
                    path: "create/sub-groups",
                    element: <SubGroupLayout />,

                    children: [
                      {
                        path: "create-subgroup",
                        element: <CreateSubGroup />,
                        action: createSubGroupAction,
                      },
                      {
                        path: "view-subgroups",
                        element: <ViewSubGroups />,
                        loader: viewCreatedSubgroupsLoader,
                      },
                      {
                        path: "select-members/:groupId/:subgroupId",
                        element: <SelectMembers />,
                        loader: selectMemberLoader,
                      },
                      {
                        path: "process-member/:memberId/:subgroupId",
                        action: processAction,
                      },
                    ],
                  },
                  {
                    path: "create/promotion",
                    element: <Promotion />,
                  },
                  {
                    path: "delete/delete-headline",
                    element: <DeleteHeadline />,
                  },
                  {
                    path: "delete/delete-schedule",
                    element: <DeleteSchedule />,
                  },
                  {
                    path: "delete/delete-subgroups",
                    element: <DeleteSubgroup />,
                  },
                  {
                    path: "views/headline-news",
                    element: <ViewHeadline />,
                  },
                  {
                    path: "views/view-schedule",
                    element: <ViewSchedule />,
                    loader: scheduleLoader,
                  },
                  {
                    path: "views/view-subgroup",
                    element: <ViewSubgroup />,
                    loader: viewLoader,
                  },
                  {
                    path: "contact/:groupMemberId",
                    element: <Contact />,
                    action: contactAction,
                  },
                ],
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
            path: "user/update-users",
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
