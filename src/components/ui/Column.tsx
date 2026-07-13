import { Flex, FlexProps } from "@chakra-ui/react";

export const Column = (props: FlexProps) => (
    <Flex
        gap={"inherit"}
        flexDir={"column"}
        {...props}
    />
);
