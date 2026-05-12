import {
    type Middleware,
    type ThunkAction,
    type ThunkMiddleware,
    type UnknownAction,
} from "@reduxjs/toolkit";
import type { appReducers } from "./reducers";
import type { reduxStore } from "./store";

export type RootAppState = ReturnType<typeof appReducers>;
export type AppDispatch = typeof reduxStore.dispatch;
export type ExtraArgument = undefined;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootAppState, ExtraArgument, UnknownAction>;
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type AppMiddleware = Middleware<{}, RootAppState, AppDispatch>;
export type AppThunkMiddleware = ThunkMiddleware<RootAppState, UnknownAction, ExtraArgument>;

export type AppKnownError = {
    message: string;
};
