import React, {useEffect, useState} from 'react'
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import logo from '../../assets/img/logo.svg';
import {useTranslation} from "react-i18next";
import '../../i18n.js'
import {classNames} from "../../utils/utils";
import useThemeStore from "../../stores/themeStore";
import enImg from '../../assets/icons/en.svg';
import trImg from '../../assets/icons/tr.svg';
import Icon from "../Icon/Icon";
import menu from "../../stores/menu";
import {NavLink} from "react-router-dom";

const Header = () => {
    const {darkMode} = useThemeStore();
    const {i18n: {changeLanguage, language}} = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);
    const [menuVisible, setMenuVisible] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const {t} = useTranslation();

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const langs = {
        en: enImg,
        tr: trImg,
    };
    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "tr" : "en";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }
    const isMediumScreen = width <= 1280;
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }
    return (
        <div className={`container mx-auto py-8 mb-8 relative ${isMediumScreen ? 'px-4' : ' px-0'}`}>
            <div className="flex justify-between items-start z-20">
                <img src={logo} className={`${isMediumScreen ? 'max-w-32' : ''}`} alt={'Bozkurt Ozdemir'}/>
                <div className="flex items-center">
                    <ThemeSwitcher/>
                    <button
                        onClick={handleChangeLanguage}
                        className={classNames('p-4 ml-4 rounded-full transition-all', {
                            'bg-slate-100 text-slate-900 hover:bg-slate-200': !darkMode,
                            'bg-slate-900 text-white hover:bg-slate-700': darkMode,
                        })}
                    >
                        <img width={24} src={langs[currentLanguage]} alt={currentLanguage.toUpperCase()}/>
                    </button>

                    {isMediumScreen &&
                        <div className={`relative z-10`}>
                            <button
                                onClick={toggleMenu}
                                className={classNames('p-4 ml-4 rounded-full transition-all', {
                                    'bg-slate-100 text-slate-900 hover:bg-slate-300': !menuVisible && !darkMode,
                                    'bg-slate-900 text-white hover:bg-slate-700': !menuVisible && darkMode,
                                    'bg-slate-700 text-white': menuVisible && darkMode,
                                    'bg-slate-300 text-slate-900': menuVisible && !darkMode,
                                })}
                            >
                                <Icon size={24} name={menuVisible ? 'close' : 'menu'} color={"currentColor"}/>
                            </button>
                        </div>
                    }
                </div>
            </div>
            {isMediumScreen &&
                <div
                    className={classNames('w-full absolute z-20 top-full left-0 rounded-xl overflow-hidden shadow-lg transition-max-height', {
                        'bg-slate-300 text-slate-900 max-h-96 p-4': !menuVisible && !darkMode,
                        'bg-slate-800 text-white0 max-h-0': !menuVisible && darkMode,
                        'bg-slate-800 text-white max-h-96 p-4': menuVisible && darkMode,
                        'bg-slate-300 text-slate-900 max-h-0': menuVisible && !darkMode,
                    })}>
                    <ul className="flex flex-col">

                        {menu.map((e, i) => {
                            return (
                                <li key={'menu' + i}>
                                    <NavLink to={e.path}
                                             className={({isActive}) => classNames('flex items-center justify-center text-center rounded-lg p-4 mb-2', {
                                                 'bg-lime-500 text-white': isActive,
                                                 'bg-slate-900 text-slate-400': !isActive && darkMode,
                                                 'bg-slate-100 text-slate-800': !isActive && !darkMode,
                                             })}>
                                        <Icon name={e.icon} color={"currentColor"}/>
                                        <span
                                            className={classNames('mt-1 ml-4 text-base font-semibold')}>{t(e.name)}</span>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
            {isMediumScreen && menuVisible &&
            <div  onClick={toggleMenu} className={'fixed w-full h-full top-0 left-0 z-10 bg-black opacity-50'}></div>
            }
        </div>
    )
        ;
};
export default Header;
