import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs sm:text-sm',
    md: 'px-6 py-3 text-sm sm:text-base',
    lg: 'px-8 py-4 text-base sm:text-lg shadow-lg'
  };

  const variantStyles = {
    primary: 'bg-[#0056A6] text-white hover:bg-[#003F7D] focus:ring-[#0056A6] shadow-md hover:shadow-xl',
    gold: 'bg-[#F4B400] text-slate-900 hover:bg-[#D89F00] focus:ring-[#F4B400] shadow-md hover:shadow-xl font-bold',
    secondary: 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900 shadow-md',
    outline: 'border-2 border-[#0056A6] text-[#0056A6] hover:bg-[#0056A6] hover:text-white focus:ring-[#0056A6]',
    ghost: 'text-slate-700 hover:bg-slate-100 focus:ring-slate-400'
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};
