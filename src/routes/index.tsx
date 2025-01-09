import Sidebar from "@/components/Sidebar";
import PublicLayout from "@/layouts/PublicLayout";
import Home from "@/pages/public/home";
import Login from "@/pages/auth/login";
import { createBrowserRouter } from "react-router-dom";
import Register from "@/pages/auth/register";
import VerifyOtp from "@/pages/auth/verify-otp";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <PublicLayout />
        <Sidebar />
      </>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "dang-nhap", element: <Login /> },
      { path: "tao-tai-khoan-moi", element: <Register /> },
      { path: "xac-minh-otp", element: <VerifyOtp /> },
    ],
  },
]);

export default router;
