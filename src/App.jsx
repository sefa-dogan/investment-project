import { useState } from "react";
import Header from "./components/Header.jsx";
import UserForm from "./components/UserForm.jsx";
import ResultList from "./components/ResultList.jsx";
import calculateInvestmentResults from "./util/investment.js";
import { InvestmentContext } from "./store/investment-context.jsx";

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
  const ctxValue = {
    investment: investmentParams,
    handleChange: handleOnChange
  }
  return (
    <InvestmentContext.Provider value={ctxValue}>
      <div>
        <Header />
        <UserForm />
        <ResultList  />
      </div>
    </InvestmentContext.Provider >
  );
}

export default App;
