import { useAppDispatch, useAppSelector } from "@/rtk/store/hooks";
import { HStack, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react";
import { FetchCard, RemoveCardFromCollectionButton } from "./DisplayCard";
import { CardFace } from "./CardFace";

export const ShowCollection = () => {
    const collection = useAppSelector((state) => state.app.collection);
    const dispatch = useAppDispatch();
    return (
        <SimpleGrid
            minChildWidth={"200px"}
            w={"fit-content"}
            maxW={"100%"}
        >
            {collection.map((card) => (
                <FetchCard
                    card_id={card.id}
                    key={card.id}
                >
                    {(cardFetch) => (
                        <VStack
                            maxW={"10rem"}
                            border={"1px solid black"}
                        >
                            {cardFetch.card ? (
                                <CardFace
                                    cardSize={"small"}
                                    card={cardFetch.card}
                                />
                            ) : null}
                            <Spacer />
                            <Text> Card in Collection: {card?.amount}</Text>
                            <RemoveCardFromCollectionButton card_id={card.id} />
                        </VStack>
                    )}
                </FetchCard>
            ))}
        </SimpleGrid>
    );
};
