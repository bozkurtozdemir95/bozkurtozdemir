import React, { useState, useRef, useEffect } from 'react';
import useThemeStore from '../stores/themeStore';
import Button from './button';

const Dropdown = ({
  items = [],
  placeholder = 'Select an item',
  value = null,
  onChange,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const variant = useThemeStore(state => state.variant);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const variantStyles = {
    glass: `
      backdrop-blur-md border
      dark:bg-slate-900 dark:text-white dark:border-slate-800
      bg-slate-100 text-slate-900 border-slate-200
    `,
    plastic: `
      border
      dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 dark:text-white dark:border-slate-700
      bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900 border-slate-200
    `,
    metallic: `
      border shadow-lg
      dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-950 dark:text-white dark:border-slate-700
      bg-gradient-to-b from-slate-100 to-slate-200 text-slate-900 border-slate-300
    `
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          ${variantStyles[variant]}
          ${className}
        `}
      >
        <span>{value || placeholder}</span>
      </Button>

      {isOpen && (
        <div className={`
          absolute z-50 w-full mt-1 rounded-lg
          max-h-60 overflow-auto
          ${variantStyles[variant]}
        `}>
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                onChange(item);
                setIsOpen(false);
              }}
              className={`
                px-4 py-2 cursor-pointer
                transition-colors duration-200
                hover:bg-white/10 dark:hover:bg-slate-800
                ${value === item ? 'bg-white/20 dark:bg-slate-700' : ''}
              `}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;