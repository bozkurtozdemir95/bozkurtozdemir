import React, {useEffect, useState} from 'react';
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = ({children}) => {

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
    // const isMobile = width <= 768;

    return (
        <div className={`container mx-auto relative font-body pb-8 ${isMediumScreen ? 'pt-0 px-4' : ' pt-48 px-0'}`}>
            <div className="grid grid-cols-12 gap-5">
                <div
                    className={`grid ${isMediumScreen ? 'w-full col-span-12' : 'col-span-3 sticky top-0 h-fit pt-48 -mt-48'}`}>
                    <Sidebar/>
                </div>
                <div className="grid col-span-12 xl:col-span-9 h-fit">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;