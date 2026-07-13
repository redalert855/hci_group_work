import { useAppDispatch, useAppSelector } from "@/rtk/store/hooks";
import { SelectCardInDeck } from "@/rtk/store/selectors/SelectCardInDeck";
import { appSlice, DeckID } from "@/rtk/store/slices/appSlice";
import { Box, Menu, Portal } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useDeckContext } from "../../deck/DeckContext";
import { useCardContext } from "../hooks/CardContext";

export const CardMenu = ({ children }: { children: ReactNode }) => {
    const dispatch = useAppDispatch();
    const { card_id } = useCardContext();
    const { deck_id } = useDeckContext();
    const cardInVault = useAppSelector(SelectCardInDeck({ card_id, deck_id: "vault" }));
    const cardInWishlist = useAppSelector(SelectCardInDeck({ card_id, deck_id: "wishlist" }));
    const cardInCurrentDeck = useAppSelector(SelectCardInDeck({ card_id, deck_id }));
    const canMutateCard = Boolean(card_id);
    const currentDeckId =
        deck_id && deck_id !== "vault" && deck_id !== "wishlist" ? deck_id : undefined;

    const addCardToDeck = (targetDeckId: DeckID) => {
        if (!card_id) {
            return;
        }

        const targetCard =
            targetDeckId === "vault"
                ? cardInVault
                : targetDeckId === "wishlist"
                  ? cardInWishlist
                  : targetDeckId === deck_id
                    ? cardInCurrentDeck
                    : undefined;

        if (targetCard) {
            dispatch(
                appSlice.actions.increaseCardAmount({
                    deck_id: targetDeckId,
                    card_id,
                    amount: 1,
                }),
            );
            return;
        }

        dispatch(
            appSlice.actions.addCard({
                deck_id: targetDeckId,
                card_id,
            }),
        );
    };

    const removeCardFromDeck = (targetDeckId: DeckID) => {
        if (!card_id) {
            return;
        }

        dispatch(
            appSlice.actions.removeCardFromDeck({
                deck_id: targetDeckId,
                card_id,
            }),
        );
    };

    return (
        <Menu.Root
            positioning={{ placement: "bottom-end" }}
            closeOnSelect={false}
        >
            <Menu.Trigger
                asChild
                cursor={canMutateCard ? "pointer" : "default"}
            >
                {children}
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item
                            value="add-to-vault"
                            disabled={!canMutateCard}
                            onClick={() => addCardToDeck("vault")}
                        >
                            {cardInVault ? "Add Another to Vault" : "Add to Vault"}
                        </Menu.Item>
                        <Menu.Item
                            value="remove-from-vault"
                            disabled={!cardInVault}
                            onClick={() => removeCardFromDeck("vault")}
                        >
                            Remove from Vault
                        </Menu.Item>
                        <Menu.Item
                            value="add-to-wishlist"
                            disabled={!canMutateCard || Boolean(cardInWishlist)}
                            onClick={() => addCardToDeck("wishlist")}
                        >
                            Add to Wishlist
                        </Menu.Item>
                        <Menu.Item
                            value="remove-from-wishlist"
                            disabled={!cardInWishlist}
                            onClick={() => removeCardFromDeck("wishlist")}
                        >
                            Remove from Wishlist
                        </Menu.Item>
                        {currentDeckId ? (
                            <Menu.Item
                                value="add-to-current-deck"
                                onClick={() => addCardToDeck(currentDeckId)}
                            >
                                {cardInCurrentDeck ? "Add Another to Deck" : "Add to Deck"}
                            </Menu.Item>
                        ) : null}
                        {currentDeckId && cardInCurrentDeck ? (
                            <Menu.Item
                                value="remove-from-current-deck"
                                onClick={() => removeCardFromDeck(currentDeckId)}
                            >
                                Remove from Deck
                            </Menu.Item>
                        ) : null}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
};
