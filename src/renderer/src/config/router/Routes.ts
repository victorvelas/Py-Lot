import Home from "@renderer/pages/Home.vue";
import Project from "@renderer/pages/Project.vue";
import { RouteRecordRaw } from "vue-router";
import { MenuItem } from "./types/MenuTypes";


const getMenuItems = (): Array<RouteRecordRaw&MenuItem> => {
    return [
        {
            path: '/',
            webPath: "/projects",
            name: 'Home',
            component: Home,
        },
        {
            path: '/projects/:name',
            webPath: "",
            name: 'My projects',
            component: Project,
        },
    ];
}

export const getProjectItems = () => {
    let menuItems = [];
    (import("../../../src/config/router/menu-items.json")).then(mi => {
        menuItems = mi;
    });
    if (menuItems.length === 0) {
        
    }
    return menuItems;
};

export const routes:Array<RouteRecordRaw&MenuItem> = getMenuItems();