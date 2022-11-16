import React, { useEffect, useReducer } from "react";
import "./global.css";
import Img from "./assets/image.jpg";

const TasbihCounter = () => {
  const [state, dispatch] = useReducer(reducer, {
    subhanallah: 0,
    alhamdulillah: 0,
    allahuAkbar: 0,
  });

  function reducer(state, action) {
    localStorage.getItem("state");
    switch (action.type) {
      case "subhanallah":
        return { ...state, subhanallah: state.subhanallah + 1 };
      case "alhamdulillah":
        return { ...state, alhamdulillah: state.alhamdulillah + 1 };
      case "allahuAkbar":
        return { ...state, allahuAkbar: state.allahuAkbar + 1 };
      case "reset":
        return { subhanallah: 0, alhamdulillah: 0, allahuAkbar: 0 };
      default:
        return state;
    }
  }

  localStorage.setItem("state", state);

  return (
    <div className="counter-app">
      <div className="container">
        <button
          className="reset border-0
          bg-transparent
          text-dark
        "
          onClick={() => dispatch({ type: "reset" })}
        >
          <i className="fa fa-arrows-rotate"></i>
        </button>
        <div className="counters">
          <div className="first-33">SubhanAllah: {state.subhanallah}</div>
          <div className="second-33">Alhamdulillah: {state.alhamdulillah}</div>
          <div className="third-33">Allahu Akbar: {state.allahuAkbar}</div>
        </div>
        <button
          className="btn btn-dark text-white px-3 w-100 d-block mb-3 mt-4"
          onClick={() => dispatch({ type: "subhanallah" })}
        >
          SubhanAllah &nbsp; +{" "}
        </button>
        <button
          onClick={() => dispatch({ type: "alhamdulillah" })}
          className="btn btn-dark text-white px-3 w-100 d-block mb-3"
        >
          Alhamdulillah &nbsp; +
        </button>
        <button
          onClick={() => dispatch({ type: "allahuAkbar" })}
          className="btn btn-dark text-white px-3 w-100 d-block mb-3"
        >
          Allahu Akbar &nbsp; +{" "}
        </button>
      </div>
    </div>
  );
};

export default TasbihCounter;
