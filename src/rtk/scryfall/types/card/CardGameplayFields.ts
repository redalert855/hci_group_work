import { Colors } from "./Colors";
import { Legalities } from "./Legalities";
import { CardFace } from "./CardFace";
import { RelatedCard } from "./RelatedCard";

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
