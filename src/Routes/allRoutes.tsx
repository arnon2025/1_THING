import React from "react";

// Dashboard
import Dashboard from "../pages/Dashboard";

// Landing
import Landing from "../pages/Landing";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Solutions from "../pages/Solutions";
import News from "../pages/News";
import Clients from "../pages/Clients";
import Partners from "../pages/Partners";
import Contact from "../pages/Contact";

interface RouteProps {
    path: string;
    component: React.ComponentType<any>;
    exact?: boolean;
}

const authProtectedRoutes: Array<RouteProps> = [
    { path: "/dashboard", component: Dashboard },
    // { path: "/profile", component: UserProfile },
];

const publicRoutes: Array<RouteProps> = [
    // { path: "/login", component: Login },
    // { path: "/register", component: Register },
    { path: "/landing", component: Landing },
    { path: "/", exact: true, component: Home },
    { path: "/about", component: About },
    { path: "/services", component: Services },
    { path: "/solutions", component: Solutions },
    { path: "/news", component: News },
    { path: "/clients", component: Clients },
    { path: "/partners", component: Partners },
    { path: "/contact", component: Contact },
];

export { authProtectedRoutes, publicRoutes };
