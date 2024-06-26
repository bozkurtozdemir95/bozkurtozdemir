import React from 'react';
import useThemeStore from "../../stores/themeStore";
import Icon from "../../components/Icon/Icon";
import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const {darkMode} = useThemeStore();
    const { t } = useTranslation();
    const work = [
        {
            id: 1,
            title: 'UIUXDevelopment',
            description: 'UIUXDevelopmentDescription',
            icon: 'css',
            iconColor: 'currentColor',
            iconClassName: 'text-blue-500 mr-4'
        },
        {
            id: 2,
            title: 'WebsiteDevelopment',
            description: 'WebsiteDevelopmentDescription',
            icon: 'code',
            iconColor: '',
            iconClassName: 'text-yellow-500 mr-4'
        },
        {
            id: 3,
            title: '3DModelling',
            description: '3DModellingDescription',
            icon: 'cube',
            iconColor: '',
            iconClassName: 'text-orange-500 mr-4'
        },
    ];

    return (
        <div className={`p-6 py-10 md:p-16 rounded-2xl ${
            darkMode ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900'
        }`}>
            <h1 className={` pb-3 pr-3 border-b-4 border-b-lime-500 text-4xl font-bold font-title inline-flex mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{t('About')}</h1>
            <p className={`mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{t('AboutDescription1')}</p>
            <p className={`mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{t('AboutDescription2')}</p>
            <h3 className={` ${darkMode ? 'text-white' : 'text-slate-900'} mt-8 pb-3 pr-3 text-2xl font-semibold font-body inline-flex mb-4`}>{t('WhatIDo')}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {work.map((work) => (
                <div
                    key={'work'+work.id}
                    className={`border rounded-lg p-4 flex ${darkMode ? 'border-slate-700' : 'border-slate-300'}`}>
                    <Icon name={work.icon} className={work.iconClassName} color={work.iconColor} size={50}/>
                    <div className={'w-fit'}>
                        <h5 className={`${darkMode ? 'text-white' : 'text-slate-900'} text-xl font-semibold font-body inline-flex mb-2`}>{t(work.title)}</h5>
                        <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{t(work.description)}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}
export default AboutPage;