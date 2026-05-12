import { scryfallApi } from "../rootApi";
import { ListObject } from "../types/ListObject";

export const symbologyEndpoints = scryfallApi.injectEndpoints({
    endpoints: (builder) => ({
        getSymbols: builder.query<
            ListObject<{
                object: "card_symbol";
                symbol: string;
                svg_uri: string;
                loose_variant: null;
                english: string;
                transposable: boolean;
                represents_mana: boolean;
                appears_in_mana_costs: boolean;
                mana_value: number;
                hybrid: boolean;
                phyrexian: boolean;
                cmc: number;
                funny: boolean;
                colors: string[];
                gatherer_alternates: string[];
            }>,
            void
        >({
            query: () => ({
                url: `/symbology`,
            }),
        }),
    }),
});

export const { useGetSymbolsQuery } = symbologyEndpoints;
