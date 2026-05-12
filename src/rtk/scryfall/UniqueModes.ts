import { ApiParamDef } from "./ApiParamDef";

export const UniqueModes: ApiParamDef = {
    cards: {
        default: true,
        description: "Remove duplicate cards, keeping only one copy of each card",
    },
    art: {
        description: "Remove duplicate card faces, keeping only one copy of each card face",
    },
    prints: {
        description: "Remove duplicate printings, keeping only one copy of each card in each set",
    },
};
