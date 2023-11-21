import React, { useState } from "react";
import Screen1 from "./components/Screen1/Screen1";
import Screen2 from "./components/Screen2/Screen2";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [adminId, setAdminId] = useState();

  return (
    <>
      {isLogged ? (
        <Screen2 adminId={adminId} />
      ) : (
        <Screen1 setAdminId={setAdminId} setIsLogged={setIsLogged} />
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
