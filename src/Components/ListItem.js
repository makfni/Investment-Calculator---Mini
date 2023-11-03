import "../Styles/InvestmentCalculations.css";

const ListItem = (props) => {

  props.data.map((year) => {
  return (
      <tbody>
          <tr>
            <td>{year.year}</td>
            <td>{year.savingsEndOfYea}</td>
            <td>{year.yearlyInterest}</td>
            <td>
              {year.savingsEndOfYear -
                props.initVal -
                year.yearlyContribution * year.year}
            </td>
            <td>
              {props.initVal +
                year.yearlyContribution * year.year}
            </td>
          </tr>
      </tbody>
  );
              }
  )
};

export default ListItem;
// year={yearlyData.year}
//           yearlyInterest={yearlyData.yearlyInterest}
//           totalInterest={
//             yearlyData.savingsEndOfYear -
//             userInput.initialInvestment -
//             yearlyData.yearlyContribution * yearlyData.year
//           }
//           investedCapital={
//             userInput.initialInvestment +
//             yearlyData.yearlyContribution * yearlyData.year
//           }
