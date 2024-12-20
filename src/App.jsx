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

  function handleOnChange() {
    console.log("tetiklendi");
    setInvestmentParams();
  }

  return (
    <div>
      <Header />
      <UserForm onChange={handleOnChange} />
      <ResultList data={investmentParams} />
    </div>
  );
}

export default App;
