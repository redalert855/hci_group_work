import { useAppDispatch, useAppSelector } from "@/rtk/store/hooks";
import { appSlice, DeckID } from "@/rtk/store/slices/appSlice";
import { ButtonProps, Button } from "@chakra-ui/react";
import { ConfirmationModal } from "../../ui/ConfirmationModal";
import { SelectDeckById } from "@/rtk/store/selectors/SelectDeckById";
import { SelectCardInDeck } from "@/rtk/store/selectors/SelectCardInDeck";
import { useCardContext } from "../hooks/CardContext";
import { useDeckContext } from "../../deck/DeckContext";

export const RemoveCardFromDeckButton = ({
    amount,
    deck_id: passed_deck_id,
    ...props
}: { amount: number | "all"; deck_id?: DeckID } & ButtonProps) => {
    const { card_id } = useCardContext();
    const deck_context = useDeckContext();
    const deck_id = passed_deck_id ?? deck_context.deck_id;
    const dispatch = useAppDispatch();
    const deck = useAppSelector(SelectDeckById({ deck_id }));
    const cardInVault = useAppSelector(SelectCardInDeck({ card_id, deck_id }));

    return (
        <ConfirmationModal
            message={`Are you sure you want to remove ${amount === "all" ? "all" : amount + "x"} of this card from your collection?`}
            onConfirm={() => {
                if (card_id && deck_id) {
                    dispatch(
                        appSlice.actions.removeCardFromDeck({
                            deck_id,
                            card_id,
                        }),
                    );
                }
            }}
        >
            <Button
                textWrap={"wrap"}
                disabled={!cardInVault}
                {...props}
            >
                {amount === "all" ? "Remove All" : "Remove " + amount + "x"}
            </Button>
        </ConfirmationModal>
    );
};
