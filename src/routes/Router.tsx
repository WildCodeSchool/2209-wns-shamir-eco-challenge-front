import {lazy} from "react";
import {useRoutes} from "react-router-dom";

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
      path: "/RegisterSignIn",
      element: <RegisterSignIn />,
    },
    {
      path: "/HomeMember",
      element: <HomeMember />,
    },
    {
      path: "/Guest",
      element: <Guests />,
    },
    {
      path: "/Profile",
      element: <Profile />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
    {
      path: "/CreateChallenge",
      element: <CreateChallenge />,
    },
    {
      path: "/ChallengesDetails",
      element: <ChallengesDetails />,
    },
    {
      path: "/Friends",
      element: <Friends />,
    },
  ]);
}

const Home = LoadPage(lazy(() => import("../pages/Home")));
const CreateChallenge = LoadPage(
  lazy(() => import("../pages/Challenges/CreateChallenge"))
);
const Guests = LoadPage(lazy(() => import("../pages/Guests")));
const ChallengesDetails = LoadPage(lazy(() => import("../pages/Challenges/ChallengesDetails")));
const RegisterSignIn = LoadPage(lazy(() => import("../pages/Register")));
const HomeMember = LoadPage(lazy(() => import("../pages/HomeMember")));
const Profile = LoadPage(lazy(() => import("../pages/Profile")));
const Friends = LoadPage(lazy(() => import("../pages/Friends")));
const Contact = LoadPage(lazy(() => import("../pages/Contact")));
