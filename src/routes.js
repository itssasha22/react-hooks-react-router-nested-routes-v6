import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorPage />
      },
      {
        path: "login",
        element: <Login />,
        errorElement: <ErrorPage />
      },
      {
        path: "users",
        element: <Home />, // Parent route for users
        errorElement: <ErrorPage />,
        children: [
          {
            path: ":id",
            element: <UserProfile />,
            errorElement: <ErrorPage />
          }
        ]
      }
    ]
  }
];

export default routes;
