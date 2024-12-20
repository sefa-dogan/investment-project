import UserInput from "./UserInput.jsx";
export default function UserForm({ onChange }) {
  let investment = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  };

  return (
    <div id="user-input" className="input-group">
      <div>
        <UserInput
          label={"INITIAL INVESTMENT"}
          value={investment.initialInvestment}
        />
        <UserInput
          label={"ANNUAL INVESTMENT"}
          value={investment.annualInvestment}
        />
      </div>
      <div>
        <UserInput
          label={"EXPECTED RETURN"}
          value={investment.expectedReturn}
        />
        <UserInput label={"DURATION"} value={investment.duration} />
      </div>
    </div>
  );
}
