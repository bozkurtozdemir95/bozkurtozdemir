import React from 'react'
import useThemeStore from "../../stores/themeStore";
const Sidebar = () => {
    const { darkMode } = useThemeStore();
    return (
        <div className={`p-16 rounded-2xl ${
            darkMode ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900'
        }`}>
            Sidebar
        </div>
    );
};
export default Sidebar;
