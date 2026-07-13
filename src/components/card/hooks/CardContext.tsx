import { CardObject } from "@/rtk/scryfall/types/card/Card";
import { CardID } from "@/rtk/store/slices/appSlice";
import { createContext, useContext } from "react";

export type CardContext = {
    card_id: CardID | undefined;
    card: CardObject | undefined;
};
export const CardContext = createContext<CardContext>({
    card_id: undefined,
    card: undefined,
});

export const CardContextProvider = ({
    card_id,
    card,
    children,
}: {
    card_id: CardID | undefined;
    card: CardObject | undefined;
    children: React.ReactNode;
}) => {
    return <CardContext.Provider value={{ card_id, card }}>{children}</CardContext.Provider>;
};

export const useCardContext = () => useContext(CardContext);
