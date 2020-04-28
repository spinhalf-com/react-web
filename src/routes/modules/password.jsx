import ForgotPassword from "../../containers/ForgotPassword/ForgotPassword";
import NewPassword from "../../containers/ForgotPassword/NewPassword";
import ValidateToken from "../../containers/ForgotPassword/ValidateToken";

const passwordRoutes = [
  {
    path: "/forgot-password",
    exact: true,
    auth: false,
    component: ForgotPassword
  },
  {
    path: "/forgot-password/validate/:token",
    exact: true,
    auth: false,
    component: ValidateToken
  },
  {
    path: "/reset-password/new/:token",
    exact: true,
    auth: false,
    component: NewPassword
  }
];

export default passwordRoutes;
