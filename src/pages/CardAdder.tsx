import { CardFace } from "@/components/card/CardFace";
import { CardNameInput } from "@/components/card/CardNameInput";
import {
    AddCardToCollectionButton,
    RemoveCardFromCollectionButton,
} from "@/components/card/DisplayCard";
import { Column } from "@/components/ui/Column";
import { cardEndpoints } from "@/rtk/scryfall/endpoints.ts/card.endpoints";
import { Heading } from "@chakra-ui/react";
import { useEffect } from "react";

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
