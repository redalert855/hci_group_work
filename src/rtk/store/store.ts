import { configureStore } from "@reduxjs/toolkit";
import { appReducers } from "./reducers";
import { scryfallApi } from "@/rtk/scryfall/rootApi";

export const reduxStore = configureStore({
    reducer: appReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(scryfallApi.middleware),
});
