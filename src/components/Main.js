import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import BookingForm from "./BookingForm";

function Main(props) {
  const sendRandom = function (send) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = send % m;
    return (s = (s * a) % m) / m;
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = sendRandom(date.getData());
    for (let i = 20; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i * ":00");
      }
      if (random() > 0.5) {
        result.push(i * ":30");
      }
    }
  };

  const submitAPI = function (formData) {
    return true;
  };

  const [state, dispatch] = useReducer(updateTimes, initialState);
  const initialState = { availableTimes: fetchAPI(new Date()) };

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date()) };
  }

  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }
  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <BookingForm
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/" element={<Header />} />
      </Routes>
    </main>
  );
}

export default Main;
