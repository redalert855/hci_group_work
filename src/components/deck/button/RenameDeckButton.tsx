import { useDeckContext } from "@/components/deck/DeckContext";
import { useAppDispatch, useAppSelector } from "@/rtk/store/hooks";
import { SelectDeckById } from "@/rtk/store/selectors/SelectDeckById";
import { AppActions, DeckID, protectedDeckIds } from "@/rtk/store/slices/appSlice";
import { Box, Text, Input, Button, Dialog, Portal } from "@chakra-ui/react";
import { useState } from "react";

export const RenameDeckButton = () => {
    const dispatch = useAppDispatch();
    const { deck_id } = useDeckContext();
    const deck = useAppSelector(SelectDeckById({ deck_id }));
    const [newDeckName, setNewDeckName] = useState("");
    const normalizedDeckName = newDeckName.trim();

    return (
        <Dialog.Root placement={"center"}>
            <Dialog.Trigger asChild>
                <Button disabled={!deck_id || protectedDeckIds.includes(deck_id)}>
                    Rename Deck
                </Button>
            </Dialog.Trigger>
            <Dialog.Backdrop />
            <Portal>
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Rename Deck</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <Text mb={"0.5rem"}>{`Deck ID: ${deck_id || "Unknown"}`}</Text>
                            <Text
                                mb={"0.5rem"}
                            >{`Current Name: ${deck?.deck_name || "Unknown"}`}</Text>
                            <Input
                                placeholder={"New deck name"}
                                value={newDeckName}
                                onChange={(event) => {
                                    setNewDeckName(event.target.value);
                                }}
                            />
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.CloseTrigger asChild>
                                <Button variant={"outline"}>Cancel</Button>
                            </Dialog.CloseTrigger>
                            <Dialog.Context>
                                {(context) => (
                                    <Button
                                        disabled={!deck_id || !normalizedDeckName}
                                        onClick={() => {
                                            if (!deck_id || !normalizedDeckName) {
                                                return;
                                            }
                                            dispatch(
                                                AppActions.renameDeck({
                                                    deck_id: deck_id as DeckID,
                                                    deck_name: normalizedDeckName,
                                                }),
                                            );
                                            setNewDeckName("");
                                            context.setOpen(false);
                                        }}
                                    >
                                        Confirm Rename
                                    </Button>
                                )}
                            </Dialog.Context>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
};
