// Layouts
import MainLayout from "../layouts/MainLayout";

// Pages
import AboutPage from "../screens/AboutPage/AboutPage";
import ContactPage from "../screens/ContactPage/ContactPage";
import ResumePage from "../screens/ResumePage/ResumePage";
import WorksPage from "../screens/WorksPage/WorksPage";


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
            {
                icon: 'contact',
                name: 'Contact',
                title: 'Contact page',
                component: <ContactPage />,
                path: '/contact'
            },
            {
                icon: 'resume',
                name: 'Resume',
                title: 'Resume page',
                component: <ResumePage />,
                path: '/resume'
            },
            {
                icon: 'works',
                name: 'Works',
                title: 'Works page',
                component: <WorksPage />,
                path: '/works'
            },
        ]
    }
};