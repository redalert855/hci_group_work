import { Deck } from "@/components/deck/Deck";
import { useAppSelector } from "@/rtk/store/hooks";
import { DeckObject } from "@/rtk/store/slices/appSlice";
import { PageContainer } from "@/components/ui/PageContainer";
import { SimpleGrid } from "@chakra-ui/react";
import { DeckCreator } from "../components/deck/DeckCreator";

export const DecksPage = () => {
    const decks = useAppSelector((state) =>
        Object.values(state.app.decks).filter((deck): deck is DeckObject => Boolean(deck)),
    );

    return (
        <PageContainer>
            <DeckCreator />
            <SimpleGrid
                w={"full"}
                minChildWidth={"16rem"}
                gap={"1rem"}
            >
                {decks.map((deck) => (
                    <Deck
                        key={deck.deck_id}
                        deck_id={deck.deck_id}
                    />
                ))}
            </SimpleGrid>
        </PageContainer>
    );
};
