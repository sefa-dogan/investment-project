import { useContext } from "react";
import { InvestmentContext } from "../store/investment-context.jsx";
export default function UserInput({ label, name }) {
  const { investment, handleChange } = useContext(InvestmentContext);


  function handleOnInput(newVal) {

    newVal && handleChange({
      ...investment,
      [name]: parseInt(newVal)
    })
  }

  return (
    <div>
      <label>{label}</label>
      <input type={name == "duration" ? "number" : "text"} onInput={(e) => { handleOnInput(e.target.value) }} name={name} />
    </div>
  );
}
