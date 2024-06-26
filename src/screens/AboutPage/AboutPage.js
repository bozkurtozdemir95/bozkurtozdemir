import React from 'react';
import useThemeStore from "../../stores/themeStore";
import Icon from "../../components/Icon/Icon";

const AboutPage = () => {
    const {darkMode} = useThemeStore();

    const work = [
        {
            id: 1,
            title: 'UI/UX Development',
            description: 'Crafting high-performance, responsive interfaces with clean code for user friendly experiences.',
            icon: 'css',
            iconColor: 'currentColor',
            iconClassName: 'text-blue-500 mr-4'
        },
        {
            id: 2,
            title: 'Website Development',
            description: 'Building responsive and scalable websites with clean code for optimal performance across devices.',
            icon: 'code',
            iconColor: '',
            iconClassName: 'text-yellow-500 mr-4'
        },
        {
            id: 3,
            title: '3D Modelling',
            description: 'In my spare time, I love creating objects and characters. It is filling my lifelong passion for drawing, painting, designing, and building',
            icon: 'cube',
            iconColor: '',
            iconClassName: 'text-orange-500 mr-4'
        },
    ];

    return (
        <div className={`p-6 py-10 md:p-16 rounded-2xl ${
            darkMode ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900'
        }`}>
            <h1 className={` pb-3 pr-3 border-b-4 border-b-teal-500 text-4xl font-bold font-title inline-flex mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>About</h1>
            <p className={`mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>I'm a self-developed Frontend
                Developer from Istanbul, Turkey, working
                in web development and browser games. I enjoy turning designs into clean, pixel-perfect, and creative
                code.</p>
            <p className={`mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>My goal is to create user interfaces
                focused on convenience, performance,
                responsiveness, and clean code. I have worked on many game and website projects.</p>
            <h3 className={` ${darkMode ? 'text-white' : 'text-slate-900'} mt-8 pb-3 pr-3 text-2xl font-semibold font-body inline-flex mb-4`}>What
                I
                Do?</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {work.map((work) => (
                <div
                    className={`border rounded-lg p-4 flex ${darkMode ? 'border-slate-700' : 'border-slate-300'}`}>
                    <Icon name={work.icon} className={work.iconClassName} color={work.iconColor} size={50}/>
                    <div className={'w-fit'}>
                        <h5 className={`${darkMode ? 'text-white' : 'text-slate-900'} text-xl font-semibold font-body inline-flex mb-2`}>{work.title}</h5>
                        <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{work.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}
export default AboutPage;