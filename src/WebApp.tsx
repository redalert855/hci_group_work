import { Flex, Text } from "@chakra-ui/react";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home";
export const WebApp = () => (
    <Flex
        align={"center"}
        bottom={0}
        flexDir={"column"}
        justify={"center"}
        left={0}
        maxW={"100vw"}
        overflow={"auto"}
        pb={"env(safe-area-inset-bottom)"}
        pos={"fixed"}
        right={0}
        top={0}
    >
        <Routes>
            <Route element={<HomePage />} path={"/home"} />
            <Route element={<Text>Page Not Found</Text>} path={"*"} />
        </Routes>
    </Flex>
);
