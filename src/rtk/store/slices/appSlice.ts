import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadDataFromLocalStorage } from "../local-storage";

export type AppState = {
    example: string;
    collection: {
        id: string;
        amount: number;
    }[];
    selectedDeck: string | null;
    decks: {
        deck_name: string;
        cards: {
            id: string;
            amount: number;
        }[];
    }[];
};

const initialState: AppState = {
    example: "hello world",
    collection: loadDataFromLocalStorage("collection") ?? [],
    selectedDeck: null,
    decks: loadDataFromLocalStorage("decks") ?? [],
};

export const appSlice = createSlice({
    initialState,
    name: "appSlice",
    reducers: {
        setExample(state, { payload }: PayloadAction<Required<AppState["example"]>>) {
            state.example = payload;
        },
        addCardToCollection(
            state,
            { payload }: PayloadAction<{ card_id: string; amount?: number }>,
        ) {
            const amount = payload.amount ?? 1;
            const id = payload.card_id;
            const existingCard = state.collection.find((card) => card.id === id);
            if (existingCard) {
                existingCard.amount += amount;
            } else {
                state.collection.push({ id, amount });
            }
        },
        removeCardFromCollection(state, { payload }: PayloadAction<{ card_id: string }>) {
            const id = payload.card_id;
            const existingCard = state.collection.find((card) => card.id === id);
            if (existingCard) {
                existingCard.amount -= 1;
                if (existingCard.amount <= 0) {
                    state.collection = state.collection.filter((card) => card.id !== id);
                }
            }
        },
        addDeck(state, { payload }: PayloadAction<AppState["decks"][number]>) {
            if (state.decks.find((deck) => deck.deck_name === payload.deck_name)) {
                return;
            } else {
                state.decks.push(payload);
            }
        },
    },
});
export const { actions: AppActions } = appSlice;
