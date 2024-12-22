import { useState } from "react";
import Header from "./components/Header.jsx";
import UserForm from "./components/UserForm.jsx";
import ResultList from "./components/ResultList.jsx";
import calculateInvestmentResults from "./util/investment.js";

function App() {
  const [investmentParams, setInvestmentParams] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleOnChange(newInvestmentParams) {
    setInvestmentParams(() => {
      return {
        ...newInvestmentParams
      }
    });
  }

  return (
    <div>
      <Header />
      <UserForm onParamsChange={handleOnChange} investmentParams={investmentParams} />
      <ResultList investmentParams={calculateInvestmentResults(investmentParams)} />
    </div>
  );
}

export default App;
