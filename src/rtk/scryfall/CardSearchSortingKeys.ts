import { ApiParamDef } from "./ApiParamDef";

export const CardSearchSortingKeys: ApiParamDef = {
    name: {
        default: true,
        description: "Sort cards by name, A → Z",
    },
    set: {
        description: "Sort cards by their set and collector number: AAA/#1 → ZZZ/#999",
    },
    released: {
        description: "Sort cards by their release date: Newest → Oldest",
    },
    rarity: {
        description: "Sort cards by rarity: Common -> Mythic",
    },
    color: {
        description: "Sort cards by their color and color identity: WUBRG → multicolor → colorless",
    },
    usd: {
        description:
            "Sort cards by their lowest known U.S. Dollar price: 0.01 → highest, null last",
    },
    tix: {
        description: "Sort cards by their lowest known TIX price: 0.01 → highest, null last",
    },
    eur: {
        description: "Sort cards by their lowest known Euro price: 0.01 → highest, null last",
    },
    cmc: { description: "Sort cards by their mana value: 0 → highest" },
    power: { description: "Sort cards by their power: null → highest" },
    toughness: { description: "Sort cards by their toughness: null → highest" },
    edhrec: {
        description: "Sort cards by their EDHREC ranking: lowest → highest",
    },
    penny: {
        description: "Sort cards by their Penny Dreadful ranking: lowest → highest",
    },
    artist: {
        description: "Sort cards by their front-side artist name: A → Z",
    },
    review: {
        description:
            "Sort cards how podcasts review sets, usually color & CMC, lowest → highest, with Booster Fun cards at the end",
    },
};
