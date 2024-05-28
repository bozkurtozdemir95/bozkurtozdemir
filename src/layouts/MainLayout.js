import React from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import Menu from "../components/Menu/Menu";

const MainLayout = ({children}) => {
    return (
        <div className="container mx-auto font-body pb-8">
            <div className="grid grid-cols-12 gap-5">
                <div className="grid col-span-3">
                    <Sidebar/>
                </div>
                <div className="grid col-span-8">
                    {children}
                </div>
                <div className="grid col-span-1">
                    <Menu/>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;