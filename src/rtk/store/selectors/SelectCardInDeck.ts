import { SelectDeckById } from "./SelectDeckById";
import { CardID, DeckID } from "../slices/appSlice";
import { RootAppState } from "../types";

export const SelectCardInDeck =
    ({
        card_id,
        deck_id,
        emitErrorOnNotFound,
    }: {
        card_id?: CardID;
        deck_id?: DeckID;
        emitErrorOnNotFound?: true;
    }) =>
    (state: RootAppState) => {
        const deck = SelectDeckById({ deck_id })(state);
        if (!deck || !card_id) return undefined;
        const card = deck.cards[card_id];
        if (!card) {
            if (emitErrorOnNotFound) {
                console.error(`Card with ID ${card_id} does not exist in deck ${deck_id}.`);
            }
            return null;
        }
        return card;
    };
