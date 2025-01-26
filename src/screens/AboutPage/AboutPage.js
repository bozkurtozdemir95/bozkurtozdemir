import React from 'react';
import useThemeStore from "../../stores/themeStore";
import Icon from "../../components/Icon/Icon";
import {useTranslation} from "react-i18next";
import Card from '../../ui/card';

const AboutPage = () => {
    const {darkMode} = useThemeStore();
     const { t } = useTranslation();
     const experiences = [
         {id: 1, position: 'Frontend Developer', company: 'One Inside',  url: 'https://one-inside.com/', location: 'Skopje', start: '2023', end: '2024'},
         {
             id: 2,
             position: 'Frontend Developer',
             company: 'Falcon Gaming',
             url: 'https://falcongaming.io/',
             location: 'Skopje',
             start: '2021',
             end: '2022'
         },
         {
             id: 3,
             position: 'Frontend Developer (Remote)',
             company: 'CPG Gaming',
             location: 'Cyprus',
             start: '2020',
             end: '2021'
         },
         {id: 4, position: 'UI Developer', company: 'Lucky Gaming', location: 'Tbilisi', start: '2019', end: '2020'},
         {id: 5, position: 'UI Developer', company: 'Ses Gaming', url: 'https://sesgaming.io/', location: 'Batumi', start: '2018', end: '2019'},
         {id: 6, position: 'UI Developer', company: 'S Yazılım', location: 'Istanbul', start: '2015', end: '2018'},
     ];
 
     const skills = [
         {id: 1, type: 'UI Development', value: 90},
         {id: 2, type: 'MobileAppDevelopment', value: 40},
         {id: 3, type: 'Frontend Development', value: 75},
         {id: 4, type: 'UIDesign', value: 45},
         {id: 5, type: '3DModelling', value: 30},
         {id: 6, type: 'Backend Development', value: 25},
     ];
 
     const knowledges = [
         {id: 1, type: 'CSS'},
         {id: 2, type: 'SCSS'},
         {id: 3, type: 'UI/UX'},
         {id: 4, type: 'Javascript'},
         {id: 5, type: 'Typescript'},
         {id: 6, type: 'React'},
         {id: 7, type: 'Angular'},
         {id: 8, type: 'Tailwind'},
         {id: 9, type: 'Storybook'},
         {id: 10, type: 'Bootstrap'},
         {id: 11, type: '3DModelling'},
         {id: 12, type: 'Blender 3D'},
         {id: 13, type: 'Laravel'},
         {id: 14, type: 'Nest JS'},
         {id: 15, type: 'PHP'},
         {id: 16, type: 'Material Design'},
         {id: 17, type: 'Figma'},
         {id: 18, type: 'Photoshop'},
         {id: 19, type: 'Adobe XD'},
         {id: 20, type: 'Ionic'},
     ];
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
        <Card padding='lg' variant='glass' className="rounded-2xl ">
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


            <h1 className={` mt-16 pb-3 pr-3 border-b-4 border-b-lime-500 text-4xl font-bold font-title inline-flex mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{t('Resume')}</h1>
            <div className="flex my-8">
                <Icon name={'briefcase'} className={"text-lime-500 mr-4"} size={30}/>
                <h3 className={` ${darkMode ? 'text-white' : 'text-slate-900'} text-2xl font-semibold font-body inline-flex mb-4`}>{t("Experience")}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experiences.map((experience) => (
                    <div
                        className={`border rounded-lg p-4 flex ${darkMode ? 'border-slate-700' : 'border-slate-300'}`}
                        key={'exp'+experience.id}>
                        <div className={'w-fit flex flex-col'}>
                            <span
                                className={` ${darkMode ? 'text-slate-300' : 'text-slate-600'} mb-2 text-xs`}>{experience.start}-{experience.end}</span>
                            <h5 className={`text-xl font-body inline-flex mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{experience.company}<span
                                className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}  ml-2 text-lg`}> - {t(experience.location)}</span>
                            </h5>

                            <a href={experience.url} target='_blank' className={`text-xs font-body inline-flex mb-2 
                                ${darkMode ? 'text-white' : 'text-slate-900'} ${experience.url ? 'opacity-100' : 'opacity-40 cursor-normal'}`}>
                                {experience.url ? t("VisitWebsite") : t("NoActiveWebsite")}
                            </a>
                            <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{experience.position}</p>
                        </div>
                    </div>
                ))}

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
                <div className="grid-col-2 lg:grid-col-1">
                    <div className="flex my-8">
                        <Icon name={'hammer'} className={"text-lime-500 mr-4"} size={30}/>
                        <h3 className={` ${darkMode ? 'text-white' : 'text-slate-900'} text-2xl font-semibold font-body inline-flex mb-4`}>{t("Skills")}</h3>
                    </div>
                    {skills.map((skill) => (
                        <div className="flex flex-col mb-8" key={'skill'+skill.id}>
                            <div className="flex justify-between mb-2">
                                <h6 className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{t(skill.type)}</h6>
                                <span
                                    className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{skill.value}%</span>
                            </div>
                            <div
                                className={`${darkMode ? 'bg-slate-800' : 'bg-slate-200'} w-full rounded-full h-1.5`}>
                                <div className={' h-1.5 rounded-full bg-lime-500 transition-all'}
                                     style={{width: skill.value + '%'}}></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid-col-2 lg:grid-col-1">
                    <div className="flex my-8">
                        <Icon name={'earth'} className={"text-lime-500 mr-4"} size={30}/>
                        <h3 className={` ${darkMode ? 'text-white' : 'text-slate-900'} text-2xl font-semibold font-body inline-flex mb-4`}>{t("Knowledges")}</h3>
                    </div>
                    <div className="flex flex-wrap">
                        {knowledges.map((knowledge) => (
                            <div key={'know'+knowledge.id}
                                 className={`${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-600'} px-3 py-1.5 rounded-md text-sm mr-4 mb-4`}>{t(knowledge.type)}</div>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
}
export default AboutPage;