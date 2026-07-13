import { Flex, Heading, Text } from "@chakra-ui/react";
import { Routes, Route, Navigate, useParams } from "react-router";
import { HomePage } from "./pages/page.home";
import { VaultPage } from "./pages/page.vault";
import { Column } from "./components/ui/Column";
import { PropsWithChildren } from "react";
import { Row } from "./components/ui/Row";
import { NavLink } from "react-router";
import { cardEndpoints } from "./rtk/scryfall/endpoints.ts/card.endpoints";
import { skipToken } from "@reduxjs/toolkit/query";
import { CardFace } from "./components/card/components/CardFace";
import { CardAmountControl } from "./components/card/buttons/CardAmountControl";
import { PageContainer } from "./components/ui/PageContainer";
import { AppWindow } from "./components/ui/AppWindow";
import { DeckCardAdder } from "./components/deck/DeckCardAdder";
import { CardContextProvider } from "./components/card/hooks/CardContext";
import { DecksPage } from "./pages/page.decks";
import { DeckPage } from "./pages/page.deck";
import { CardAmountInDeck } from "./CardAmountInDeck";
import { WishlistPage } from "./WishlistPage";

export const AppPath = ["/home", "/vault", "/decks", "/wishlist"];
export type AppPath = (typeof AppPath)[number];
export const AppNavigator = (props: PropsWithChildren) => {
    const NavButton = ({ path, label }: { path: AppPath; label: string }) => (
        <NavLink to={path}>
            {(a) => (
                <Flex
                    {...(a.isActive && {
                        borderBottomColor: "red",
                        borderBottomWidth: ".2rem",
                    })}
                >
                    <Heading>{label}</Heading>
                </Flex>
            )}
        </NavLink>
    );
    return (
        <Row
            py={"1rem"}
            px={"2rem"}
            gap={"1rem"}
            w={"full"}
            justify={"space-between"}
            borderBottom={".25rem solid red"}
        >
            <NavButton
                path={"/home"}
                label={"Home"}
            />
            <NavButton
                path={"/vault"}
                label={"Vault"}
            />
            <NavButton
                path={"/decks"}
                label={"Decks"}
            />
            <NavButton
                path={"/wishlist"}
                label={"Wishlist"}
            />
        </Row>
    );
};

export const CardViewPage = () => {
    const { card_id } = useParams();
    const card = cardEndpoints.useGetCardByIdQuery(card_id ? { card_id } : skipToken);
    return (
        <CardContextProvider
            card_id={card_id}
            card={undefined}
        >
            <Column
                gap={"1rem"}
                p={"1rem"}
            >
                <Heading>{"Card View"}</Heading>
                <Text>{card_id}</Text>
                <Text>{card.data?.name}</Text>
                <Row
                    align={"center"}
                    justify={"center"}
                    borderRadius={"1rem"}
                    gap={"1rem"}
                    fontWeight={"bolder"}
                >
                    <CardFace imageToUse="normal" />
                    <Column gap={"inherit"}>
                        <CardAmountControl />
                    </Column>
                </Row>
            </Column>
        </CardContextProvider>
    );
};

export const WebApp = () => (
    <AppWindow>
        <PageContainer>
            <Heading> {"Deckadance"}</Heading>
            <AppNavigator />
            <Routes>
                <Route
                    element={<Navigate to="/home" />}
                    path="*"
                />
                <Route
                    path="card/:card_id"
                    element={<CardViewPage />}
                />
                <Route
                    path="/home"
                    element={<HomePage />}
                />
                <Route
                    path="/import"
                    element={<DeckCardAdder />}
                />
                <Route
                    element={<VaultPage />}
                    path={"/vault"}
                />
                <Route
                    element={<DecksPage />}
                    path={"/decks"}
                />
                <Route
                    element={<DeckPage />}
                    path={"/deck/:deck_id"}
                />
                <Route
                    element={<WishlistPage />}
                    path={"/wishlist"}
                />
            </Routes>
        </PageContainer>
    </AppWindow>
);
