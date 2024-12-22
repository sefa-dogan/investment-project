export default function ResultList({ investmentParams }) {
  console.log(investmentParams)
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
          investmentParams.map((investmentParam, i) => {
            return <tr>
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
