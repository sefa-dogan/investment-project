import { useState, useReducer } from "react";
import Header from "./components/Header.jsx";
import UserForm from "./components/UserForm.jsx";
import ResultList from "./components/ResultList.jsx";
import calculateInvestmentResults from "./util/investment.js";
import { InvestmentContext } from "./store/investment-context.jsx";

function investmentReducer(prevInvestmentReduceState, action) {
  if (action.type === "UPDATE")
    return {
      ...action.param
    }
}

function App() {
  const initialInvestment = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  }
  const [investmentReduceState, dispatchInvestmentReduceState] = useReducer(investmentReducer, initialInvestment);

  // const [investmentParams, setInvestmentParams] = useState(initialInvestment);

  function handleOnChange(newInvestmentParams) {
    dispatchInvestmentReduceState({
      type: "UPDATE",
      param: newInvestmentParams
    })
    // setInvestmentParams(() => {
    //   return {
    //     ...newInvestmentParams
    //   }
    // });
  }
  const ctxValue = {
    investment: investmentReduceState,
    handleChange: handleOnChange
  }
  return (
    <InvestmentContext.Provider value={ctxValue}>
      <div>
        <Header />
        <UserForm />
        <ResultList />
      </div>
    </InvestmentContext.Provider >
  );
}

export default App;
