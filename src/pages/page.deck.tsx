import { ListDeckCards } from "@/components/deck/ListDeckCards";
import { DeckContextProvider } from "@/components/deck/DeckContext";
import { DeckName } from "@/components/deck/DeckName";
import { PageContainer } from "@/components/ui/PageContainer";
import { useAppSelector } from "@/rtk/store/hooks";
import { SelectDeckById } from "@/rtk/store/selectors/SelectDeckById";
import { DeckID } from "@/rtk/store/slices/appSlice";
import { DeckCardAdder } from "../components/deck/DeckCardAdder";
import { TotalCardsInDeck } from "../components/card/TotalCardInCollection";
import { Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router";

export const DeckPage = () => {
    const { deck_id } = useParams();
    const deck = useAppSelector(SelectDeckById({ deck_id: deck_id as DeckID | undefined }));

    if (!deck) {
        return (
            <PageContainer>
                <Heading size={"md"}>Deck Not Found</Heading>
                <Text>{`No deck exists for id: ${deck_id ?? "unknown"}`}</Text>
            </PageContainer>
        );
    }

    return (
        <DeckContextProvider deck_id={deck.deck_id}>
            <DeckCardAdder />
            <Heading size={"md"}>
                <DeckName />
            </Heading>
            <TotalCardsInDeck as={"span"} />
            <PageContainer>
                <ListDeckCards />
            </PageContainer>
        </DeckContextProvider>
    );
};
