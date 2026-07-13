import { Heading, Text } from "@chakra-ui/react";
import { useAppSelector } from "./rtk/store/hooks";
import { Column } from "./components/ui/Column";
import { CardContextProvider } from "./components/card/hooks/CardContext";
import { CardFace } from "./components/card/components/CardFace";
import { Row } from "./components/ui/Row";
import { CardPrices } from "./components/card/components/CardPrice";

export const WishlistPage = () => {
    const wishlisted_cards = useAppSelector((state) =>
        Object.entries(state.app.decks.wishlist.cards),
    );
    return (
        <>
            <Heading>{"Wishlist"}</Heading>
            <Row wrap={"wrap"}>
                {wishlisted_cards.map(([cardId, card]) => (
                    <CardContextProvider
                        card_id={cardId}
                        card={undefined}
                    >
                        <Column>
                            <CardFace imageToUse="small" />
                            <CardPrices />
                        </Column>
                    </CardContextProvider>
                ))}
            </Row>
        </>
    );
};
