import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadDataFromLocalStorage, saveDataToLocalStorage } from "../local-storage";

export type CardID = string;
export type DeckID = `${string}` | "wishlist" | "vault";
export const protectedDeckIds: DeckID[] = ["wishlist", "vault"] as const;
export type CardObject = {
    card_id: CardID;
    amount: number;
};
export type CardsObject = {
    [key: CardID]: CardObject;
};
export type DeckObject = {
    deck_id: DeckID;
    deck_name: string;
    cards: CardsObject;
};
export type AppState = {
    decks: {
        wishlist: DeckObject;
        vault: DeckObject;
        [key: DeckID]: DeckObject | undefined;
    };
};

const initialState: AppState = {
    decks: {
        wishlist: {
            deck_id: "wishlist",
            deck_name: "Wishlist",
            cards: {},
        },
        vault: {
            deck_id: "vault",
            deck_name: "Vault",
            cards: {},
        },
        ...loadDataFromLocalStorage("decks"),
    },
};

export const appSlice = createSlice({
    initialState,
    name: "appSlice",
    reducers: {
        addDeck(state, { payload }: PayloadAction<{ deck_id: DeckID; deck_name: string }>) {
            const { deck_id, deck_name } = payload;
            const normalizedDeckId = deck_id.trim() as DeckID;
            const normalizedDeckName = deck_name.trim();

            if (!normalizedDeckId) {
                console.error("Deck ID cannot be empty.");
                return;
            }
            if (!normalizedDeckName) {
                console.error("Deck name cannot be empty.");
                return;
            }
            if (state.decks[normalizedDeckId]) {
                console.error(`Deck with ID ${normalizedDeckId} already exists.`);
                return;
            }

            state.decks[normalizedDeckId] = {
                deck_id: normalizedDeckId,
                deck_name,
                cards: {},
            };
            saveDataToLocalStorage("decks", state.decks);
        },

        removeDeck(state, { payload }: PayloadAction<{ deck_id: DeckID }>) {
            const { deck_id } = payload;

            if (deck_id === "wishlist" || deck_id === "vault") {
                console.error(`Deck ${deck_id} is protected and cannot be removed.`);
                return;
            }
            if (!state.decks[deck_id]) {
                console.error(`Deck with ID ${deck_id} does not exist.`);
                return;
            }

            delete state.decks[deck_id];
            saveDataToLocalStorage("decks", state.decks);
        },

        renameDeck(state, { payload }: PayloadAction<{ deck_id: DeckID; deck_name: string }>) {
            const { deck_id, deck_name } = payload;
            const normalizedDeckName = deck_name.trim();

            if (!normalizedDeckName) {
                console.error("Deck name cannot be empty.");
                return;
            }
            if (deck_id === "wishlist" || deck_id === "vault") {
                console.error(`Deck ${deck_id} is protected and cannot be renamed.`);
                return;
            }

            const deck = state.decks[deck_id];
            if (!deck) {
                console.error(`Deck with ID ${deck_id} does not exist.`);
                return;
            }

            deck.deck_name = normalizedDeckName;
            saveDataToLocalStorage("decks", state.decks);
        },

        addCard(state, { payload }: PayloadAction<{ deck_id: DeckID; card_id: CardID }>) {
            const { deck_id, card_id } = payload;
            const deck = state.decks[deck_id];
            if (!deck) {
                console.error(`Deck with ID ${deck_id} does not exist.`);
                return;
            } else {
                deck.cards[card_id] = { card_id, amount: 1 };
            }
            saveDataToLocalStorage("decks", state.decks);
        },

        increaseCardAmount(
            state,
            { payload }: PayloadAction<{ deck_id: DeckID; card_id: CardID; amount: number }>,
        ) {
            const { deck_id, card_id, amount } = payload;
            const deck = state.decks[deck_id];
            if (!deck) {
                console.error(`Deck with ID ${deck_id} does not exist.`);
                return;
            }
            const card = deck.cards[card_id];
            if (!card) {
                console.error(`Card with ID ${card_id} does not exist in deck ${deck_id}.`);
                return;
            }
            card.amount += amount;
            saveDataToLocalStorage("decks", state.decks);
        },
        removeCardFromDeck(
            state,
            { payload }: PayloadAction<{ deck_id: DeckID; card_id: CardID }>,
        ) {
            const { deck_id, card_id } = payload;

            const deck = state.decks[deck_id];
            if (!deck) {
                console.error(`Deck with ID ${deck_id} does not exist.`);
                return;
            }
            const existingCard = deck.cards[card_id];
            if (existingCard) {
                existingCard.amount = 0;
                saveDataToLocalStorage("decks", state.decks);
            }
        },
    },
});
export const { actions: AppActions } = appSlice;
