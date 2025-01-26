import React, {useEffect, useState} from 'react'
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import logo from '../../assets/img/logo.svg';
import {useTranslation} from "react-i18next";
import '../../i18n.js'
import useThemeStore from "../../stores/themeStore";
import enImg from '../../assets/icons/en.svg';
import trImg from '../../assets/icons/tr.svg';
import Button from '../../ui/button.js';
import VariantSwitcher from '../VariantSwitcher.js';

const Header = () => {
    const {darkMode} = useThemeStore();
    const {i18n: {changeLanguage, language}} = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);
    const [width, setWidth] = useState(window.innerWidth);
    const {t} = useTranslation();
    const [selected, setSelected] = useState(null);


    const items = ['glass', 'plastic', 'metallic'];
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
    return (
        <div className={`container mx-auto py-8 mb-8 relative ${isMediumScreen ? 'px-4' : ' px-0'}`}>
            <div className="flex justify-between items-start z-20">
                <img src={logo} className={`${isMediumScreen ? 'max-w-32' : ''}`} alt={'Bozkurt Ozdemir'}/>
                <div className="flex items-center">
                    <VariantSwitcher/> 
                    <ThemeSwitcher/>
                    <Button
                      isIconButton={true}
                      color={"secondary"}
                      size={"lg"}
                      radius='full'
                        onClick={handleChangeLanguage}
                        className={"ml-4"}
                    >
                        <img width={24} src={langs[currentLanguage]} alt={currentLanguage.toUpperCase()}/>
                    </Button>

                </div>
            </div>
        </div>
    )
        ;
};
export default Header;
