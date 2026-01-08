
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button' 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 transition-all duration-300 font-medium tracking-wide uppercase text-sm disabled:opacity-50";
  const variants = {
    primary: "bg-[#1a1a1a] text-white hover:bg-[#333333]",
    secondary: "bg-[#d4cfc9] text-[#1a1a1a] hover:bg-[#c5bfb7]",
    outline: "border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
