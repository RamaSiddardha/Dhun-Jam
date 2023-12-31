// Screen1.js

import React, { useRef, useState } from "react";
import styles from "./Screen1.module.css";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Screen1({ setIsLogged }) {
  const [isLoading, setIsLoading] = useState();

  const navigate = useNavigate();
  localStorage.clear("adminId");
  setIsLogged(false);
  const userNameRef = useRef();
  const passwordRef = useRef();

  const loginHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;

    const fetching = await fetch("https://stg.dhunjam.in/account/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    });
    const result = await fetching.json();
    if (result.data) {
      setIsLogged(result.data.id);
      localStorage.setItem("adminId", result.data.id);
      navigate("/admin/" + result.data.id);
      setTimeout(() => {
        toast.success("Successfully Logged In");
      }, 500);
    } else {
      setIsLoading(false);
      toast.error("Invalid Username or Password");
    }
  };
  return (
    <div className={styles.screenContainer}>
      <div className={styles.loginContainer}>
        <div className={styles.loginTitle}>Venue Admin Login</div>
        <form onSubmit={loginHandler} className={styles.loginContainer}>
          <input
            ref={userNameRef}
            className={`${styles.textInput}`}
            type="text"
            placeholder="Username"
            required
          />

          <input
            ref={passwordRef}
            className={`${styles.passwordInput} ${styles.texInput}`}
            type="password"
            placeholder="Password"
            required
          />

          <button className={styles.signInButton}>
            {!isLoading ? `Sign in` : <BeatLoader color="white" size={10} />}
          </button>
        </form>

        <button
          onClick={() =>
            toast.error(
              "Didnt mentioned the details of this function in the document"
            )
          }
          className={styles.registrationButton}
        >
          New Registration ?
        </button>
      </div>
    </div>
  );
}
