import React, {useEffect, useState} from 'react'
import useThemeStore from "../../stores/themeStore";
import Icon from "../Icon/Icon";
import {addNewLine} from "../../utils/utils";
import photo from '../../assets/img/untitled2.png';
import resume from '../../assets/BozkurtOzdemirCV.pdf';
import {useTranslation} from "react-i18next";
import Button from '../../ui/button';
import Card from '../../ui/card';

const Sidebar = () => {
    const {darkMode} = useThemeStore();
    const { t } = useTranslation();

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMediumScreen = width <= 1280;

    const socials = [
        {id: 1, icon: 'instagram', color: 'text-pink-600', link: 'https://www.instagram.com/bozkurtozdemir'},
        {
            id: 2,
            icon: 'linkedin',
            color: 'text-blue-600',
            link: 'https://www.linkedin.com/in/bozkurt-mahmut-%C3%B6zdemir-524940155/'
        },
        {id: 3, icon: 'github', color: 'text-violet-400', link: 'https://github.com/bozkurtozdemir95'},
    ];

    const information = [
        {id: 1, title: 'Phone', value: '+389 71 28 99 06', icon: 'phone', color: 'text-emerald-500'},
        {id: 2, title: 'Email', value: 'bozkurtozdemir95\n@gmail.com', icon: 'email', color: 'text-rose-500'},
        {id: 3, title: 'Location', value: t('Skopje') +  '/' + t('Macedonia'), icon: 'location', color: 'text-sky-500'},
    ];


    return (

       
        <Card padding='md' className="rounded-2xl">
            <div className="flex flex-col flex-wrap items-center justify-center">
                <img src={photo} className={` mb-8 object-cover rounded-2xl md:object-cover h-60 ${isMediumScreen ? 'h-60' : '-mt-48'}`}
                     alt={'Bozkurt Ozdemir'}/>
                <h2 className={`text-3xl font-bold font-title inline-flex mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Bozkurt
                    Ozdemir</h2>
                <div
                    className={`${darkMode ? 'bg-slate-800 text-slate-100' : 'bg-slate-200 text-slate-600'} px-3 py-1.5 rounded-md text-sm mr-4 mb-4`}>{t('FrontendDeveloper')}
                </div>
                <div className="flex justify-center">
                    {socials.map((social) => (
                        <a className={`${social.color} ${darkMode ? 'bg-slate-800' : 'bg-slate-200 hover:bg-lime-500'} px-1.5 py-1.5 rounded-md text-sm mr-4 mb-4 hover:text-white [&:last-child]:mr-0`}
                           key={'social'+social.id} href={social.link} target='_blank' rel="noreferrer">
                            <Icon className={'transition-all'} name={social.icon} size={22} color={'currentColor'}/>
                        </a>
                    ))}
                </div>
                <Card padding='md' className='w-full'>
                    {information.map((information) => (
                        <div
                            key={'info'+information.id}
                            className={`${darkMode ? 'border-b-slate-700' : 'border-b-slate-300'} py-2.5 flex items-center border-b-2 [&:last-child]:border-b-0`}>
                            <div
                                className={`${information.color} ${darkMode ? 'bg-slate-900' : 'bg-slate-100 shadow-md'} px-2 py-2 rounded-md text-sm mr-4`}>
                                <Icon className={'transition-all'} name={information.icon} size={22}
                                      color={'currentColor'}/>
                            </div>
                            <div className="flex flex-col">
                                <h2 className={` ${darkMode ? 'text-slate-300' : 'text-slate-600'} text-xs`}>
                                    {t(information.title)}
                                </h2>
                                <span
                                    className={`text-sm font-body inline-flex mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}
                                    dangerouslySetInnerHTML={{__html: addNewLine(information.value)}}
                                >
                                </span>
                            </div>
                        </div>
                    ))}
                </Card>

                <Button color='success' href={resume} download="BozkurtOzdemirCV.pdf"
                   className={'mt-8 font-medium rounded-lg text-center inline-flex items-center me-2'}>
                    <Icon className={'transition-all mr-4'} name={'download'} size={22} color={'white'}/>
                    <span className={`text-md font-body inline-flex`}>{t("DownloadCV")}</span>
                </Button>
            </div>
        </Card>

    );
};
export default Sidebar;
