import { ApiParamDef } from "../ApiParamDef";

export const SetTypes: ApiParamDef = {
    core: { description: "A yearly Magic core set (Tenth Edition, etc)" },
    expansion: { description: "A rotational expansion set in a block (Zendikar, etc)" },
    masters: { description: "A reprint set that contains no new cards (Modern Masters, etc)" },
    eternal: { description: "A set of new cards that only get added to high-power formats" },
    alchemy: { description: "An Arena set designed for Alchemy" },
    masterpiece: { description: "Masterpiece Series premium foil cards" },
    arsenal: { description: "A Commander-oriented gift set" },
    from_the_vault: { description: "From the Vault gift sets" },
    spellbook: { description: "Spellbook series gift sets" },
    premium_deck: {
        description: "Premium Deck Series decks",
    },
    duel_deck: { description: "Duel Decks" },
    draft_innovation: {
        description: "Special draft sets, like Conspiracy and Battlebond",
    },
    treasure_chest: { description: "Magic Online treasure chest prize sets" },
    commander: { description: "Commander preconstructed decks" },
    planechase: { description: "Planechase sets" },
    archenemy: { description: "Archenemy sets" },
    vanguard: { description: "Vanguard card sets" },
    funny: {
        description: "A funny un-set or set with funny promos (Unglued, Happy Holidays, etc)",
    },
    starter: { description: "A starter/introductory set (Portal, etc)" },
    box: { description: "A gift box set" },
    promo: { description: "A set that contains purely promotional cards" },
    token: {
        description: "A set made up of tokens and emblems.",
    },
    memorabilia: {
        description: "A set made up of gold-bordered, oversize, or trophy cards that are not legal",
    },
    minigame: { description: "A set that contains minigame card inserts from booster packs" },
};
