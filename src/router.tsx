import App from "App";
import { EH } from "components/Pages/EH";
import { Landing } from "components/Pages/Landing";
import { Site } from "components/Pages/Site";
import { createBrowserRouter } from "react-router-dom";

export const routes = {
  landing: "/",
  existentialHorror: "/existential-horror",
  music: "/site",
  about: "/about",
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: `${routes.existentialHorror}/:songIndex`,
        element: <EH />,
      },
    ],
  },
  {
    path: routes.music,
    element: <Site />,
  },
]);
