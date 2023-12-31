import { Navigate } from "react-router-dom";
import Missing from "@/pages/Missing";

export default [
  {
    path: "/",
    element: <Navigate to="/missing" />,
  },
  {
    path: "/missing",
    element: <Missing />,
  },
] as {
  path: string;
  element: JSX.Element;
}[];
