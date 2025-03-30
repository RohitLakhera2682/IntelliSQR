import React from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface InputProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    type: string;
    className?: string;
    name: Path<T>; // `name` should be required
    register: UseFormRegister<T>; // Ensure `register` is a function
    error?: string;
  }
  
  const Input = <T extends FieldValues>({ name, register, placeholder = "text", type, className = "", error, ...rest }: InputProps<T>) => {
    return (
      <div>
        <input
          className={`${className} mb-5 p-2 w-full border-2 rounded-md`}
          type={type}
          placeholder={placeholder}
          {...register(name)} {...rest} // Spread `register(name)` only if `register` is provided
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  };
  
  export default Input;
  