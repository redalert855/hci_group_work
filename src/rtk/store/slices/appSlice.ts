import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppState = {
    example: string;
};

const initialState: AppState = {
    example: "hello world",
};

export const appSlice = createSlice({
    initialState,
    name: "appSlice",
    reducers: {
        setExample(state, { payload }: PayloadAction<Required<AppState["example"]>>) {
            state.example = payload;
        },
    },
});
export const { actions: AppActions } = appSlice;
