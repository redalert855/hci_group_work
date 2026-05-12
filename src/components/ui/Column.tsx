import { Flex, FlexProps } from "@chakra-ui/react";

export const Column = (props: FlexProps) => (
    <Flex
        flexDir={"column"}
        {...props}
    />
);
