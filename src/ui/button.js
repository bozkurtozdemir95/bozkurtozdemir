import React from 'react';
import useThemeStore from "../stores/themeStore";
const Button = ({ 
  size = 'md',
  color = 'primary',
  radius = 'md',
  children, 
  isIconButton = false,
  disabled = false,
  download,
  onClick,
  href,
  className = ''
}) => {

  
  const variant = useThemeStore(state => state.variant);
  const baseStyles = 'font-medium transition-all duration-200 focus:outline-none';
  
  const sizeStyles = {
    sm: isIconButton ? 'p-2' : 'px-3 py-1.5 text-sm',
    md: isIconButton ? 'p-3' : 'px-4 py-2 text-base',
    lg: isIconButton ? 'p-4' : 'px-6 py-3 text-lg'
  };

  const radiusStyles = {
    none: 'rounded-none',
    sm: 'rounded',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full'
  };

  const colorStyles = {
    primary: {
      glass: 'bg-lime-500/10 hover:bg-lime-500/20 active:bg-lime-500/30 border-lime-500/20 text-lime-50',
      plastic: 'bg-gradient-to-b from-lime-400/90 to-lime-500/70 hover:from-lime-400 hover:to-lime-500/80 border-lime-400/40 text-white',
      metallic: 'bg-gradient-to-b from-lime-100 to-lime-300 hover:from-lime-200 hover:to-lime-400 border-lime-400 text-lime-900'
    },
    secondary: {
      glass: 'bg-slate-100/20 hover:bg-slate-100/20 active:bg-slate-100/30 border-slate-100/20 text-slate-50 dark:bg-slate-900/50 dark:hover:bg-slate-900/0 dark:text-white',
      plastic: 'bg-gradient-to-b from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 border-slate-300 text-slate-900 dark:from-slate-800 dark:to-slate-900 dark:hover:from-slate-700 dark:hover:to-slate-800 dark:text-white',
      metallic: 'bg-gradient-to-b from-slate-100 to-slate-300 hover:from-slate-200 hover:to-slate-400 border-slate-400 text-slate-900 dark:from-slate-700 dark:to-slate-900 dark:hover:from-slate-600 dark:hover:to-slate-800 dark:text-white'
    },
    success: {
      glass: 'bg-green-500/40 hover:bg-green-500/30 active:bg-green-500/40 border-green-500/30 text-green-50',
      plastic: 'bg-gradient-to-b from-green-400/90 to-green-500/70 hover:from-green-400 hover:to-green-500/80 border-green-400/40 text-white',
      metallic: 'bg-gradient-to-b from-green-100 to-green-300 hover:from-green-200 hover:to-green-400 border-green-400 text-green-900'
    },
    warning: {
      glass: 'bg-yellow-500/10 hover:bg-yellow-500/20 active:bg-yellow-500/30 border-yellow-500/20 text-yellow-50',
      plastic: 'bg-gradient-to-b from-yellow-400/90 to-yellow-500/70 hover:from-yellow-400 hover:to-yellow-500/80 border-yellow-400/40 text-white',
      metallic: 'bg-gradient-to-b from-yellow-100 to-yellow-300 hover:from-yellow-200 hover:to-yellow-400 border-yellow-400 text-yellow-900'
    },
    danger: {
      glass: 'bg-red-500/10 hover:bg-red-500/20 active:bg-red-500/30 border-red-500/20 text-red-50',
      plastic: 'bg-gradient-to-b from-red-400/90 to-red-500/70 hover:from-red-400 hover:to-red-500/80 border-red-400/40 text-white',
      metallic: 'bg-gradient-to-b from-red-100 to-red-300 hover:from-red-200 hover:to-red-400 border-red-400 text-red-900'
    }
  };

  const variantStyles = {
    glass: 'backdrop-blur-md border shadow-lg',
    plastic: 'shadow-md border',
    metallic: 'shadow-md border'
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <>
     {!href ?
        <button
        onClick={onClick}
        disabled={disabled}
        className={`
          ${baseStyles}
          ${sizeStyles[size]}
          ${radiusStyles[radius]}
          ${colorStyles[color][variant]}
          ${variantStyles[variant]}
          ${disabled ? disabledStyles : ''}
          ${className}
        `}
        >
        {children}
        </button>

        :
      <a
      download={download}
        disabled={disabled}
        href={href}
        className={`
          ${baseStyles}
          ${sizeStyles[size]}
          ${radiusStyles[radius]}
          ${colorStyles[color][variant]}
          ${variantStyles[variant]}
          ${disabled ? disabledStyles : ''}
          ${className}
        `}
      >
          {children}
      </a>
     
     }

      

    </>
  );
};

export default Button;