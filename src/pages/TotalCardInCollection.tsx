import { useAppSelector } from "@/rtk/store/hooks";
import { TextProps, Text } from "@chakra-ui/react";

export const TotalCardInCollection = (props: TextProps) => {
    const totalCards = useAppSelector((state) => {
        let totalCards = 0;
        state.app.collection.forEach((card) => {
            totalCards += card.amount;
        });
        return totalCards;
    });
    return <Text {...props}>{totalCards}</Text>;
};
