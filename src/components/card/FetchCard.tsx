import { cardEndpoints } from "@/rtk/scryfall/endpoints.ts/card.endpoints";
import { CardObject } from "@/rtk/scryfall/types/card/Card";
import { useAppDispatch } from "@/rtk/store/hooks";
import { skipToken } from "@reduxjs/toolkit/query";
import { WithRenderChildren } from "./WithRenderChildren";

export const FetchCard = ({
    card_id,
    children,
}: { card_id: string } & WithRenderChildren<{ card: CardObject | undefined }>) => {
    const dispatch = useAppDispatch();
    const query = cardEndpoints.useGetCardByIdQuery(card_id ? { card_id } : skipToken);
    return children({ card: query.data });
};
