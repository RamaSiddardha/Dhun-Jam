// Screen2.js

import React, { useEffect, useState } from "react";
import styles from "./Screen2.module.css";
import { BeatLoader, RingLoader } from "react-spinners";
import Graph from "../graph/graph";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function Screen2({}) {
  const [adminData, setAdminData] = useState();
  const [loading, setLoading] = useState(true);
  const [buttonLoad, setButtonLoad] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const params = useParams();

  console.log(params);

  useEffect(() => {
    if (adminData) {
      if (
        adminData.amount.category_6 > 99 &&
        adminData.amount.category_7 > 79 &&
        adminData.amount.category_8 > 59 &&
        adminData.amount.category_9 > 39 &&
        adminData.amount.category_10 > 19
      ) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }
  }, [adminData]);

  useEffect(() => {
    const myFun = async () => {
      const fetching = await fetch(
        `https://stg.dhunjam.in/account/admin/${params.adminId}`
      );
      const result = await fetching.json();

      if (result.data) {
        setAdminData(result.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        console.log("1", result);
      }
    };
    myFun();
  }, []);

  const reFetch = async () => {
    const fetching = await fetch(
      `https://stg.dhunjam.in/account/admin/${params.adminId}`
    );
    const result = await fetching.json();

    if (result.data) {
      adminData.amount.category_6 = result.data.amount.category_6;
      setAdminData(adminData);
      setTimeout(() => {
        setButtonLoad(false);
        toast.success("Successfully Saved the Details");
      }, 500);
    }
  };

  const saveHandler = async () => {
    if (buttonDisabled) {
      return;
    }
    setButtonLoad(true);
    const fetching = await fetch(
      `https://stg.dhunjam.in/account/admin/${params.adminId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: {
            category_6: adminData.amount.category_6,
          },
        }),
      }
    );
    const result = await fetching.json();
    reFetch();
    console.log("first", result);
  };
  return (
    <>
      <div className={styles.screenContainer}>
        {!adminData ? (
          <RingLoader color="#36d7b7" />
        ) : (
          <>
            <div className={styles.detailsContainer}>
              <div
                className={styles.loginTitle}
              >{`${adminData.name}, ${adminData.location}`}</div>
              <div className={styles.questionContainer}>
                <div className={styles.label}>
                  Do you want to change your costumes for requesting a song?
                </div>
                <div className={styles.checkboxContainer}>
                  <input
                    onChange={(e) => {
                      if (e.target.value) {
                        setAdminData({
                          ...adminData,
                          charge_customers: true,
                        });
                      }
                    }}
                    checked={adminData.charge_customers ? true : false}
                    type="radio"
                    id="yes"
                    name="changeCostume"
                    className={styles.radioButton}
                  />
                  <label htmlFor="yes" className={styles.radioLabel}>
                    Yes
                  </label>
                  <input
                    onChange={(e) => {
                      if (e.target.value) {
                        setAdminData({
                          ...adminData,
                          charge_customers: false,
                        });
                      }
                    }}
                    checked={adminData.charge_customers ? false : true}
                    type="radio"
                    id="no"
                    name="changeCostume"
                    className={styles.radioButton}
                  />
                  <label htmlFor="no" className={styles.radioLabel}>
                    No
                  </label>
                </div>
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputLabel}>
                  Custom song request amount
                </div>
                <input
                  disabled={!adminData.charge_customers}
                  className={`${styles.textInput} ${
                    !adminData.charge_customers ? styles.disabled : ""
                  }`}
                  onChange={(e) => {
                    setAdminData({
                      ...adminData,
                      amount: {
                        ...adminData.amount,
                        category_6: e.target.value,
                      },
                    });
                  }}
                  value={adminData.amount.category_6}
                  type="text"
                  style={{
                    textAlign: "center",
                  }}
                />
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputLabel}>
                  Regular song request amounts, from high to low-
                </div>
                <div className={styles.amountContainer}>
                  <input
                    disabled={!adminData.charge_customers}
                    onChange={(e) => {
                      if (e.target.value < 600)
                        setAdminData({
                          ...adminData,
                          amount: {
                            ...adminData.amount,
                            category_7: e.target.value,
                          },
                        });
                    }}
                    value={adminData.amount.category_7}
                    type="text"
                    className={`${styles.textInput} ${
                      !adminData.charge_customers ? styles.disabled : ""
                    }`}
                  />
                  <input
                    disabled={!adminData.charge_customers}
                    onChange={(e) => {
                      if (e.target.value < 600)
                        setAdminData({
                          ...adminData,
                          amount: {
                            ...adminData.amount,
                            category_8: e.target.value,
                          },
                        });
                    }}
                    value={adminData.amount.category_8}
                    type="text"
                    className={`${styles.textInput} ${
                      !adminData.charge_customers ? styles.disabled : ""
                    }`}
                  />
                  <input
                    disabled={!adminData.charge_customers}
                    onChange={(e) => {
                      if (e.target.value < 600)
                        setAdminData({
                          ...adminData,
                          amount: {
                            ...adminData.amount,
                            category_9: e.target.value,
                          },
                        });
                    }}
                    value={adminData.amount.category_9}
                    type="text"
                    className={`${styles.textInput} ${
                      !adminData.charge_customers ? styles.disabled : ""
                    }`}
                  />
                  <input
                    disabled={!adminData.charge_customers}
                    onChange={(e) => {
                      if (e.target.value < 600)
                        setAdminData({
                          ...adminData,
                          amount: {
                            ...adminData.amount,
                            category_10: e.target.value,
                          },
                        });
                    }}
                    value={adminData.amount.category_10}
                    type="text"
                    className={`${styles.textInput} ${
                      !adminData.charge_customers ? styles.disabled : ""
                    }`}
                  />
                </div>
              </div>
              {adminData.charge_customers ? (
                <Graph graphData={adminData.amount} />
              ) : (
                <div
                  style={{
                    height: "315px",
                    marginTop: "4rem",
                  }}
                ></div>
              )}
              <button
                className={`${styles.signInButton} ${
                  !adminData.charge_customers || buttonDisabled
                    ? styles.disabledButton
                    : ""
                }`}
                onClick={saveHandler}
              >
                {!buttonLoad ? (
                  "Save"
                ) : (
                  <BeatLoader color="#6741d9" size={10} />
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
