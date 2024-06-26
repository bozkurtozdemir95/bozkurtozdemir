import React from 'react';
import Icon from "../../components/Icon/Icon";
import useThemeStore from "../../stores/themeStore";
const ContactPage = () => {
    const {darkMode} = useThemeStore();

    return (
        <div className={`p-6 py-10 md:p-16 rounded-2xl ${
            darkMode ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900'
        }`}>
            <h1 className={` pb-3 pr-3 border-b-4 border-b-teal-500 text-4xl font-bold font-title inline-flex mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Contact</h1>

            <form
                className={`p-6 py-10 mt-8 text-4xl rounded-2xl ${darkMode ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-900'}`}>
                <div className="flex flex-col-reverse mb-8">
                    <input
                        className="peer h-full w-full border-b border-teal-400 bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all
                            placeholder-shown:border-slate-700
                        focus:border-teal-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        id="name" type="text" placeholder="Name"/>
                    <label
                        className={`text-base font-body inline-flex peer-focus:text-teal-200 ${darkMode ? 'text-white' : 'text-slate-900'}`}
                        htmlFor="name">
                        Name *
                    </label>
                </div>
                <div className="flex flex-col-reverse mb-8">
                    <input
                        className="peer h-full w-full border-b border-teal-400 bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all
                       placeholder-shown:border-slate-700
                        focus:border-teal-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        id="email" type="text" placeholder="Email"/>
                    <label
                        className={`text-base font-body inline-flex peer-focus:text-teal-200 ${darkMode ? 'text-white' : 'text-slate-900'}`}
                        htmlFor="email">
                        Email *
                    </label>
                </div>
                <div className="flex flex-col-reverse mb-8">
                    <textarea
                        className="peer h-full w-full border-b border-teal-400 bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all
                        placeholder-shown:border-slate-700
                        focus:border-teal-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        id="message" placeholder="Message"/>
                    <label
                        className={`text-base font-body inline-flex peer-focus:text-teal-200 ${darkMode ? 'text-white' : 'text-slate-900'}`}
                        htmlFor="message">
                        Message *
                    </label>
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className={`border-teal-500 text-white ${darkMode ? 'bg-transparent' : 'bg-teal-500'} border-2 hover:border-teal-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-base px-5 py-3.5 text-center inline-flex items-center me-2 focus:ring-teal-500`}>
                        <span className={`text-md font-body inline-flex text-white`}>Submit</span>
                        <Icon className={'transition-all ml-4'} name={'send'} size={22} color={'white'}/>
                    </button>
                </div>
            </form>
        </div>
    );
}
export default ContactPage;