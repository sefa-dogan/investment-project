export default function UserInput({ label, val }) {
  return (
    <div>
      <label>{label}</label>
      <input type="number" oninput={val} />
    </div>
  );
}
