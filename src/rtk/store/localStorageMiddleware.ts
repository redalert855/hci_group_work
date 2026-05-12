import { appSlice } from "./slices/appSlice";
import { AppThunkMiddleware } from "./types";

export const AppStateMiddleware: AppThunkMiddleware = (store) => (next) => (action) => {
    if (
        appSlice.actions.addCardToCollection.match(action) ||
        appSlice.actions.removeCardFromCollection.match(action) ||
        appSlice.actions.addDeck.match(action)
    ) {
        const state = store.getState();
        localStorage.setItem("collection", JSON.stringify(state.app.collection));
        localStorage.setItem("decks", JSON.stringify(state.app.decks));
    }
    return next(action);
};
