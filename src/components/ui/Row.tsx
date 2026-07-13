import { FlexProps, Flex } from "@chakra-ui/react";

export const Row = (props: FlexProps) => (
    <Flex
        flexDir={"row"}
        gap={"inherit"}
        {...props}
    />
);
