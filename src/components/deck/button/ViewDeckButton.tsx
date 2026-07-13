import { useDeckContext } from "../DeckContext";
import { DeckID, protectedDeckIds } from "@/rtk/store/slices/appSlice";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";

export const ViewDeckButton = () => {
    const navigate = useNavigate();
    const { deck_id } = useDeckContext();

    return (
        <Button
            onClick={(event) => {
                event.stopPropagation();
                if (!deck_id) {
                    console.error("No deck_id provided for navigation.");
                    return;
                }
                if (protectedDeckIds.includes(deck_id)) {
                    navigate(`/${deck_id}`);
                    return;
                }
                navigate(`/deck/${deck_id}`);
            }}
            disabled={!deck_id}
        >
            View Deck
        </Button>
    );
};
