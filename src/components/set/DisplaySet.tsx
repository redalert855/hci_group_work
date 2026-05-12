import { cardEndpoints } from "@/rtk/scryfall/endpoints.ts/card.endpoints";
import { setEndpoints } from "@/rtk/scryfall/endpoints.ts/set.endpoints";
import { SimpleGrid } from "@chakra-ui/react";
import { skipToken } from "@reduxjs/toolkit/query";
import { DisplayCard } from "../card/DisplayCard";

export const DisplaySet = ({ set_code }: { set_code: string }) => {
    const { data: setData } = setEndpoints.useGetSetByCodeQuery(set_code);
    const { data } = cardEndpoints.useSearchQuery(
        setData ? { q: `set:${setData?.code}` } : skipToken,
    );
    return (
        <SimpleGrid
            w={"fit-content"}
            maxW={"full"}
            minChildWidth={"10rem"}
            bg={"gray.100"}
        >
            {data?.data.map((card) => (
                <DisplayCard
                    key={card.id}
                    card={card}
                />
            ))}
        </SimpleGrid>
    );
};
