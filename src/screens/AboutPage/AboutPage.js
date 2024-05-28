import React from 'react';
import useThemeStore from "../../stores/themeStore";
import Icon from "../../components/Icon/Icon";

const AboutPage = () => {
    const {darkMode} = useThemeStore();

    return (
        <div className={`p-16 rounded-2xl ${
            darkMode ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900'
        }`}>
            <h1 className={` pb-3 pr-3 border-b-4 border-b-teal-500 text-4xl font-bold font-title inline-flex mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>About</h1>
            <p className={`mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>I'm a self-developed Frontend Developer from Istanbul, Turkey, working
                in web development and browser games. I enjoy turning designs into clean, pixel-perfect, and creative
                code.</p>
            <p className={`mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>My goal is to create user interfaces focused on convenience, performance,
                responsiveness, and clean code. I have worked on many game and website projects.</p>
            <h3 className={` ${darkMode ? 'text-white' : 'text-slate-900'} mt-8 pb-3 pr-3 text-2xl font-semibold font-body inline-flex mb-4`}>What I
                Do?</h3>
            <div className="grid grid-cols-2 gap-4">
                <div
                    className={`grid-col-2 lg:grid-col-1 border rounded-lg p-4 flex ${darkMode ? 'border-slate-700' : 'border-slate-300'}`}>
                    <Icon name={'css'} className={"text-blue-500 mr-4"} color={'currentColor'} size={50}/>
                    <div className={'w-fit'}>
                        <h5 className={`${darkMode ? 'text-white' : 'text-slate-900'} text-xl font-semibold font-body inline-flex mb-2`}>UI/UX
                            Development</h5>
                        <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Crafting high-performance,
                            responsive interfaces with clean code
                            for user friendly experiences.</p>
                    </div>
                </div>
                <div
                    className={`grid-col-2 lg:grid-col-1 border rounded-lg p-4 flex ${darkMode ? 'border-slate-700' : 'border-slate-300'}`}>
                    <Icon name={'code'} className={"text-yellow-500 mr-4"} size={50}/>
                    <div className={'w-fit'}>
                        <h5 className={`${darkMode ? 'text-white' : 'text-slate-900'} text-xl font-semibold font-body inline-flex mb-2`}>Website
                            Development</h5>
                        <p className={`mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Building responsive and
                            scalable websites with clean code for
                            optimal performance across devices.</p>
                    </div>
                </div>
                <div
                    className={`grid-col-2 lg:grid-col-1 border rounded-lg p-4 flex ${darkMode ? 'border-slate-700' : 'border-slate-300'}`}>
                    <Icon name={'cube'} className={"text-orange-500 mr-4"} size={50}/>
                    <div className={'w-fit'}>
                        <h5 className={`${darkMode ? 'text-white' : 'text-slate-900'} text-xl font-semibold font-body inline-flex mb-2`}>3D
                            Modelling</h5>
                        <p className={`mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>In my spare time, I love
                            creating objects and characters. It is
                            filling my lifelong passion for drawing, painting, designing, and building</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutPage;