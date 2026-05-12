import { SetTypes } from "./SetTypes";

export type SetObject = {
    /** A content type for this object, always set. */
    object: "set";
    /** A unique ID for this set on Scryfall that will not change. */
    id: string;
    /** The unique three to six-letter code for this set. */
    code: string;
    /** The unique code for this set on MTGO, which may differ from the regular code. */
    mtgo_code: string | null;
    /** The unique code for this set on Arena, which may differ from the regular code. */
    arena_code: string | null;
    /** This set's ID on TCGplayer's API, also known as the groupId. */
    tcgplayer_id: number | null;
    /** The English name of the set. */
    name: string;
    /** A computer-readable classification for this set. */
    set_type: keyof typeof SetTypes;
    /**
     * The date the set was released or the first card was printed in the set (in GMT-8 Pacific
     * time).
     */
    released_at: string | null;
    /** The block code for this set, if any. */
    block_code: string | null;
    /** The block or group name code for this set, if any. */
    block: string | null;
    /** The set code for the parent set, if any. Promo and token sets often have a parent set. */
    parent_set_code: string | null;
    /** The number of cards in this set. */
    card_count: number;
    /** True if this set was only released in a video game. */
    digital: boolean;
    /** True if this set contains only nonfoil cards. */
    nonfoil_only: boolean;
    /** True if this set contains only foil cards. */
    foil_only: boolean;
    /**
     * A URI to an SVG file for this set's icon on Scryfall's CDN. Hotlinking this image is not
     * recommended because it may change slightly over time.
     */
    icon_svg_uri: string;
    /** A Scryfall API URI you can request to begin paginating over cards in this set. */
    search_uri: string;
    /** A link to this set object on Scryfall's API. */
    uri: string;
    /** A link to this set's permapage on Scryfall's website. */
    scryfall_uri: string;
    /** The denominator for the set's printed collector numbers. */
    printed_size: number | null;
};
