// Startup Components
import Login from "../pages/Public/Startup/Login";
import Register from "../pages/Public/Startup/Register";
import ForgotPassword from "../pages/Public/Startup/ForgotPassword";
import ResetPassword from "../pages/Public/Startup/ResetPassword";
import Startup from "../pages/Public/Startup/Startup";
// // Utility Components
import NotFound from "../pages/Utility/NotFound";
import MessagePage from "../pages/Utility/MessagePage";

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
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/resetpassword/:resetToken",
    element: <ResetPassword />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default publicRoutes;
