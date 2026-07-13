import { cardEndpoints } from "@/rtk/scryfall/endpoints.ts/card.endpoints";
import { skipToken } from "@reduxjs/toolkit/query";
import { useCardContext } from "./CardContext";

export const useCard = () => {
    const { card_id, card: contextCard } = useCardContext();
    const { data, ...state } = cardEndpoints.useGetCardByIdQuery(
        card_id && !contextCard ? { card_id } : skipToken,
    );
    return { card: data ?? contextCard, state };
};
