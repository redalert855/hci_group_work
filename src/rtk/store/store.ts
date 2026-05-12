import { configureStore } from "@reduxjs/toolkit";
import { appReducers } from "./reducers";
import { scryfallApi } from "@/rtk/scryfall/rootApi";
import { AppStateMiddleware } from "./localStorageMiddleware";

export const reduxStore = configureStore({
    reducer: appReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(scryfallApi.middleware).concat(AppStateMiddleware),
});
