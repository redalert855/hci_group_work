import { CardObject } from "@/rtk/scryfall/types/card/Card";
import { CardFace } from "./CardFace";
import { Button, ButtonProps, VStack } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@/rtk/store/hooks";
import { appSlice } from "@/rtk/store/slices/appSlice";
import { cardEndpoints } from "@/rtk/scryfall/endpoints.ts/card.endpoints";
import { skipToken } from "@reduxjs/toolkit/query";

export const AddCardToCollectionButton = ({
    card_id,
    ...props
}: { card_id: string } & ButtonProps) => {
    const dispatch = useAppDispatch();
    const cardInCollection = useAppSelector((state) =>
        state.app.collection.find((card) => card.id === card_id),
    );
    return (
        <Button
            textWrap={"wrap"}
            onClick={() => {
                dispatch(appSlice.actions.addCardToCollection({ card_id }));
            }}
            {...props}
        >
            {cardInCollection
                ? "Card in Collection: x" + cardInCollection.amount
                : "Add to Collection"}
        </Button>
    );
};
export const RemoveCardFromCollectionButton = ({
    card_id,
    ...props
}: { card_id: string } & ButtonProps) => {
    const dispatch = useAppDispatch();
    const cardInCollection = useAppSelector((state) =>
        state.app.collection.find((card) => card.id === card_id),
    );
    if (!cardInCollection) return null;
    return (
        <Button
            textWrap={"wrap"}
            onClick={() => {
                dispatch(appSlice.actions.removeCardFromCollection({ card_id }));
            }}
            {...props}
        >
            {"Remove 1x from Collection"}
        </Button>
    );
};

export const DisplayCard = ({ card }: { card: CardObject }) => {
    if (card.card_faces) {
        console.log("Card which has faces:", card);
        card.card_faces?.map((face) => console.log("Card has face:", face));
    }
    const dispatch = useAppDispatch();

    return (
        <VStack>
            <CardFace
                cardSize={"small"}
                card={{ ...card }}
            />
            <AddCardToCollectionButton
                w="full"
                card_id={card.id}
            />
            <RemoveCardFromCollectionButton
                w="full"
                card_id={card.id}
            />
        </VStack>
    );
};

export type WithRenderChildren<T> = {
    children: (args: T) => React.ReactNode;
};
export const FetchCard = ({
    card_id,
    children,
}: { card_id: string } & WithRenderChildren<{ card: CardObject | undefined }>) => {
    const dispatch = useAppDispatch();
    const query = cardEndpoints.useGetCardByIdQuery(card_id ? { card_id } : skipToken);
    return children({ card: query.data });
};
