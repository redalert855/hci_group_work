import { DeckID } from "@/rtk/store/slices/appSlice";
import { createContext, useContext } from "react";

export type DeckContext = {
    deck_id: DeckID | undefined;
};
export const DeckContext = createContext<DeckContext>({
    deck_id: undefined,
});

export const DeckContextProvider = ({
    deck_id,
    children,
}: {
    deck_id: DeckID;
    children: React.ReactNode;
}) => {
    return <DeckContext.Provider value={{ deck_id }}>{children}</DeckContext.Provider>;
};

export const useDeckContext = () => useContext(DeckContext);
