import { ShowCollection } from "@/components/card/ShowCollection";
import { TotalCardInCollection } from "./TotalCardInCollection";
import { CardNameInput } from "@/components/card/CardNameInput";
import { PageContainer } from "@/components/ui/Page";
import { cardEndpoints } from "@/rtk/scryfall/endpoints.ts/card.endpoints";
import { Column } from "@/components/ui/Column";
import {
    AddCardToCollectionButton,
    DisplayCard,
    RemoveCardFromCollectionButton,
} from "@/components/card/DisplayCard";
import { useEffect } from "react";
import { CardFace } from "@/components/card/CardFace";
import { Heading } from "@chakra-ui/react";

export const CardAdder = () => {
    const [getCard, cardState] = cardEndpoints.useLazyGetCardByNameQuery();
    useEffect(() => {
        console.log("Card state updated:", cardState);
    }, [cardState]);
    return (
        <Column
            border={"1px solid black"}
            p={"1rem"}
            gap={"inherit"}
        >
            <Heading size={"md"}>Card Finder</Heading>
            <CardNameInput
                onSelectName={(name) => {
                    console.log("Selected card name:", name);
                    getCard({ exact: true, name });
                }}
            />
            <CardFace
                card={cardState.data}
                cardSize="small"
            />
            <AddCardToCollectionButton card_id={cardState.data?.id} />
            <RemoveCardFromCollectionButton card_id={cardState.data?.id} />
        </Column>
    );
};
export const CollectionPage = () => {
    return (
        <PageContainer>
            <CardAdder />
            <TotalCardInCollection />
            <ShowCollection />
        </PageContainer>
    );
};
