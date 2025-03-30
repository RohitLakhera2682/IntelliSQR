import React from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface InputProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    type: string;
    className?: string;
    name: Path<T>; 
    register: UseFormRegister<T>; 
    error?: string;
  }
  
  const Input = <T extends FieldValues>({ name, register, placeholder = "text", type, className = "", error, ...rest }: InputProps<T>) => {
    return (
      <div>
        <input
          className={`${className} mb-5 p-2 w-full border-2 rounded-md`}
          type={type}
          placeholder={placeholder}
          {...register(name)} {...rest} 
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  };
  
  export default Input;
  