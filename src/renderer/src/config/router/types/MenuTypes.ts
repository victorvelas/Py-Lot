import { RouteRecordRaw } from "vue-router";

export type MenuItem = {
    path: string,
    webPath: string,
    children?: MenuItem,
};

export type ProjectItem = {
    path: string,
    name: string,
    description: string,
    logo: string,
    color?: string,
    children?: MenuItem,
};

export type WebMenuItem = ProjectItem&RouteRecordRaw;