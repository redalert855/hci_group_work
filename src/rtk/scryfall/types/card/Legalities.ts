/** An object describing the legality of a card across play formats. */

export type Legalities = {
    standard: "legal" | "not_legal" | "restricted" | "banned";
    future: "legal" | "not_legal" | "restricted" | "banned";
    historic: "legal" | "not_legal" | "restricted" | "banned";
    timeless: "legal" | "not_legal" | "restricted" | "banned";
    gladiator: "legal" | "not_legal" | "restricted" | "banned";
    pioneer: "legal" | "not_legal" | "restricted" | "banned";
    explorer: "legal" | "not_legal" | "restricted" | "banned";
    modern: "legal" | "not_legal" | "restricted" | "banned";
    legacy: "legal" | "not_legal" | "restricted" | "banned";
    pauper: "legal" | "not_legal" | "restricted" | "banned";
    vintage: "legal" | "not_legal" | "restricted" | "banned";
    penny: "legal" | "not_legal" | "restricted" | "banned";
    commander: "legal" | "not_legal" | "restricted" | "banned";
    oathbreaker: "legal" | "not_legal" | "restricted" | "banned";
    standardbrawl: "legal" | "not_legal" | "restricted" | "banned";
    brawl: "legal" | "not_legal" | "restricted" | "banned";
    alchemy: "legal" | "not_legal" | "restricted" | "banned";
    paupercommander: "legal" | "not_legal" | "restricted" | "banned";
    duel: "legal" | "not_legal" | "restricted" | "banned";
    oldschool: "legal" | "not_legal" | "restricted" | "banned";
    premodern: "legal" | "not_legal" | "restricted" | "banned";
    predh: "legal" | "not_legal" | "restricted" | "banned";
};
