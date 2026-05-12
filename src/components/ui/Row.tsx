import { FlexProps, Flex } from "@chakra-ui/react";

export const Row = (props: FlexProps) => (
    <Flex
        flexDir={"column"}
        {...props}
    />
);
