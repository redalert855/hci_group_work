import { useAppDispatch, useAppSelector } from "@/rtk/store/hooks";
import {
    Button,
    Flex,
    IconButton,
    Pagination,
    SimpleGrid,
    Spacer,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { CardAmountInDeck } from "@/CardAmountInDeck";
import { Column } from "../ui/Column";
import { useMemo, useState } from "react";
import { CardFace } from "../card/components/CardFace";
import { useDeckContext } from "./DeckContext";
import { CardContextProvider } from "../card/hooks/CardContext";
import { SelectDeckById } from "@/rtk/store/selectors/SelectDeckById";
import { CardMenu } from "../card/menu/CardMenu";
import { Row } from "../ui/Row";
import { DeleteDeckButton } from "./button/DeleteDeckButton";
import { RemoveCardFromDeckButton } from "../card/buttons/RemoveCardFromCollectionButton";
import { CardAmountControl } from "../card/buttons/CardAmountControl";

export const ListDeckCards = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { deck_id } = useDeckContext();
    const deck = useAppSelector(SelectDeckById({ deck_id }));
    const [currentPageNumber, setCurrentPageNumber] = useState(0);
    const { pages, pageCount, pageSize, count } = useMemo(() => {
        const cards = Object.entries(deck?.cards ?? {});
        const pageSize = 4;
        const pageCount = Math.ceil(cards.length / pageSize);
        const pages = [];

        // go through each card and add it to the pages array bundling each page, so pages becomes array of pages which themselves are arrays of cards, each page has a max of pageSize cards
        for (let i = 0; i < pageCount; i++) {
            const start = i * pageSize;
            const end = start + pageSize;
            pages.push(cards.slice(start, end));
        }

        console.log("Pages:", pages, {
            entries: cards.length,
            pageSize,
            pageCount,
        });
        return { pageSize, pageCount, pages, count: cards.length };
    }, [deck]);

    return (
        <Column
            w={"full"}
            h={"full"}
            flexGrow={1}
            grow={1}
            align={"center"}
        >
            <Text>{`Page ${currentPageNumber} of ${pageCount}`}</Text>
            <Row
                minW={"min-content"}
                maxW={"full"}
                justify={"center"}
                gap={".5rem"}
                wrap={"wrap"}
            >
                {pages[currentPageNumber]?.map(([card_id, { amount }]) => (
                    <CardContextProvider
                        key={card_id}
                        card_id={card_id}
                        card={undefined}
                    >
                        <CardMenu>
                            <VStack
                                bg={"wheat"}
                                p={".5rem"}
                                borderRadius={"1rem"}
                                border={"1px solid black"}
                                pos={"relative"}
                            >
                                <CardFace imageToUse="normal" />
                                <Spacer />
                                <CardAmountControl />
                            </VStack>
                        </CardMenu>
                    </CardContextProvider>
                ))}
            </Row>
            <Spacer />
            <Pagination.Root
                count={20}
                pageSize={4}
                page={0}
                onPageChange={(e) => {
                    setCurrentPageNumber(e.page);
                }}
                defaultPage={0}
            >
                <Pagination.PrevTrigger asChild>
                    <Button>Prev</Button>
                </Pagination.PrevTrigger>

                <Pagination.Items
                    render={(page) => (
                        <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                            {page.value}
                        </IconButton>
                    )}
                />
                <Pagination.NextTrigger asChild>
                    <Button>Next</Button>
                </Pagination.NextTrigger>
            </Pagination.Root>
        </Column>
    );
};
