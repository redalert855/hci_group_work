import { useCard } from "../card/hooks/useCard";
import { Table, Text } from "@chakra-ui/react";

export const CardDetails = () => {
    const { card } = useCard();

    if (!card) {
        return <Text>No card selected.</Text>;
    }

    const rows: Array<{ label: string; value: string }> = [
        { label: "Name", value: card.name },
        { label: "Type", value: card.type_line },
        { label: "Mana Cost", value: card.mana_cost ?? "N/A" },
        { label: "Mana Value", value: String(card.cmc) },
        { label: "Colors", value: card.colors?.join(", ") ?? "Colorless" },
        { label: "Power", value: card.power ?? "N/A" },
        { label: "Toughness", value: card.toughness ?? "N/A" },
        { label: "Set", value: `${card.set_name} (${card.set.toUpperCase()})` },
        { label: "Rarity", value: card.rarity },
        { label: "Collector Number", value: card.collector_number },
        { label: "Released", value: card.released_at },
        { label: "Artist", value: card.artist ?? "Unknown" },
        { label: "Oracle Text", value: card.oracle_text ?? "N/A" },
    ];

    return (
        <Table.Root
            size={"sm"}
            variant={"outline"}
        >
            <Table.Body>
                {rows.map((row) => (
                    <Table.Row key={row.label}>
                        <Table.Cell
                            fontWeight={"semibold"}
                            textAlign={"right"}
                            whiteSpace={"nowrap"}
                        >
                            {row.label}
                        </Table.Cell>
                        <Table.Cell>{row.value}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    );
};
