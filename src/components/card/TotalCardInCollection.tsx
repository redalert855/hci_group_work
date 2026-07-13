import { useCardContext } from "@/components/card/hooks/CardContext";
import { useDeckContext } from "@/components/deck/DeckContext";
import { useAppSelector } from "@/rtk/store/hooks";
import { TextProps, Text } from "@chakra-ui/react";

export const TotalCardsInDeck = (props: TextProps) => {
    const { deck_id } = useDeckContext();
    const totalCards = useAppSelector((state) => {
        if (deck_id) {
            const cards = state.app.decks[deck_id]?.cards ?? {};
            return Object.entries(cards).reduce((total, [cardId, card]) => total + card.amount, 0);
        }
        return 0;
    });
    return <Text {...props}>{totalCards}</Text>;
};
export const TotalUniqueCardsInDeck = (props: TextProps) => {
    const { deck_id } = useDeckContext();
    const totalCards = useAppSelector((state) => {
        if (deck_id) {
            const cards = state.app.decks[deck_id]?.cards ?? {};
            return Object.entries(cards).length;
        }
        return 0;
    });
    return <Text {...props}>{totalCards}</Text>;
};

export const CardAmountInDeck = () => {
    const { deck_id } = useDeckContext();
    const { card_id } = useCardContext();
    const amount = useAppSelector((state) => {
        if (!deck_id) {
            console.error("Deck context is not available.");
            return 0;
        }
        const _deck = state.app.decks[deck_id];
        if (!_deck) {
            console.error(`Deck with ID ${deck_id} does not exist.`);
            return 0;
        }
        if (!card_id) {
            console.error("Card context is not available.");
            return 0;
        }
        const _card = _deck.cards[card_id];
        if (!_card) {
            console.error(`Card with ID ${card_id} does not exist in deck ${deck_id}.`);
            return 0;
        }
        return _card.amount;
    });
    return <Text>{amount}</Text>;
};
