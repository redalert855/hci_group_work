/** A string array representing Magic colors (W, U, B, R, G). */
export type Colors = string[];

/** URIs to the available imagery for a card. */
export type ImageUris = {
    /**
     * A transparent, rounded full card PNG. This is the best image to use for videos or other
     * high-quality content.
     */
    png?: string;
    /** A full card image with the rounded corners and the majority of the border cropped off. */
    border_crop?: string;
    /**
     * A rectangular crop of the card's art only. Not guaranteed to be perfect for cards with
     * outlier designs or strange colors.
     */
    art_crop?: string;
    /** A large full card image. */
    large?: string;
    /** A medium-sized full card image. */
    normal?: string;
    /** A small full card image. Designed for use as thumbnail or list icon. */
    small?: string;
};

/** Daily price information for a card. */
export type CardPrices = {
    usd: string | null;
    usd_foil: string | null;
    usd_etched: string | null;
    eur: string | null;
    eur_foil: string | null;
    eur_etched: string | null;
    tix: string | null;
};

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

/** A Card Face object describing one face of a multiface card. */
export type CardFace = {
    /**
     * The name of the illustrator of this card face. Newly spoiled cards may not have this field
     * yet.
     */
    artist: string | null;
    /** The ID of the illustrator of this card face. Newly spoiled cards may not have this field yet. */
    artist_id: string | null;
    /** The mana value of this particular face, if the card is reversible. */
    cmc: number | null;
    /** The colors in this face's color indicator, if any. */
    color_indicator: Colors | null;
    /** This face's colors, if the game defines colors for the individual face of this card. */
    colors: Colors | null;
    /** This face's defense, if any. */
    defense: string | null;
    /** The flavor text printed on this face, if any. */
    flavor_text: string | null;
    /**
     * A unique identifier for the card face artwork that remains consistent across reprints. Newly
     * spoiled cards may not have this field yet.
     */
    illustration_id: string | null;
    /** An object providing URIs to imagery for this face, if this is a double-sided card. */
    image_uris: ImageUris | null;
    /** The layout of this card face, if the card is reversible. */
    layout: string | null;
    /** This face's loyalty, if any. */
    loyalty: string | null;
    /** The mana cost for this face. This value will be any empty string "" if the cost is absent. */
    mana_cost: string;
    /** The name of this particular face. */
    name: string;
    /** A content type for this object, always card_face. */
    object: "card_face";
    /** The Oracle ID of this particular face, if the card is reversible. */
    oracle_id: string | null;
    /** The Oracle text for this face, if any. */
    oracle_text: string | null;
    /** This face's power, if any. Note that some cards have powers that are not numeric, such as *. */
    power: string | null;
    /** The localized name printed on this face, if any. */
    printed_name: string | null;
    /** The localized text printed on this face, if any. */
    printed_text: string | null;
    /** The localized type line printed on this face, if any. */
    printed_type_line: string | null;
    /** This face's toughness, if any. */
    toughness: string | null;
    /** The type line of this particular face, if the card is reversible. */
    type_line: string | null;
    /** The watermark on this particular card face, if any. */
    watermark: string | null;
};

/** A Related Card object describing a card closely related to another card. */
export type RelatedCard = {
    /** A unique ID for this card in Scryfall's database. */
    id: string;
    /** A content type for this object, always related_card. */
    object: "related_card";
    /** A field explaining what role this card plays in this relationship. */
    component: "token" | "meld_part" | "meld_result" | "combo_piece";
    /** The name of this particular related card. */
    name: string;
    /** The type line of this card. */
    type_line: string;
    /** A URI where you can retrieve a full object describing this card on Scryfall's API. */
    uri: string;
};

