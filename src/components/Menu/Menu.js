import React from 'react'
import useThemeStore from "../../stores/themeStore";
import Icon from "../Icon/Icon";
import menu from "../../stores/menu";
import {classNames} from "../../utils/utils";
import { NavLink } from 'react-router-dom';
import {useTranslation} from "react-i18next";

const Menu = () => {
    const {darkMode} = useThemeStore();
    const { t } = useTranslation();

    return (
        <div className={`py-4 flex justify-center rounded-2xl ${
            darkMode ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900'
        }`}>
            <ul className="flex flex-col gap-4">

                    {menu.map((e, i) => {
                        return (
                            <li key={'menu'+i}>
                                <NavLink to={e.path}  className={ ({ isActive }) => classNames('w-16 h-16 flex flex-col items-center justify-center text-center rounded-lg p-3', {
                                       'bg-lime-500 text-white': isActive,
                                       'bg-slate-700 text-slate-400 hover:bg-lime-300 hover:text-slate-800': !isActive && darkMode,
                                       'bg-slate-300 text-slate-800 hover:bg-lime-200': !isActive && !darkMode,
                                   })}>
                                    <Icon name={e.icon} color={"currentColor"}/>
                                    <span className={classNames('mt-1 text-xs font-semibold')}>{t(e.name)}</span>
                                </NavLink>
                            </li>
                        )
                    })}

            </ul>
        </div>
    );
};
export default Menu;
