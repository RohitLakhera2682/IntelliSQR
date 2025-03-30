interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({ children, type = "submit", disabled = false }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`py-2 w-full text-white bg-blue-900 rounded-md ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
