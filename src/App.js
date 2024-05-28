import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout'; // Correct import path
import { routes } from './routes';
import Header from './components/Header/Header';
import useThemeStore from "./stores/themeStore";

function App() {
    const {darkMode} = useThemeStore();
    return (
        <div className={darkMode ? "page-container dark" : "page-container"}>
            <Router>
                <Header />
                <Routes>
                    {routes.main.routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<MainLayout>{route.component}</MainLayout>}
                        />
                    ))}
                </Routes>
            </Router>
        </div>
    );
}

export default App;