import { ImageUris } from "./ImageUris";
import { CardPrices } from "./CardPrices";

export type CardPrintFields = {
    /** The name of the illustrator of this card. Newly spoiled cards may not have this field yet. */
    artist: string | null;
    /**
     * The IDs of the artists that illustrated this card. Newly spoiled cards may not have this
     * field yet.
     */
    artist_ids: string[] | null;
    /** The lit Unfinity attractions lights on this card, if any. */
    attraction_lights: number[] | null;
    /** Whether this card is found in boosters. */
    booster: boolean;
    /** This card's border color. */
    border_color: "black" | "white" | "borderless" | "yellow" | "silver" | "gold";
    /** The Scryfall ID for the card back design present on this card. */
    card_back_id: string;
    /**
     * This card's collector number. Note that collector numbers can contain non-numeric characters,
     * such as letters or ★.
     */
    collector_number: string;
    /** True if you should consider avoiding use of this print downstream. */
    content_warning: boolean | null;
    /** True if this card was only released in a video game. */
    digital: boolean;
    /**
     * An array of computer-readable flags that indicate if this card can come in foil, nonfoil, or
     * etched finishes.
     */
    finishes: ("foil" | "nonfoil" | "etched")[];
    /** The just-for-fun name printed on the card (such as for Godzilla series cards). */
    flavor_name: string | null;
    /** The flavor text, if any. */
    flavor_text: string | null;
    /** This card's frame effects, if any. */
    frame_effects: string[] | null;
    /** This card's frame layout. */
    frame: string;
    /** True if this card's artwork is larger than normal. */
    full_art: boolean;
    /**
     * A list of games that this card print is available in, paper, arena, mtgo, astral, and/or
     * sega.
     */
    games: ("paper" | "arena" | "mtgo" | "astral" | "sega")[];
    /** True if this card's imagery is high resolution. */
    highres_image: boolean;
    /**
     * A unique identifier for the card artwork that remains consistent across reprints. Newly
     * spoiled cards may not have this field yet.
     */
    illustration_id: string | null;
    /** A computer-readable indicator for the state of this card's image. */
    image_status: "missing" | "placeholder" | "lowres" | "highres_scan";
    /**
     * An object listing available imagery for this card. See the Card Imagery article for more
     * information.
     */
    image_uris: ImageUris | null;
    /** True if this card is oversized. */
    oversized: boolean;
    /**
     * An object containing daily price information for this card, including usd, usd_foil,
     * usd_etched, eur, eur_foil, eur_etched, and tix prices, as strings.
     */
    prices: CardPrices;
    /** The localized name printed on this card, if any. */
    printed_name: string | null;
    /** The localized text printed on this card, if any. */
    printed_text: string | null;
    /** The localized type line printed on this card, if any. */
    printed_type_line: string | null;
    /** True if this card is a promotional print. */
    promo: boolean;
    /** An array of strings describing what categories of promo cards this card falls into. */
    promo_types: string[] | null;
    /**
     * An object providing URIs to this card's listing on major marketplaces. Omitted if the card is
     * unpurchaseable.
     */
    purchase_uris: Record<string, string> | null;
    /** This card's rarity. */
    rarity: "common" | "uncommon" | "rare" | "special" | "mythic" | "bonus";
    /**
     * An object providing URIs to this card's listing on other Magic: The Gathering online
     * resources.
     */
    related_uris: Record<string, string>;
    /** The date this card was first released. */
    released_at: string;
    /** True if this card is a reprint. */
    reprint: boolean;
    /** A link to this card's set on Scryfall's website. */
    scryfall_set_uri: string;
    /** This card's full set name. */
    set_name: string;
    /** A link to where you can begin paginating this card's set on the Scryfall API. */
    set_search_uri: string;
    /** The type of set this printing is in. */
    set_type: string;
    /** A link to this card's set object on Scryfall's API. */
    set_uri: string;
    /** This card's set code. */
    set: string;
    /** This card's Set object UUID. */
    set_id: string;
    /** True if this card is a Story Spotlight. */
    story_spotlight: boolean;
    /** True if the card is printed without text. */
    textless: boolean;
    /** Whether this card is a variation of another printing. */
    variation: boolean;
    /** The printing ID of the printing this card is a variation of. */
    variation_of: string | null;
    /** The security stamp on this card, if any. */
    security_stamp: "oval" | "triangle" | "acorn" | "circle" | "arena" | "heart" | null;
    /** This card's watermark, if any. */
    watermark: string | null;
    /** Preview information for this card, if it was previewed. */
    preview: {
        /** The date this card was previewed. */
        previewed_at: string | null;
        /** A link to the preview for this card. */
        source_uri: string | null;
        /** The name of the source that previewed this card. */
        source: string | null;
    } | null;
};
