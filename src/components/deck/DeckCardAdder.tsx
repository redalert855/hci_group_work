import { CardFace } from "@/components/card/components/CardFace";
import { CardNameInput } from "@/components/card/CardNameInput";
import { CardAmountControl } from "@/components/card/buttons/CardAmountControl";
import { AddCardToWishlistButton } from "@/components/card/buttons/AddCardToWishlistButton";
import { useDeckContext } from "@/components/deck/DeckContext";
import { Column } from "@/components/ui/Column";
import { Row } from "@/components/ui/Row";
import { cardEndpoints } from "@/rtk/scryfall/endpoints.ts/card.endpoints";
import { useAppSelector } from "@/rtk/store/hooks";
import { SelectDeckById } from "@/rtk/store/selectors/SelectDeckById";
import { Heading, Skeleton, Table, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import { CardContextProvider } from "@/components/card/hooks/CardContext";
import { TotalCardsInDeck, TotalUniqueCardsInDeck } from "../card/TotalCardInCollection";
import { CardPrices } from "@/components/card/components/CardPrice";
import { CardDetails } from "./CardDetails";

export const DeckCardAdder = () => {
    const { deck_id } = useDeckContext();
    const [getCard, cardState] = cardEndpoints.useLazyGetCardByNameQuery();

    const deck = useAppSelector(SelectDeckById({ deck_id }));
    const selectedCardAmountInDeck = useAppSelector((state) => {
        const selectedCardId = cardState.data?.id;
        if (!deck_id) return "No deck selected";
        if (!selectedCardId) return "No card selected";
        return state.app.decks[deck_id]?.cards[selectedCardId]?.amount ?? "card lookup failed";
    });
    const summaryDeckName = useMemo(() => deck?.deck_name ?? "Unknown Deck", [deck?.deck_name]);

    return (
        <CardContextProvider
            card_id={cardState.data?.id}
            card={cardState.data}
        >
            <Column
                border={"1px solid black"}
                p={"1rem"}
                gap={"inherit"}
                bg={"wheat"}
                borderRadius={"1rem"}
                fontWeight={"bold"}
                align={"stretch"}
            >
                <Heading>{"Card Adder"}</Heading>
                <Table.Root
                    size={"sm"}
                    variant={"outline"}
                >
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell
                                fontWeight={"semibold"}
                                textAlign={"right"}
                            >
                                Deck Being Edited
                            </Table.Cell>
                            <Table.Cell textAlign={"center"}>{summaryDeckName}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell
                                fontWeight={"semibold"}
                                textAlign={"right"}
                            >
                                Total Cards In Deck
                            </Table.Cell>
                            <Table.Cell textAlign={"center"}>
                                <TotalCardsInDeck />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell
                                fontWeight={"semibold"}
                                textAlign={"right"}
                            >
                                Unique Cards In Deck
                            </Table.Cell>
                            <Table.Cell textAlign={"center"}>
                                <TotalUniqueCardsInDeck />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell
                                fontWeight={"semibold"}
                                textAlign={"right"}
                            >
                                Selected Card Total In Deck
                            </Table.Cell>
                            <Table.Cell textAlign={"center"}>{selectedCardAmountInDeck}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>

                <Column>
                    <Heading size={"md"}>Card Finder</Heading>
                    <CardNameInput
                        onSelectName={(name) => {
                            console.log("Selected card name:", name);
                            getCard({ exact: true, name });
                        }}
                    />

                    {cardState.isSuccess && (
                        <Skeleton
                            loading={cardState.isFetching}
                            asChild
                        >
                            <Row>
                                <Column>
                                    <CardFace imageToUse="normal" />
                                    <CardAmountControl />
                                    <AddCardToWishlistButton card_id={cardState.data?.id} />
                                </Column>
                                <Column>
                                    <Heading>{"Card Details"}</Heading>
                                    <CardDetails />
                                    <CardPrices />
                                </Column>
                            </Row>
                        </Skeleton>
                    )}
                </Column>
            </Column>
        </CardContextProvider>
    );
};
