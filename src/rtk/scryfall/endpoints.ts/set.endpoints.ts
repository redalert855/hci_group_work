import { scryfallApi } from "../rootApi";
import { ListObject } from "../types/ListObject";
import { SetObject } from "../types/SetObject";

export const setEndpoints = scryfallApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSets: builder.query<ListObject<SetObject>, void>({
            query: () => `/sets`,
        }),
        getSetByCode: builder.query<SetObject, string>({
            query: (code) => `/sets/${code}`,
        }),
        getSetByTCGPlayerId: builder.query<SetObject, string>({
            query: (id) => `/sets/tcgplayer/${id}`,
        }),
        getSetById: builder.query<SetObject, string>({
            query: (id) => `/sets/${id}`,
        }),
    }),
});
