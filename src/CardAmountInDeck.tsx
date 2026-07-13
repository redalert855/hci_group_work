import { Text } from "@chakra-ui/react";
import { useDeckContext } from "./components/deck/DeckContext";
import { useAppSelector } from "./rtk/store/hooks";
import { useCardContext } from "./components/card/hooks/CardContext";
import { SelectCardTotalInDeck } from "./rtk/store/selectors/SelectCardTotalInDeck";

export const CardAmountInDeck = () => {
    const { deck_id } = useDeckContext();
    const { card_id } = useCardContext();
    const amount = useAppSelector(SelectCardTotalInDeck({ card_id, deck_id }));
    return <Text>{"x" + amount}</Text>;
};
