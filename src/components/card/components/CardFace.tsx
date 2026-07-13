import { ImageUris } from "@/rtk/scryfall/types/card/ImageUris";
import { Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useCard } from "../hooks/useCard";

export const CardFace = ({
    imageToUse,
}: {
    imageToUse: keyof Pick<ImageUris, "small" | "normal" | "large">;
}) => {
    const { card } = useCard();
    const floatTilt = keyframes`
    0% {
        transform: translateY(0px) rotateZ(-1deg) rotateX(1deg);
    }
    25% {
        transform: translateY(-8px) rotateZ(1deg) rotateX(-1deg);
    }
    50% {
        transform: translateY(0px) rotateZ(0deg) rotateX(0deg);
    }
    75% {
        transform: translateY(-8px) rotateZ(1deg) rotateX(-1deg);
    }
    100% {
        transform: translateY(0px) rotateZ(-1deg) rotateX(1deg);
    }
`;
    /** These sizes are the original card dimensions in millimeters, then scaled to rem */
    const width = 63;
    const height = 88;
    /** The radius of the cards corners */
    const radius = 3.5;
    const scale = 0.25;
    /** Animation test */
    const motionDuration = `10s`;
    /** The calculated width and height in rem */
    const calculatedWidth = width * scale;
    const calculatedHeight = height * scale;
    if (!card) {
        return null;
    }
    return (
        <Image
            src={card.image_uris?.[imageToUse]}
            alt={card.name}
            aspectRatio={`${width}:${height}`}
            minW={`${calculatedWidth}rem`}
            w={`${calculatedWidth}rem`}
            borderRadius={`${radius * scale}rem`}
            filter={"drop-shadow(0 8px 10px rgba(0, 0, 0, 0.18))"}
            //animation={`${floatTilt} ${motionDuration} ease-in-out infinite`}
            overflow={"hidden"}
            m={".1rem"}
        />
    );
};
