import { cardEndpoints } from "@/rtk/scryfall/endpoints.ts/card.endpoints";
import { Combobox, Portal, useListCollection } from "@chakra-ui/react";
import { skipToken } from "@reduxjs/toolkit/query";
import { useEffect, useState } from "react";
import { data } from "react-router";

type SuggestionItem = {
    label: string;
    value: string;
};

export const CardNameInput = (props: { onSelectName: (name: string) => void }) => {
    const [trigger, { data, isFetching }] = cardEndpoints.useLazyCardNameAutocompleteQuery();

    const { collection, set } = useListCollection<SuggestionItem>({
        initialItems: [],
    });

    useEffect(() => {
        set(data?.data.map((suggestion) => ({ label: suggestion, value: suggestion })) ?? []);
    }, [data, set]);

    return (
        <Combobox.Root
            collection={collection}
            openOnClick
            openOnChange={(e) => e.inputValue.length > 0}
            onInputValueChange={(e) => {
                trigger({ input_text: e.inputValue });
            }}
            onValueChange={(e) => {
                const selected = e.value[0];
                if (selected) {
                    props.onSelectName(selected);
                }
            }}
            w={"20rem"}
        >
            <Combobox.Label>Enter Card Name</Combobox.Label>
            <Combobox.Control>
                <Combobox.Input />
                <Combobox.IndicatorGroup>
                    <Combobox.ClearTrigger />
                    <Combobox.Trigger />
                </Combobox.IndicatorGroup>
            </Combobox.Control>
            <Portal>
                <Combobox.Positioner>
                    <Combobox.Content>
                        <Combobox.Empty>
                            {isFetching ? "Loading..." : "No items found"}
                        </Combobox.Empty>
                        {collection.items.map((item) => (
                            <Combobox.Item
                                item={item}
                                key={item.value}
                            >
                                {item.label}
                                <Combobox.ItemIndicator />
                            </Combobox.Item>
                        ))}
                    </Combobox.Content>
                </Combobox.Positioner>
            </Portal>
        </Combobox.Root>
    );
};
