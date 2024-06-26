import React from 'react';
import Icon from "../../components/Icon/Icon";
import useThemeStore from "../../stores/themeStore";
import {useTranslation} from "react-i18next";
const ContactPage = () => {
    const {darkMode} = useThemeStore();
    const { t } = useTranslation();
    return (
        <div className={`p-6 py-10 md:p-16 rounded-2xl ${
            darkMode ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900'
        }`}>
            <h1 className={` pb-3 pr-3 border-b-4 border-b-lime-500 text-4xl font-bold font-title inline-flex mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{t('Contact')}</h1>

            <form
                className={`p-6 py-10 mt-8 text-4xl rounded-2xl ${darkMode ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-900'}`}>
                <div className="flex flex-col-reverse mb-8">
                    <input
                        className="peer h-full w-full border-b border-lime-400 bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all
                            placeholder-shown:border-slate-700
                        focus:border-lime-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        id="name" type="text" placeholder={t('Name')}/>
                    <label
                        className={`text-base font-body inline-flex peer-focus:text-lime-200 ${darkMode ? 'text-white' : 'text-slate-900'}`}
                        htmlFor="name">
                        {t('Name')} *
                    </label>
                </div>
                <div className="flex flex-col-reverse mb-8">
                    <input
                        className="peer h-full w-full border-b border-lime-400 bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all
                       placeholder-shown:border-slate-700
                        focus:border-lime-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        id="email" type="text" placeholder={t('Email')}/>
                    <label
                        className={`text-base font-body inline-flex peer-focus:text-lime-200 ${darkMode ? 'text-white' : 'text-slate-900'}`}
                        htmlFor="email">
                        {t('Email')} *
                    </label>
                </div>
                <div className="flex flex-col-reverse mb-8">
                    <textarea
                        className="peer h-full w-full border-b border-lime-400 bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all
                        placeholder-shown:border-slate-700
                        focus:border-lime-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        id="message" placeholder={t('Message')}/>
                    <label
                        className={`text-base font-body inline-flex peer-focus:text-lime-200 ${darkMode ? 'text-white' : 'text-slate-900'}`}
                        htmlFor="message">
                        {t('Message')} *
                    </label>
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className={`border-lime-500 text-white ${darkMode ? 'bg-transparent' : 'bg-lime-500'} border-2 hover:border-lime-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-base px-5 py-3.5 text-center inline-flex items-center me-2 focus:ring-lime-500`}>
                        <span className={`text-md font-body inline-flex text-white`}>{t('Submit')}</span>
                        <Icon className={'transition-all ml-4'} name={'send'} size={22} color={'white'}/>
                    </button>
                </div>
            </form>
        </div>
    );
}
export default ContactPage;