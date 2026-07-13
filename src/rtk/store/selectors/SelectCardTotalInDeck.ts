import { CardID, DeckID } from "../slices/appSlice";
import { RootAppState } from "../types";
import { SelectDeckById } from "./SelectDeckById";

export const SelectCardTotalInDeck =
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
        if (!deck) return "n/a";
        if (!card_id) return "n/a";
        const card = deck.cards[card_id];

        if (!card) {
            if (emitErrorOnNotFound) {
                console.error(`Card with ID ${card_id} does not exist in deck ${deck_id}.`);
            }
            return "n/a";
        }
        return card.amount;
    };
