import { AppState } from "./slices/appSlice";

type LocalStorage = {
    user_token?: string;
    decks?: AppState["decks"];
    collection?: AppState["collection"];
};
export const loadDataFromLocalStorage = <T extends keyof LocalStorage>(
    address: T,
): LocalStorage[T] => {
    console.log("LOADING FROM LOCAL STORAGE");
    try {
        console.log(`[${address}]`, "loading...");
        const value = localStorage.getItem(address);
        if (value === null) {
            console.warn("nothing found at address:", address);
            return undefined;
        }
        const parsedValue = JSON.parse(value) as LocalStorage[T];
        console.log(`[${address}]`, "found:", parsedValue);
        return parsedValue;
    } catch (error) {
        console.error(error);
        return undefined;
    }
};
export const saveDataToLocalStorage = (
    address: keyof LocalStorage,
    data: LocalStorage[typeof address],
) => {
    try {
        console.warn("Saving to local storage...", address, data);
        const serializedState = JSON.stringify(data);
        localStorage.setItem(address, serializedState);
    } catch (error) {
        console.error(error);
    }
};
