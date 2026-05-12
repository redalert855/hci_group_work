import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseUrl = "https://api.scryfall.com";
export const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
        // const credentials = (getState() as RootAppState).auth.credentials;
        // headers.set();
        return headers;
    },
});
type ScryfallApiError = {
    status: number;
    code: string;
    details: string;
    type: string;
    warnings: string[];
};
export const baseQueryWithReAuth: BaseQueryFn<
    FetchArgs | string,
    unknown,
    FetchBaseQueryError | ScryfallApiError
> = async (args, api, extraOptions) => {
    await new Promise((r) => setTimeout(r, 1000)); // for simulating longer load times, does not behave like rate limit
    const result = await baseQuery(args, api, extraOptions);
    return result;
};

export const ScryfallInvalidationTags = ["card", "set", ""] as const;

export const scryfallApi = createApi({
    baseQuery: baseQueryWithReAuth,
    endpoints: () => ({}),
    reducerPath: "scryfallApi",
    tagTypes: ScryfallInvalidationTags,
    keepUnusedDataFor: 24 * 60 * 60, // 24 hours in seconds
});
