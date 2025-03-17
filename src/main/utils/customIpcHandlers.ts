// import { app } from "electron";
import { capitalizeFirstLetter } from "../../utils/baseUtilities";
import { ipcMain, nativeTheme } from "electron";




/**
 * You can add your custom handlers in this file
 * just need to update the write Handlers function
 */
export function writeHandlers(app) : Electron.App {
    ipcMain.handle("is-dark-mode", () => nativeTheme.shouldUseDarkColors);
    ipcMain.handle("dark-mode:toggle", () => {
        if (nativeTheme.shouldUseDarkColors) {
            nativeTheme.themeSource = 'light';
        } else {
            nativeTheme.themeSource = 'dark';
        }
        return nativeTheme.shouldUseDarkColors;
    });
    ipcMain.handle('dark-mode:system', () => { nativeTheme.themeSource = 'system' })
    ipcMain.handle("get-app-name", () => app.getName().split("-").map(w => capitalizeFirstLetter (w)).join(""));
    ipcMain.handle("get-app-version", () => app.getVersion());
    return app;
}

