import React, { useState } from "react";
import "../Styles/InvestmentForm.css";

const InvestmentForm = (props) => {
  const initInput = {
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    duration: "",
  };
  const [input, setInput] = useState(initInput);

  const submitHandler = (event) => {
    event.preventDefault();

    props.toCalculate(input);
    resetHandler();
  };

  const resetHandler = () => {
    setInput(initInput);
  };

  const inputChangeHandler = (input, value) => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(event) => {
              inputChangeHandler("current-savings", event.target.value);
            }}
            value={input["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(event) => {
              inputChangeHandler("yearly-contribution", event.target.value);
            }}
            value={input["yearly-contribution"]}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(event) => {
              inputChangeHandler("expected-return", event.target.value);
            }}
            value={input["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(event) => {
              inputChangeHandler("duration", event.target.value);
            }}
            value={input["duration"]}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
