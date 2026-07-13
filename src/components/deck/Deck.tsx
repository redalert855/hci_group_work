import { DeckID, protectedDeckIds } from "@/rtk/store/slices/appSlice";
import { Table } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { DeckContextProvider } from "./DeckContext";
import { TotalCardsInDeck, TotalUniqueCardsInDeck } from "@/components/card/TotalCardInCollection";
import { DeckName } from "./DeckName";
import { DeleteDeckButton } from "./button/DeleteDeckButton";
import { Column } from "../ui/Column";
import { RenameDeckButton } from "@/components/deck/button/RenameDeckButton";
import { ViewDeckButton } from "./button/ViewDeckButton";

export const Deck = ({ deck_id }: { deck_id: DeckID }) => {
    const navigate = useNavigate();

    return (
        <DeckContextProvider deck_id={deck_id}>
            <Column
                p={"1rem"}
                border={"1px solid"}
                borderColor={"black"}
                borderRadius={"1rem"}
                bg={"wheat"}
                minW={"14rem"}
                cursor={"pointer"}
                borderWidth={".2rem"}
                _hover={{
                    borderColor: "red",
                }}
                transition={"all 0.15s ease"}
            >
                <Table.Root
                    size={"sm"}
                    variant={"outline"}
                >
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell fontWeight={"semibold"}>Deck ID</Table.Cell>
                            <Table.Cell textAlign={"center"}>{deck_id}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell fontWeight={"semibold"}>Deck Name</Table.Cell>
                            <Table.Cell textAlign={"center"}>
                                <DeckName />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell fontWeight={"semibold"}>Unique Cards</Table.Cell>
                            <Table.Cell textAlign={"center"}>
                                <TotalUniqueCardsInDeck as={"span"} />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell fontWeight={"semibold"}>Total Cards</Table.Cell>
                            <Table.Cell textAlign={"center"}>
                                <TotalCardsInDeck as={"span"} />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>
                <ViewDeckButton />
                <RenameDeckButton />
                <DeleteDeckButton />
            </Column>
        </DeckContextProvider>
    );
};
