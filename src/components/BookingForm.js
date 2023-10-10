import React, { useState } from "react";

function BookinForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.SubmitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    // props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            {/* DATE */}
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="data"
                required
              />
            </div>
            {/* TIME */}
            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select
                id="book-time"
                value={time}
                type="string"
                required
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="">Select Time</option>
                {/* {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes} </option>;
                })} */}
              </select>
            </div>
            {/* GUESTS */}
            <div>
              <label htmlFor="book-guest">Number of Guests</label>
              <input
                id="book-guest"
                value={guest}
                type="int"
                required
                onChange={(e) => setGuest(e.target.value)}
              />
            </div>

            {/* OCCATION */}
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Bridal</option>
                <option>Event</option>
              </select>
            </div>

            <div className="btnReceive">
              <input
                arial-label="on Click"
                type="submit"
                value={"Complete Reservation!"}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
}

export default BookinForm;
