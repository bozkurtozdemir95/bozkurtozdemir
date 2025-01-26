import React, {useState, useRef, useEffect} from 'react';
import useThemeStore from '../stores/themeStore';
import Button from '../ui/button';
import Icon from './Icon/Icon';

const VariantSwitcher = () => {
    const [isOpen,
        setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const currentVariant = useThemeStore(state => state.variant);
    const setVariant = useThemeStore(state => state.setVariant);
    const variants = ['glass', 'plastic', 'metallic'];

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            <Button
          onClick={() => setIsOpen(!isOpen)}
            isIconButton={true}
            color={"secondary"}
            size={"lg"}
            radius='full'
        >
            <Icon size={24} name={'palette'} color={"currentColor"}/>
        </Button>
            {isOpen && (
                <div
                    className="absolute right-0 mt-2 bg-slate-900/95 rounded-lg py-1 min-w-[120px] shadow-xl border border-slate-800">
                    {variants.map((variant) => (
                        <button
                            key={variant}
                            onClick={() => {
                            setVariant(variant);
                            setIsOpen(false);
                        }}
                            className={` w-full px-3 py-1.5 text-left text-sm capitalize transition-colors ${currentVariant === variant
                            ? 'bg-slate-800 text-white'
                            : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'} `}>
                            {variant}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default VariantSwitcher;