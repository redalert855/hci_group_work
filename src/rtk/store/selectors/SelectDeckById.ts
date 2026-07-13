import { DeckID } from "../slices/appSlice";
import { RootAppState } from "../types";

export const SelectDeckById =
    ({ deck_id }: { deck_id?: DeckID }) =>
    (state: RootAppState) => {
        if (!deck_id) {
            console.error("No deck_id provided. Cannot select deck.");
            return undefined;
        }

        const deck = state.app.decks[deck_id];
        if (!deck) {
            console.error(`Deck with ID ${deck_id} does not exist.`);
            return undefined;
        }
        return deck;
    };
