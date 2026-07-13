import { useAppSelector } from "@/rtk/store/hooks";
import { SelectDeckById } from "@/rtk/store/selectors/SelectDeckById";
import { Text } from "@chakra-ui/react";
import { useDeckContext } from "./DeckContext";

export const DeckName = () => {
    const { deck_id } = useDeckContext();
    const Deck = useAppSelector(SelectDeckById({ deck_id }));
    return <Text>{Deck?.deck_name ?? "Unknown Deck"}</Text>;
};
