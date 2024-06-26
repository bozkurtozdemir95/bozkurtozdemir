import React, {useState} from 'react'
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import logo from '../../assets/img/logo.svg';
import {useTranslation} from "react-i18next";
import '../../i18n.js'
import {classNames} from "../../utils/utils";
import useThemeStore from "../../stores/themeStore";
import enImg from '../../assets/icons/en.svg';
import trImg from '../../assets/icons/tr.svg';

const Header = () => {
    const {darkMode} = useThemeStore();
    const {i18n: {changeLanguage, language}} = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);

    const langs = {
        en: enImg,
        tr: trImg,
    };
    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "tr" : "en";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }


    return (
        <div className="container mx-auto py-8 mb-16">
            <div className="flex justify-between items-start">
                <img src={logo} className="max-w-40" alt={'Bozkurt Ozdemir'}/>
                <div className="flex items-center">
                    <ThemeSwitcher/>
                    <button
                        onClick={handleChangeLanguage}
                        className={classNames('p-4 ml-4 rounded-full', {
                            'bg-slate-100 text-slate-900': !darkMode,
                            'bg-slate-900 text-white': darkMode,
                        })}
                    >
                        <img width={24} src={langs[currentLanguage]} alt={currentLanguage.toUpperCase()}/>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Header;
