import "../Styles/InvestmentCalculations.css";

const InvestmentCalculations = (userInput) => {
  const yearlyData = []; // per-year results

  //edge case if userInput !== null
  if (userInput) {
    let currentSavings = +userInput.data["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.data["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.data["expected-return"] / 100;
    const duration = +userInput.data["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  const formatter = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  let results;

  results = yearlyData.map((year) => {
    return (
      <tr key={year.year}>
        <td>{year.year}</td>
        <td>{formatter.format(year.savingsEndOfYear)}</td>
        <td>{formatter.format(year.yearlyInterest)}</td>
        <td>
          {formatter.format(
            year.savingsEndOfYear -
              userInput.initInvestment -
              year.yearlyContribution * year.year
          )}
        </td>
        <td>
          {formatter.format(
            userInput.initInvestment + year.yearlyContribution * year.year
          )}
        </td>
      </tr>
    );
  });

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{results}</tbody>
    </table>
  );
};

export default InvestmentCalculations;
