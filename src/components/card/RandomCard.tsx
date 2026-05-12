import { cardEndpoints } from "@/rtk/scryfall/endpoints.ts/card.endpoints";
import { Text } from "@chakra-ui/react";
import { memo, useMemo } from "react";
import { DisplayCard } from "./DisplayCard";

export const RandomCard = memo(() => {
    const uuid = useMemo(() => crypto.randomUUID(), []);
    const { data, isFetching } = cardEndpoints.useGetRandomCardQuery({ uuid });
    console.log("Card data:", data);
    if (isFetching) return <Text>Loading...</Text>;
    if (!data) return <Text>No data available</Text>;
    return <DisplayCard card={data} />;
});
