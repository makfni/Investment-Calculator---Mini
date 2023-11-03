import React, { useState } from "react";
import Header from "./Components/Header";
import InvestmentForm from "./Components/InvestmentForm";
import InvestmentCalculations from "./Components/InvestmentCalculations";

function App() {
  const [formData, setFormData] = useState("");
  const userData = (data) => {
    setFormData(data);    
  };

  const resetTable = () => {
    setFormData("");
  }

  return (
    <div>
      <Header />
      <InvestmentForm toCalculate={userData} resetTable={resetTable}/>
      {!formData && <p style={{textAlign: "center"}}>No investments to calculate.</p>}
      {formData && <InvestmentCalculations data={formData} initInvestment={formData["current-savings"]} />}
    </div>
  );
}

export default App;
