import imgPath from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <div id="header">
      <img src={imgPath} />
      <h1>Investment Calculator</h1>
    </div>
  );
}
