import TopBar from "../components/TopBar";
import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
import CreateUser from "../components/CreateUser";
import ViewUser from "../components/ViewUser";
import { Navigate } from "react-router-dom";
const AppRouter = [
  {
    path: "/",
    element: (
      <>
        <TopBar />
        <Home />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <TopBar />
        <Dashboard />
      </>
    ),
  },
  {
    path: "/create-user",
    element: (
      <>
        <TopBar />
        <CreateUser />
      </>
    ),
  },
  {
    path: "/view-user/:id",
    element: (
      <>
        <TopBar />
        <ViewUser />
      </>
    ),
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
];

export default AppRouter;
