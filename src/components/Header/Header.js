import React from 'react'
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import logo from '../../assets/img/logo.svg';
const Header = () => {

    return (
        <div className="container mx-auto py-8 mb-24">
            <div className="flex justify-between items-start">
                <img src={logo} className="max-w-40"/>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};
export default Header;
