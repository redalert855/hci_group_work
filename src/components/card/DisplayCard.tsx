import { CardObject } from "@/rtk/scryfall/types/card/Card";
import { CardFace } from "./CardFace";

export const DisplayCard = ({ card }: { card: CardObject }) => {
    if (card.card_faces) {
        console.log("Card which has faces:", card);
        card.card_faces?.map((face) => console.log("Card has face:", face));
    }
    return <CardFace card={{ ...card }} />;
};
