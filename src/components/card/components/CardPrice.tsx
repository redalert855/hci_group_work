import { useCard } from "../hooks/useCard";
import { Table, Text } from "@chakra-ui/react";

export const CardPrices = () => {
    const card = useCard();
    const prices = card.card?.prices;

    if (!prices) {
        return <Text>No price data available.</Text>;
    }

    return (
        <Table.Root
            size={"sm"}
            variant={"outline"}
        >
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeader>Currency</Table.ColumnHeader>
                    <Table.ColumnHeader textAlign={"right"}>Price</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {Object.entries(prices).map(([currency, value]) => (
                    <Table.Row key={currency}>
                        <Table.Cell>{currency}</Table.Cell>
                        <Table.Cell textAlign={"right"}>{value ?? "N/A"}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    );
};
