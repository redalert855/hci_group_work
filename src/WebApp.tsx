import { Flex, Text } from "@chakra-ui/react";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home.page";
import { CollectionPage } from "./pages/collection.page";
import { Column } from "./components/ui/Column";
export const WebApp = () => (
    <Column
        bottom={0}
        left={0}
        maxW={"100vw"}
        overflow={"auto"}
        pb={"env(safe-area-inset-bottom)"}
        pos={"fixed"}
        maxH={"100vh"}
        right={0}
        top={0}
        bg={"#f0f0f0"}
        gap={"1rem"}
    >
        <Routes>
            <Route
                element={<HomePage />}
                path={"/home"}
            />
            <Route
                element={<CollectionPage />}
                path={"/collection"}
            />
            <Route
                element={<Text>Page Not Found</Text>}
                path={"*"}
            />
        </Routes>
    </Column>
);
