import React, { useState } from "react";
import Screen1 from "./components/Screen1/Screen1";
import Screen2 from "./components/Screen2/Screen2";
import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLlayout from "./components/rootLayout/RootLlayout";
import ErrorPage from "./components/errorPage/ErrorPage";

export default function App() {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("adminId") || false
  );

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Screen1 setIsLogged={setIsLogged} />,
        },
        {
          path: "/admin/:adminId",
          element: isLogged ? (
            <Screen2 />
          ) : (
            <Screen1 setIsLogged={setIsLogged} />
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* {isLogged ? (
        <Screen2 adminId={adminId} />
      ) : (
        <Screen1 setAdminId={setAdminId} setIsLogged={setIsLogged} />
      )}*/}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
