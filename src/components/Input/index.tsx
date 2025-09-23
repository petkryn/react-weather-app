import "./style.css";

interface InputInterfaceProps {
  customType: string;
  customPlaceholder: string;
  isDisabled: boolean;
  customValue?: string;
  customOnChange: (e: any) => void;
}

const Input: React.FC<InputInterfaceProps> = ({
  customType,
  customPlaceholder,
  isDisabled,
  customValue,
  customOnChange,
}) => {
  return (
    <input
      className="input"
      placeholder={customPlaceholder}
      type={customType}
      disabled={isDisabled}
      value={customValue}
      onChange={customOnChange}
    />
  );
};

export default Input;
