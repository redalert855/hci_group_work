import { useAppDispatch, useAppSelector } from "@/rtk/store/hooks";
import { SelectCardInDeck } from "@/rtk/store/selectors/SelectCardInDeck";
import { appSlice } from "@/rtk/store/slices/appSlice";
import { ButtonProps, Button } from "@chakra-ui/react";

export const AddCardToWishlistButton = ({
    card_id,
    ...props
}: { card_id: string | undefined } & ButtonProps) => {
    const dispatch = useAppDispatch();
    const CardInWishlist = useAppSelector(SelectCardInDeck({ card_id, deck_id: "wishlist" }));
    return (
        <Button
            textWrap={"wrap"}
            onClick={() => {
                if (!card_id) {
                    console.error("No card_id provided. Cannot add card to wishlist.");
                    return;
                }
                if (CardInWishlist) {
                    dispatch(
                        appSlice.actions.removeCardFromDeck({
                            deck_id: "wishlist",
                            card_id,
                        }),
                    );
                } else {
                    dispatch(
                        appSlice.actions.addCard({
                            deck_id: "wishlist",
                            card_id,
                        }),
                    );
                }
            }}
            {...props}
        >
            {CardInWishlist ? "Card in Wishlist" : "Add to Wishlist"}
        </Button>
    );
};
