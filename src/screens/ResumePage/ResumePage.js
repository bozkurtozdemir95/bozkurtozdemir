import React from 'react';
import Icon from "../../components/Icon/Icon";
import useThemeStore from "../../stores/themeStore";
import {useTranslation} from "react-i18next";

const ResumePage = () => {
    const {darkMode} = useThemeStore();
    const { t } = useTranslation();
    const experiences = [
        {id: 1, position: 'Frontend Developer', company: 'One Inside', location: 'Skopje', start: '2022', end: '2023'},
        {
            id: 2,
            position: 'Frontend Developer',
            company: 'Falcon Gaming',
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
        {id: 5, position: 'UI Developer', company: 'Ses Gaming', location: 'Batumi', start: '2018', end: '2019'},
        {id: 6, position: 'UI Developer', company: 'S Yazılım', location: 'Istanbul', start: '2015', end: '2018'},
    ];

    const skills = [
        {id: 1, type: 'UI Development', value: 90},
        {id: 2, type: 'MobileAppDevelopment', value: 40},
        {id: 3, type: 'Frontend Development', value: 75},
        {id: 4, type: 'UIDesign', value: 45},
        {id: 5, type: '3DModelling', value: 30},
        {id: 5, type: 'Backend Development', value: 25},
    ];

    const knowledges = [
        {id: 1, type: 'CSS'},
        {id: 2, type: 'SCSS'},
        {id: 3, type: 'UI/UX'},
        {id: 4, type: 'Javascript'},
        {id: 5, type: 'Typescript'},
        {id: 6, type: 'React'},
        {id: 7, type: 'Angular'},
        {id: 7, type: 'Tailwind'},
        {id: 7, type: 'Storybook'},
        {id: 7, type: 'Bootstrap'},
        {id: 7, type: '3DModelling'},
        {id: 7, type: 'Blender 3D'},
        {id: 7, type: 'Laravel'},
        {id: 7, type: 'Nest JS'},
        {id: 7, type: 'PHP'},
        {id: 7, type: 'Material Design'},
        {id: 7, type: 'Figma'},
        {id: 7, type: 'Photoshop'},
        {id: 7, type: 'Adobe XD'},
        {id: 7, type: 'Ionic'},
    ];


    return (
        <div className={`p-6 py-10 md:p-16 rounded-2xl ${
            darkMode ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900'
        }`}>
            <h1 className={` pb-3 pr-3 border-b-4 border-b-teal-500 text-4xl font-bold font-title inline-flex mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{t('Resume')}</h1>
            <div className="flex my-8">
                <Icon name={'briefcase'} className={"text-teal-500 mr-4"} size={30}/>
                <h3 className={` ${darkMode ? 'text-white' : 'text-slate-900'} text-2xl font-semibold font-body inline-flex mb-4`}>{t("Experience")}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experiences.map((experience) => (
                    <div
                        className={`border rounded-lg p-4 flex ${darkMode ? 'border-slate-700' : 'border-slate-300'}`}
                        key={experience.id}>
                        <div className={'w-fit flex flex-col'}>
                            <span
                                className={` ${darkMode ? 'text-slate-300' : 'text-slate-600'} mb-2 text-xs`}>{experience.start}-{experience.end}</span>
                            <h5 className={`text-xl font-body inline-flex mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{experience.company}<span
                                className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}  ml-2 text-lg`}> - {t(experience.location)}</span>
                            </h5>
                            <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{experience.position}</p>
                        </div>
                    </div>
                ))}

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
                <div className="grid-col-2 lg:grid-col-1">
                    <div className="flex my-8">
                        <Icon name={'hammer'} className={"text-teal-500 mr-4"} size={30}/>
                        <h3 className={` ${darkMode ? 'text-white' : 'text-slate-900'} text-2xl font-semibold font-body inline-flex mb-4`}>{t("Skills")}</h3>
                    </div>
                    {skills.map((skill) => (
                        <div className="flex flex-col mb-8" key={skill.id}>
                            <div className="flex justify-between mb-2">
                                <h6 className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{t(skill.type)}</h6>
                                <span
                                    className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{skill.value}%</span>
                            </div>
                            <div
                                className={`${darkMode ? 'bg-slate-800' : 'bg-slate-200'} w-full rounded-full h-1.5`}>
                                <div className={' h-1.5 rounded-full bg-lime-500'}
                                     style={{width: skill.value + '%'}}></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid-col-2 lg:grid-col-1">
                    <div className="flex my-8">
                        <Icon name={'earth'} className={"text-teal-500 mr-4"} size={30}/>
                        <h3 className={` ${darkMode ? 'text-white' : 'text-slate-900'} text-2xl font-semibold font-body inline-flex mb-4`}>{t("Knowledges")}</h3>
                    </div>
                    <div className="flex flex-wrap">
                        {knowledges.map((knowledge) => (
                            <div key={knowledge.id}
                                 className={`${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-600'} px-3 py-1.5 rounded-md text-sm mr-4 mb-4`}>{t(knowledge.type)}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ResumePage;