import UserInput from "./UserInput.jsx";
export default function UserForm({ onParamsChange, investmentParams }) {


  return (
    <div id="user-input" className="input-group">
      <div>
        <UserInput
          label={"INITIAL INVESTMENT"}
          name="initialInvestment"
          onParamsChange={onParamsChange}
          investmentParams={investmentParams}
        />
        <UserInput
          label={"ANNUAL INVESTMENT"}
          name="annualInvestment"
          onParamsChange={onParamsChange}
          investmentParams={investmentParams}
        />
      </div>
      <div>
        <UserInput
          label={"EXPECTED RETURN"}
          name="expectedReturn"
          onParamsChange={onParamsChange}
          investmentParams={investmentParams}
        />
        <UserInput label={"DURATION"}
          name="duration"
          onParamsChange={onParamsChange}
          investmentParams={investmentParams} />
      </div>
    </div>
  );
}
