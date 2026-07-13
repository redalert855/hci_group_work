import { useAppDispatch, useAppSelector } from "@/rtk/store/hooks";
import { SelectDeckById } from "@/rtk/store/selectors/SelectDeckById";
import { SelectCardInDeck } from "@/rtk/store/selectors/SelectCardInDeck";
import { appSlice, DeckID } from "@/rtk/store/slices/appSlice";
import { ButtonProps, Button } from "@chakra-ui/react";
import { useDeckContext } from "../../deck/DeckContext";
import { useCardContext } from "../hooks/CardContext";

export const AddCardToDeckButton = ({
    deck_id: passed_deck_id,
    ...props
}: ButtonProps & { deck_id?: DeckID }) => {
    const dispatch = useAppDispatch();
    const deck = useDeckContext();
    const deck_id = passed_deck_id ?? deck.deck_id;
    const { card_id } = useCardContext();
    const Deck = useAppSelector(SelectDeckById({ deck_id }));
    const CardInDeck = useAppSelector(SelectCardInDeck({ card_id, deck_id }));
    return (
        <Button
            disabled={!card_id || !deck_id}
            onClick={() => {
                if (deck_id && card_id) {
                    if (CardInDeck) {
                        dispatch(
                            appSlice.actions.increaseCardAmount({
                                card_id,
                                deck_id,
                                amount: 1,
                            }),
                        );
                    } else
                        dispatch(
                            appSlice.actions.addCard({
                                deck_id,
                                card_id,
                            }),
                        );
                }
            }}
            {...props}
        >
            {`Add 1x to Deck ("${Deck?.deck_name ?? "Unknown Deck"}")`}
        </Button>
    );
};
