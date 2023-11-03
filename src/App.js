import React, { useState } from "react";
import Header from "./Components/Header";
import InvestmentForm from "./Components/InvestmentForm";
import InvestmentCalculations from "./Components/InvestmentCalculations";

function App() {
  const [formData, setFormData] = useState("");
  const userData = (data) => {
    setFormData(data);    
  };

  return (
    <div>
      <Header />
      <InvestmentForm toCalculate={userData} />
      {!formData && <p style={{textAlign: "center"}}>No investments to calculate.</p>}
      {formData && <InvestmentCalculations data={formData} initInvestment={formData["current-savings"]} />}
    </div>
  );
}

export default App;
