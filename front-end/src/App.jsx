import "./App.scss";

import { LogIn, Register, Home, Profile } from "./pages";

import { Navbar, Leftbar, Rightbar } from "./components";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

function App() {
  const currentUser = false;

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={"/login"} />;
    }

    return children;
  };
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div>
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <LogIn></LogIn>,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <main className="app">
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
