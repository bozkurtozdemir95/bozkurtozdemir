// Layouts
import MainLayout from "../layouts/MainLayout";

// Pages
import AboutPage from "../screens/AboutPage/AboutPage";


export const routes = {
    main: {
        layout: MainLayout,
        routes: [
            {
                icon: 'about',
                name: 'About',
                title: 'About page',
                component: <AboutPage />,
                path: '/'
            },
        ]
    }
};