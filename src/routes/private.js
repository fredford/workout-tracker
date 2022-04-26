import Dashboard from "../pages/Private/Dashboard/Dashboard";
import Profile from "../pages/Private/Profile/Profile";
import Workouts from "../pages/Private/Workouts/Workouts";
import Workout from "../pages/Private/Workout/Workout";
import Exercises from "../pages/Private/Exercises/Exercises";
import Exercise from "../pages/Private/Exercise/Exercise";
import MessagePage from "../pages/Utility/MessagePage";
// import ChangePassword from "../pages/Profile/ChangePassword";
// import ChangeUsername from "../pages/Profile/ChangeUsername";

// import DeleteAccount from "../pages/Profile/DeleteAccount";

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
    path: "/workouts",
    element: <Workouts />,
  },
  {
    path: "/workouts/:workoutId",
    element: <Workout />,
  },
  {
    path: "/exercises",
    element: <Exercises />,
  },
  {
    path: "/exercises/:exerciseId",
    element: <Exercise />,
  },
  {
    path: "/message/:message",
    element: <MessagePage />,
  },
  // {
  //   path: "/changepassword",
  //   element: <ChangePassword />,
  // },
  // {
  //   path: "/changeusername",
  //   element: <ChangeUsername />,
  // },
  // {
  //   path: "/deleteaccount",
  //   element: <DeleteAccount />,
  // },
];

export default privateRoutes;
