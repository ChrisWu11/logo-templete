import { Navigate } from "react-router-dom";
import Missing from "@/pages/Missing";
import Pornhub from "@/pages/Pornhub";

export default [
  {
    path: "/",
    element: <Navigate to="/missing" />,
  },
  {
    path: "/missing",
    element: <Missing />,
  },
  {
    path: "/pornhub",
    element: <Pornhub />,
  },
] as {
  path: string;
  element: JSX.Element;
}[];
