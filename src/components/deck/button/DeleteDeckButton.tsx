import { ConfirmationModal } from "@/components/ui/ConfirmationModal";
import { useAppDispatch, useAppSelector } from "@/rtk/store/hooks";
import { AppActions, DeckID, protectedDeckIds } from "@/rtk/store/slices/appSlice";
import { Box, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDeckContext } from "../DeckContext";
import { SelectDeckById } from "@/rtk/store/selectors/SelectDeckById";

export const DeleteDeckButton = () => {
    const { deck_id } = useDeckContext();
    const deck = useAppSelector(SelectDeckById({ deck_id }));
    const dispatch = useAppDispatch();

    return (
        <ConfirmationModal
            message={`Are you sure you want to delete this deck ("${deck?.deck_name ?? "error.no_name"}")?`}
            onConfirm={() => {
                if (!deck_id) {
                    console.error("No deck_id provided for deletion.");
                    return;
                }
                dispatch(
                    AppActions.removeDeck({
                        deck_id,
                    }),
                );
            }}
        >
            <Button
                colorPalette={"red"}
                disabled={!deck_id || protectedDeckIds.includes(deck_id)}
            >
                Delete Deck
            </Button>
        </ConfirmationModal>
    );
};
