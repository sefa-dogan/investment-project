import UserInput from "./UserInput.jsx";

export default function UserForm() {



  return (
    <div id="user-input" className="input-group">
      <div>
        <UserInput
          label={"INITIAL INVESTMENT"}
          name="initialInvestment"
        />
        <UserInput
          label={"ANNUAL INVESTMENT"}
          name="annualInvestment"
        />
      </div>
      <div>
        <UserInput
          label={"EXPECTED RETURN"}
          name="expectedReturn"
        />
        <UserInput label={"DURATION"}
          name="duration" />

      </div>
    </div>
  );
}
