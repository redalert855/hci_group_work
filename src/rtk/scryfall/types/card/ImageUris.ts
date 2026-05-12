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
