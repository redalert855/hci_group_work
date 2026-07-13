import { type FlexProps, Flex } from "@chakra-ui/react";

export const AppWindow = (props: FlexProps) => {
    return (
        <Flex
            flexDir={"column"}
            className="AppWindow"
            bottom={0}
            left={0}
            maxW={"100vw"}
            overflow={"auto"}
            pb={"env(safe-area-inset-bottom)"}
            pos={"fixed"}
            maxH={"100vh"}
            right={0}
            top={0}
            color={"#000"}
            bg={"#f0f0f0"}
            gap={"1rem"}
            align={"center"}
            {...props}
        />
    );
};
