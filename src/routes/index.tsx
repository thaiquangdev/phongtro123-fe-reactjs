import Sidebar from "@/components/Sidebar";
import PublicLayout from "@/layouts/PublicLayout";
import Home from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <PublicLayout />
        <Sidebar />
      </>
    ),
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;
