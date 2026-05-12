import { combineReducers } from "@reduxjs/toolkit";
import { scryfallApi } from "../scryfall/rootApi";
import { appSlice } from "./slices/appSlice";

export const appReducers = combineReducers({
    app: appSlice.reducer,
    [scryfallApi.reducerPath]: scryfallApi.reducer,
});
