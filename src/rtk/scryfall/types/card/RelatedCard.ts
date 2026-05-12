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
