import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const LoadPage = (Component: any) => (props: any) => {
  return <Component {...props} />;
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Profile",
      element: <Profile />,
    },
    {
      path: "/CreateChallenge",
      element: <CreateChallenge />,
    },
  ]);
}

const Home = LoadPage(lazy(() => import("../pages/Home")));
const CreateChallenge = LoadPage(
  lazy(() => import("../pages/CreateChallenge"))
);
const Profile = LoadPage(lazy(() => import("../pages/Profile")));
