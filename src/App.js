//React-router-dom
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Nav from "./siteComponents/nav";
import Public from "./siteComponents/public";
import LandingPage from "./siteComponents/landingPage";
import Login from "./siteComponents/login";
import Profile from "./siteComponents/profile";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage/>,
      },
      {
        path: "/public",
        element: <Public />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
