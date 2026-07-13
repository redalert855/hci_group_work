import { ListDeckCards } from "@/components/deck/ListDeckCards";
import { PageContainer } from "@/components/ui/PageContainer";
import { DeckCardAdder } from "../components/deck/DeckCardAdder";
import { DeckContextProvider } from "@/components/deck/DeckContext";
import { DeleteDeckButton } from "../components/deck/button/DeleteDeckButton";

export const VaultPage = () => {
    return (
        <DeckContextProvider deck_id={"vault"}>
            <PageContainer>
                <DeckCardAdder />
                <ListDeckCards />
            </PageContainer>
        </DeckContextProvider>
    );
};
