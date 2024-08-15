import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Header from "./components/header";
import Home from "./components/home";

import Forms from "./components/forms"
import Notifications from "./components/notifications"

import Enrollments from "./components/enrollment";
import Calls from "./components/calls";

import Faqs from "./components/faqs";


import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/forms",
      element: <Forms />
    },
    {
      path: "/notifications",
      element: <Notifications />
    },
    {
      path: "/enrollments",
      element: <Enrollments />
    },
    {
      path: "/calls",
      element: <Calls />
    },
    {
      path: "/faqs",
      element: <Faqs />
    }
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
