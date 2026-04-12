import React from 'react';

export function Button({ 
  variant = 'primary', 
  className = '', 
  children, 
  icon,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 font-bold rounded-full transition-all duration-200 transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/20",
    secondary: "bg-white text-primary border border-primary hover:bg-slate-50",
    outline: "bg-transparent text-primary hover:bg-slate-100",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon && <span className="ms-1">{icon}</span>}
    </button>
  );
}
