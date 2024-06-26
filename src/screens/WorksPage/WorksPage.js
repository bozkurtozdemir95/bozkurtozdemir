import React from 'react';
import useThemeStore from "../../stores/themeStore";
import {useTranslation} from "react-i18next";

const WorksPage = () => {
    const {darkMode} = useThemeStore();
    const { t } = useTranslation();
    return (
        <div className={`p-6 py-10 md:p-16 rounded-2xl ${
            darkMode ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900'
        }`}>
            <h1 className={` pb-3 pr-3 border-b-4 border-b-teal-500 text-4xl font-bold font-title inline-flex mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{t('Works')}</h1>
        </div>
    );
}
export default WorksPage;