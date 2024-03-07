import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import About from "pages/Home/About"
import Terms from "pages/Settings/Terms"
import Privacy from "pages/Settings/Privacy"
import Faqs from "pages/Settings/Faqs"

//Tickets
import PendingTickets from "pages/Support/PendingTickets"
import SolvedTickets from "pages/Support/SolvedTickets"
import AllTickets from "pages/Support/AllTickets"
import ViewSupport from "pages/Support/ViewSupport"

//Gatway
import PaymentGetway from "pages/PaymentGetway/PaymentGetway"

//Notification
import Notifications from "pages/Notifications/Notifications"

//Managed Users
import Users from "pages/App users/Users"
import ActiveUsers from "pages/App users/ActiveUsers"
import BlockedUsers from "pages/App users/BlockedUsers"
import EmailUnVerfiedUsers from "pages/App users/EmailUnVerfiedUsers"
import MobileUnVerfiedUsers from "pages/App users/MobileUnVerfiedUsers"
import ViewUser from "pages/App users/ViewUser"

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/About", component: About },
  { path: "/Terms", component: Terms },
  { path: "/Privacy", component: Privacy },
  { path: "/Users", component: Users },
  { path: "/Faqs", component: Faqs },

  { path: "/PendingTickets", component: PendingTickets },
  { path: "/SolvedTickets", component: SolvedTickets },
  { path: "/AllTickets", component: AllTickets },
  { path: "/ViewSupport", component: ViewSupport },

  { path: "/PaymentGetway", component: PaymentGetway },

  { path: "/Notifications", component: Notifications },

  { path: "/ActiveUsers", component: ActiveUsers },
  { path: "/BlockedUsers", component: BlockedUsers },
  { path: "/EmailUnVerfiedUsers", component: EmailUnVerfiedUsers },
  { path: "/MobileUnVerfiedUsers", component: MobileUnVerfiedUsers },
  { path: "/ViewUser", component: ViewUser },

  { path: "/profile", component: UserProfile },
  { path: "/", exact: true, component: () => <Redirect to="/login" /> },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { publicRoutes, authProtectedRoutes }
