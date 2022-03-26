import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import ChangePassword from "../pages/Profile/ChangePassword";
import Exercises from "../pages/Exercises/Exercises";

const privateRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/changepassword",
    element: <ChangePassword />,
  },

  {
    path: "/exercises",
    element: <Exercises />,
  },
];

export default privateRoutes;
