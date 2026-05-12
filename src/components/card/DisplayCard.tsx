import { CardObject } from "@/rtk/scryfall/types/card/Card";
import { CardFace } from "./CardFace";
import { Button, ButtonProps, Dialog, VStack } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@/rtk/store/hooks";
import { appSlice } from "@/rtk/store/slices/appSlice";
import { cardEndpoints } from "@/rtk/scryfall/endpoints.ts/card.endpoints";
import { skipToken } from "@reduxjs/toolkit/query";
import { PropsWithChildren } from "react";

export const ConfirmationModal = (
    props: { message: string; onConfirm: () => void } & PropsWithChildren,
) => {
    return (
        <Dialog.Root placement={"center"}>
            <Dialog.Trigger asChild>{props.children}</Dialog.Trigger>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Content>
                    <Dialog.Header>
                        <Dialog.Title>Are you sure?</Dialog.Title>
                    </Dialog.Header>
                    <Dialog.Body>
                        <Dialog.Description>{props.message}</Dialog.Description>
                    </Dialog.Body>
                    <Dialog.Footer
                        display={"flex"}
                        flexDir={"row"}
                        justifyContent={"center"}
                    >
                        <Dialog.CloseTrigger asChild>
                            <Button>Cancel</Button>
                        </Dialog.CloseTrigger>
                        <Dialog.Context>
                            {(context) => (
                                <Button
                                    colorScheme="red"
                                    onClick={() => {
                                        props.onConfirm();
                                        context.setOpen(false);
                                    }}
                                >
                                    Confirm
                                </Button>
                            )}
                        </Dialog.Context>
                    </Dialog.Footer>
                </Dialog.Content>
            </Dialog.Positioner>
        </Dialog.Root>
    );
};
export const AddCardToCollectionButton = ({
    card_id,
    ...props
}: { card_id: string | undefined } & ButtonProps) => {
    const dispatch = useAppDispatch();
    const cardInCollection = useAppSelector((state) =>
        state.app.collection.find((card) => card.id === card_id),
    );
    return (
        <Button
            textWrap={"wrap"}
            onClick={() => {
                if (card_id) {
                    dispatch(appSlice.actions.addCardToCollection({ card_id }));
                }
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
}: { card_id: string | undefined } & ButtonProps) => {
    const dispatch = useAppDispatch();
    const cardInCollection = useAppSelector((state) =>
        state.app.collection.find((card) => card.id === card_id),
    );
    if (!cardInCollection) return null;
    return (
        <ConfirmationModal
            message="Are you sure you want to remove 1x of this card from your collection?"
            onConfirm={() => {
                if (card_id) {
                    dispatch(appSlice.actions.removeCardFromCollection({ card_id }));
                }
            }}
        >
            <Button
                textWrap={"wrap"}
                {...props}
            >
                {"Remove 1x from Collection"}
            </Button>
        </ConfirmationModal>
    );
};

export const DisplayCard = ({ card }: { card: CardObject | undefined }) => {
    if (card?.card_faces) {
        console.log("Card which has faces:", card);
        card?.card_faces?.map((face) => console.log("Card has face:", face));
    }
    const dispatch = useAppDispatch();
    if (!card) {
        return <VStack>Card not found</VStack>;
    }
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
