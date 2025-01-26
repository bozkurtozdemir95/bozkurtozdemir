import React from 'react';
import useThemeStore from "../stores/themeStore";

const Card = ({
  children,
  className = '',
  padding = 'md',
  hover = false
}) => {

  const variant = useThemeStore(state => state.variant);
  const baseStyles = 'transition-all duration-200 rounded-2xl';

  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'py-6 px-8',
    lg: 'p-8 py-12 md:p-20'
  };

  const variantStyles = {
    glass: `
      backdrop-blur-md border
      dark:bg-slate-900/50 dark:text-white dark:border-slate-800
      bg-slate-100/20 text-slate-900 border-slate-200
      ${hover ? 'hover:bg-slate-200 dark:hover:bg-slate-800' : ''}
    `,
    plastic: `
      border
      dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 dark:text-white dark:border-slate-700
      bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900 border-slate-200
      ${hover ? 'hover:from-slate-100 hover:to-slate-200 dark:hover:from-slate-700 dark:hover:to-slate-800' : ''}
    `,
    metallic: `
      border shadow-lg
      dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-950 dark:text-white dark:border-slate-700
      bg-gradient-to-b from-slate-100 to-slate-200 text-slate-900 border-slate-300
      ${hover ? 'hover:from-slate-200 hover:to-slate-300 dark:hover:from-slate-700 dark:hover:to-slate-900' : ''}
    `
  };

  return (
    <div
      className={`
        ${baseStyles}
        ${paddingStyles[padding]}
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;