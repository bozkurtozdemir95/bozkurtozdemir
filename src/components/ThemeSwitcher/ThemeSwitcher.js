import React from 'react';
import useThemeStore from "../../stores/themeStore";
import Icon from "../Icon/Icon";
import Button from '../../ui/button';

const ThemeSwitcher = () => {
    const {darkMode, toggleDarkMode} = useThemeStore();

    return (
        <>
        <Button
            onClick={toggleDarkMode}
            isIconButton={true}
            color={"secondary"}
            size={"lg"}
            className={"ml-4"}
            radius='full'
        >
            <Icon size={24} name={darkMode ? 'sun' : 'moon'} color={"currentColor"}/>
        </Button>
        </>
    );
};

export default ThemeSwitcher;