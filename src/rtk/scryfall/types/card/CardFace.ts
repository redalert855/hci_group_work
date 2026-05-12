import { Colors } from "./Colors";
import { ImageUris } from "./ImageUris";

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
