export default function UserInput({ label, name, onParamsChange, investmentParams }) {


  function handleOnInput(newVal) {

    newVal && onParamsChange({
      ...investmentParams,
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
