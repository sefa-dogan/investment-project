import { useContext } from "react";
import { InvestmentContext } from "../store/investment-context.jsx"
import calculateInvestmentResults from "../util/investment.js";
export default function ResultList({ investmentParams }) {

  const { investment } = useContext(InvestmentContext)

  console.log(investment)
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {
          calculateInvestmentResults(investment).map((investmentParam, i) => {
            return <tr key={i}>
              <td>{investmentParam.year}</td>
              <td>{investmentParam.valueEndOfYear}</td>
              <td>{investmentParam.interest}</td>
              <td>{investmentParam.annualInvestment}</td>
            </tr>
          })
        }
      </tbody>
    </table>
  );
}
