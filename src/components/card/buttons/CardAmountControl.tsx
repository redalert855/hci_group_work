import { CardAmountInDeck } from "@/CardAmountInDeck";
import { useCardContext } from "../hooks/CardContext";
import { useDeckContext } from "@/components/deck/DeckContext";
import { useAppDispatch, useAppSelector } from "@/rtk/store/hooks";
import { SelectCardInDeck } from "@/rtk/store/selectors/SelectCardInDeck";
import { appSlice, DeckID } from "@/rtk/store/slices/appSlice";
import { Button, Flex } from "@chakra-ui/react";
import { Row } from "@/components/ui/Row";

export const CardAmountControl = ({ deck_id: passedDeckId }: { deck_id?: DeckID }) => {
    const dispatch = useAppDispatch();
    const { card_id } = useCardContext();
    const { deck_id: contextDeckId } = useDeckContext();
    const deck_id = passedDeckId ?? contextDeckId;

    const cardInDeck = useAppSelector(SelectCardInDeck({ card_id, deck_id }));
    const amount = cardInDeck?.amount ?? 0;

    const canMutate = card_id && deck_id;
    const leftLabel = amount <= 1 ? "Del" : "-";

    return (
        <Row
            gap={".5rem"}
            align={"center"}
        >
            <Button
                flex={3}
                size={"sm"}
                fontWeight={"bolder"}
                fontSize={"xl"}
                disabled={!canMutate || amount === 0}
                onClick={() => {
                    if (!canMutate || !card_id || !deck_id || amount === 0) {
                        return;
                    }

                    if (amount <= 1) {
                        dispatch(
                            appSlice.actions.removeCardFromDeck({
                                deck_id,
                                card_id,
                            }),
                        );
                        return;
                    }

                    dispatch(
                        appSlice.actions.increaseCardAmount({
                            deck_id,
                            card_id,
                            amount: -1,
                        }),
                    );
                }}
            >
                {leftLabel}
            </Button>

            <Flex
                fontWeight={"bolder"}
                fontSize={"xl"}
                flex={1}
                minW={"2rem"}
                h={"2rem"}
                bg={"black"}
                zIndex={1}
                color={"white"}
                justify={"center"}
                align={"center"}
                borderRadius={"full"}
                px={"1rem"}
            >
                <CardAmountInDeck />
            </Flex>

            <Button
                flex={3}
                fontWeight={"bolder"}
                fontSize={"xl"}
                size={"sm"}
                disabled={!canMutate}
                onClick={() => {
                    if (!canMutate || !card_id || !deck_id) {
                        return;
                    }

                    if (amount > 0) {
                        dispatch(
                            appSlice.actions.increaseCardAmount({
                                deck_id,
                                card_id,
                                amount: 1,
                            }),
                        );
                        return;
                    }

                    dispatch(
                        appSlice.actions.addCard({
                            deck_id,
                            card_id,
                        }),
                    );
                }}
            >
                +
            </Button>
        </Row>
    );
};
