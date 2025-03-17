import { defineStore } from "pinia";

export const useAppDataStore = defineStore("appData", {
    state: () => ({
        appName: "",
        appVersion: "",
    }),
    getters: {
        getAppName: async (state) => {
            if (state.appName.trim() === '') {
                console.log("Calling method 1 time");
                state.appName = await window.electron.ipcRenderer.invoke('get-app-name');
            }
            return state.appName.trim();
        },
        getAppVersion: async (state) => {
            if (state.appVersion.trim() === '') {
                state.appVersion = await window.electron.ipcRenderer.invoke('get-app-version');
            }
            return state.appVersion.trim();
        },
    }
})