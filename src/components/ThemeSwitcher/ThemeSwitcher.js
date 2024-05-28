import React from 'react';
import useThemeStore from "../../stores/themeStore";
import Icon from "../Icon/Icon";
import {classNames} from "../../utils/utils";

const ThemeSwitcher = () => {
    const {darkMode, toggleDarkMode} = useThemeStore();

    return (
        <button
            onClick={toggleDarkMode}
            className={classNames('p-4 rounded-full', {
                'bg-slate-100 text-slate-900': !darkMode,
                'bg-slate-900 text-white': darkMode,
            })}
        >
            <Icon name={darkMode ? 'sun' : 'moon'} color={"currentColor"}/>
        </button>
    );
};

export default ThemeSwitcher;