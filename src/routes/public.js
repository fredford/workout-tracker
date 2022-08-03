// Startup Components
// import ForgotPassword from "../pages/Startup/ForgotPassword";
import Login from "../pages/Public/Startup/Login";
import Register from "../pages/Public/Startup/Register";
// import ResetPassword from "../pages/Startup/ResetPassword";
import Startup from "../pages/Public/Startup/Startup";
// // Utility Components
import NotFound from "../pages/Utility/NotFound";
import MessagePage from "../pages/Utility/MessagePage";

// TODO implement forgotpassword and resetpassword
const publicRoutes = [
  {
     path: "/message/:message",
     element: <MessagePage />,
   },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/startup",
    element: <Startup />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // {
  //   path: "/forgotpassword",
  //   element: <ForgotPassword />,
  // },
  // {
  //   path: "/resetpassword/:resetToken",
  //   element: <ResetPassword />,
  // },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default publicRoutes;
