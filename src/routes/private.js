import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";

const privateRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

export default privateRoutes;
