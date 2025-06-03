import "./style.css";

function Button({ buttonText }: { buttonText: string }) {
  return <button className="btn">{buttonText}</button>;
}

export default Button;
 