import React, {useEffect, useState} from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import Menu from "../components/Menu/Menu";

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
        <div className="container mx-auto relative font-body pb-8 pt-48">
            <div className="grid grid-cols-12 gap-5">
                { !isMediumScreen &&
                <div className="grid col-span-3 sticky top-0 h-fit">
                    <Sidebar/>
                </div>
                }
                <div className="grid col-span-12 xl:col-span-8 h-fit">
                    {children}
                </div>
                { !isMediumScreen &&
                    <div className="grid col-span-1 sticky top-0 h-fit">
                        <Menu/>
                    </div>
                }
            </div>
        </div>
    );
};

export default MainLayout;