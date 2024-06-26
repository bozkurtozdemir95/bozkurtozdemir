import React from 'react';
import useThemeStore from "../../stores/themeStore";
import Icon from "../Icon/Icon";
import {classNames} from "../../utils/utils";

const ThemeSwitcher = () => {
    const {darkMode, toggleDarkMode} = useThemeStore();

    return (
        <button
            onClick={toggleDarkMode}
            className={classNames('p-4 rounded-full transition-all', {
                'bg-slate-100 text-slate-900 hover:bg-slate-200': !darkMode,
                'bg-slate-900 text-white hover:bg-slate-700': darkMode,
            })}
        >
            <Icon size={24} name={darkMode ? 'sun' : 'moon'} color={"currentColor"}/>
        </button>
    );
};

export default ThemeSwitcher;