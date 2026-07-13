import { useAppDispatch, useAppSelector } from "@/rtk/store/hooks";
import { AppActions, DeckID } from "@/rtk/store/slices/appSlice";
import { Box, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

export const NewDeckCreator = () => {
    const dispatch = useAppDispatch();
    const [deckName, setDeckName] = useState("");
    const normalizedDeckName = deckName.trim();

    const isDeckNameTaken = useAppSelector((state) =>
        Object.values(state.app.decks).some((deck) =>
            deck ? deck.deck_name.trim() === normalizedDeckName : false,
        ),
    );

    return (
        <Box
            borderWidth={"1px"}
            borderRadius={"md"}
            p={"0.75rem"}
        >
            <Text mb={"0.5rem"}>Create Deck</Text>
            <Input
                mb={"0.5rem"}
                placeholder={"Deck name"}
                value={deckName}
                onChange={(event) => {
                    setDeckName(event.target.value);
                }}
            />
            {normalizedDeckName && isDeckNameTaken ? (
                <Text
                    mb={"0.5rem"}
                    color={"red.600"}
                >
                    A deck with that name already exists.
                </Text>
            ) : null}
            <Button
                onClick={() => {
                    if (!normalizedDeckName || isDeckNameTaken) {
                        return;
                    }
                    dispatch(
                        AppActions.addDeck({
                            deck_id: normalizedDeckName as DeckID,
                            deck_name: normalizedDeckName,
                        }),
                    );
                    setDeckName("");
                }}
                disabled={!normalizedDeckName || isDeckNameTaken}
            >
                Add Deck
            </Button>
        </Box>
    );
};
