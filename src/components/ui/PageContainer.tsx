import { Flex, type FlexProps } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Column } from "./Column";
/**
 * Component for styling a page within the app, has useful defaults such as flex direction, padding,
 * and max width and alignment. It will align stuff to the center of the page, and contain it within
 * a maximum width.
 */
export const PageContainer = ({
    outerProps,
    innerProps,
    children,
}: {
    outerProps?: FlexProps;
    innerProps?: FlexProps;
    children?: ReactNode;
}) => (
    <Column
        className={"page-align-outer"}
        maxW={"full"}
        minW={"0"}
        w={"full"}
        align={"center"}
        overflow={"auto"}
        flexGrow={1}
        {...outerProps}
    >
        <Column
            className={"page-align-inner"}
            flexGrow={1}
            gap={{ base: ".5rem", md: "1rem" }}
            h={"fit-content"}
            maxW={{ base: "full", md: "60rem" }}
            minH={"fit-content"}
            p={{ base: ".5rem", md: "1rem" }}
            pos={"relative"}
            w={"full"}
            maxH={"full"}
            overflow={"scroll"}
            {...innerProps}
        >
            {children}
        </Column>
    </Column>
);
