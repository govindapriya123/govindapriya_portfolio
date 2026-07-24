import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?:"primary" | "secondary"|"outline";
}

const Button=({children,variant="primary",className="",...props}:ButtonProps)=>{
  const baseClasses="rounded-lg px-5 py-2.5 font-medium transition-colors duration-200";
  const variantClasses={
    primary:"bg-blue-600  text-white hover:bg-blue-700",
    secondary:"bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline:"border border-blue-600 text-blue-600 hover:bg-blue-50"
  }
  return(
    <button
    className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    {...props}
    >
      {children}
    </button>
  )
}
export default Button;