/** Core identifying and metadata fields present on every card. */
export type CoreCardFields = {
    /**
     * This card's Arena ID, if any. A large percentage of cards are not available on Arena and do
     * not have this ID.
     */
    arena_id: number | null;
    /** A unique ID for this card in Scryfall's database. */
    id: string;
    /** A language code for this printing. */
    lang: string;
    /**
     * This card's Magic Online ID (also known as the Catalog ID), if any. A large percentage of
     * cards are not available on Magic Online and do not have this ID.
     */
    mtgo_id: number | null;
    /**
     * This card's foil Magic Online ID (also known as the Catalog ID), if any. A large percentage
     * of cards are not available on Magic Online and do not have this ID.
     */
    mtgo_foil_id: number | null;
    /**
     * This card's multiverse IDs on Gatherer, if any, as an array of integers. Note that Scryfall
     * includes many promo cards, tokens, and other esoteric objects that do not have these
     * identifiers.
     */
    multiverse_ids: number[] | null;
    /** This card's Resource ID on Gatherer, if any. */
    resource_id: string | null;
    /** This card's ID on TCGplayer's API, also known as the productId. */
    tcgplayer_id: number | null;
    /**
     * This card's ID on TCGplayer's API, for its etched version if that version is a separate
     * product.
     */
    tcgplayer_etched_id: number | null;
    /** This card's ID on Cardmarket's API, also known as the idProduct. */
    cardmarket_id: number | null;
    /** A content type for this object, always card. */
    object: "card";
    /** A code for this card's layout. */
    layout: string;
    /**
     * A unique ID for this card's oracle identity. This value is consistent across reprinted card
     * editions, and unique among different cards with the same name (tokens, Unstable variants,
     * etc). Always present except for the reversible_card layout where it will be absent; oracle_id
     * will be found on each face instead.
     */
    oracle_id: string | null;
    /** A link to where you can begin paginating all re/prints for this card on Scryfall's API. */
    prints_search_uri: string;
    /** A link to this card's rulings list on Scryfall's API. */
    rulings_uri: string;
    /** A link to this card's permapage on Scryfall's website. */
    scryfall_uri: string;
    /** A link to this card object on Scryfall's API. */
    uri: string;
};

/** Game-rules fields relevant to how a card plays. */
export type CardGameplayFields = {
    /**
     * If this card is closely related to other cards, this property will be an array with Related
     * Card Objects.
     */
    all_parts: RelatedCard[] | null;
    /** An array of Card Face objects, if this card is multifaced. */
    card_faces: CardFace[] | null;
    /** The card's mana value. Note that some funny cards have fractional mana costs. */
    cmc: number;
    /** This card's color identity. */
    color_identity: Colors;
    /**
     * The colors in this card's color indicator, if any. A null value for this field indicates the
     * card does not have one.
     */
    color_indicator: Colors | null;
    /**
     * This card's colors, if the overall card has colors defined by the rules. Otherwise the colors
     * will be on the card_faces objects, see below.
     */
    colors: Colors | null;
    /** This face's defense, if any. */
    defense: string | null;
    /** This card's overall rank/popularity on EDHREC. Not all cards are ranked. */
    edhrec_rank: number | null;
    /** True if this card is on the Commander Game Changer list. */
    game_changer: boolean | null;
    /**
     * This card's hand modifier, if it is Vanguard card. This value will contain a delta, such as
     * -1.
     */
    hand_modifier: string | null;
    /** An array of keywords that this card uses, such as 'Flying' and 'Cumulative upkeep'. */
    keywords: string[];
    /**
     * An object describing the legality of this card across play formats. Possible legalities are
     * legal, not_legal, restricted, and banned.
     */
    legalities: Legalities;
    /**
     * This card's life modifier, if it is Vanguard card. This value will contain a delta, such as
     * +2.
     */
    life_modifier: string | null;
    /** This loyalty if any. Note that some cards have loyalties that are not numeric, such as X. */
    loyalty: string | null;
    /**
     * The mana cost for this card. This value will be any empty string "" if the cost is absent.
     * Remember that per the game rules, a missing mana cost and a mana cost of {0} are different
     * values. Multi-faced cards will report this value in card faces.
     */
    mana_cost: string | null;
    /**
     * The name of this card. If this card has multiple faces, this field will contain both names
     * separated by ␣//␣.
     */
    name: string;
    /** The Oracle text for this card, if any. */
    oracle_text: string | null;
    /** This card's rank/popularity on Penny Dreadful. Not all cards are ranked. */
    penny_rank: number | null;
    /** This card's power, if any. Note that some cards have powers that are not numeric, such as *. */
    power: string | null;
    /** Colors of mana that this card could produce. */
    produced_mana: Colors | null;
    /** True if this card is on the Reserved List. */
    reserved: boolean;
    /**
     * This card's toughness, if any. Note that some cards have toughnesses that are not numeric,
     * such as *.
     */
    toughness: string | null;
    /** The type line of this card. */
    type_line: string;
};

/** Fields unique to a card's particular printing. */
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

/** A full Scryfall Card object, composed of core, gameplay, and print fields. */
export type Card = CoreCardFields & CardGameplayFields & CardPrintFields;
