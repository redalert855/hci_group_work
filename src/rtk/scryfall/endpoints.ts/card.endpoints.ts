import { CardSearchSortingKeys } from "../CardSearchSortingKeys";
import { DirSort } from "../DirSort";
import { scryfallApi } from "../rootApi";
import { CardObject } from "../types/card/Card";
import { CatalogObject, ListObject } from "../types/ListObject";
import { UniqueModes } from "../UniqueModes";

export type CardsResponse = unknown;
export type CardSearchRequest = {
    q: string;
    /**
     * The unique parameter specifies if Scryfall akdaf lksjdhf kaljsdhf lkajdh flakdsj hflakjsd
     * hlkajsdhlkjsdhfljsd hflkjsd hflkajsdfh should remove “duplicate” results in your query.
     */
    unique?: keyof typeof UniqueModes;
    order?: keyof typeof CardSearchSortingKeys;
    dir?: keyof typeof DirSort;
    include_extras?: boolean;
    include_multilingual?: boolean;
    include_variations?: boolean;
    /** The page number to return, default 1. */
    page?: number;
    /** The data format to return: json or csv. Defaults to json. */
    format?: string;
    /** If true, the returned JSON will be prettified. Avoid using for production code. */
    pretty?: boolean;
};
export const cardEndpoints = scryfallApi.injectEndpoints({
    endpoints: (build) => ({
        search: build.query<ListObject<CardObject>, CardSearchRequest>({
            query: (args) => ({
                url: `/cards/search?${Object.entries(args)
                    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
                    .join("&")}`,
            }),
        }),
        getRandomCard: build.query<CardObject, { uuid: string }>({
            query: () => ({
                url: `/cards/random`,
            }),
            onQueryStarted: (args, { queryFulfilled }) => {
                console.log("Fetching random card with args:", args);
            },
        }),
        getCardById: build.query<CardObject, { card_id: string }>({
            query: ({ card_id }) => ({
                url: `/cards/${card_id}`,
            }),
        }),
        cardNameAutocomplete: build.query<CatalogObject, { input_text: string }>({
            query: ({ input_text }) => ({
                url: `/cards/autocomplete?q=${encodeURIComponent(input_text)}`,
            }),
        }),
        getCardByName: build.query<CardObject, { exact: boolean; name: string }>({
            query: ({ exact, name }) => ({
                url: `/cards/named?${exact ? "exact" : "fuzzy"}=${encodeURIComponent(name)}`,
            }),
        }),
    }),
});
