import { RenameDeckButton } from "@/components/deck/button/RenameDeckButton";
import { Column } from "@/components/ui/Column";
import { useAppSelector } from "@/rtk/store/hooks";
import { DeckObject } from "@/rtk/store/slices/appSlice";
import { Heading } from "@chakra-ui/react";
import { NewDeckCreator } from "@/components/deck/button/NewDeckCreator";

export const DeckCreator = () => {
    const decks = useAppSelector((state) =>
        Object.values(state.app.decks).filter((deck): deck is DeckObject => Boolean(deck)),
    );

    return (
        <Column
            border={"1px solid"}
            borderColor={"black"}
            borderRadius={"1rem"}
            bg={"wheat"}
            p={"1rem"}
        >
            <Heading
                size={"md"}
                mb={"0.75rem"}
            >
                Deck Manager
            </Heading>
            <NewDeckCreator />
        </Column>
    );
};
