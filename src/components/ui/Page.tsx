import type { FlexProps } from "@chakra-ui/react";
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
        align={"center"}
        className={"page-align-outer"}
        h={"fit-content"}
        maxW={"full"}
        minW={"0"}
        overflow={"auto"}
        {...outerProps}
    >
        <Column
            className={"page-align-inner"}
            flexGrow={1}
            gap={{ base: ".5rem", md: "1rem" }}
            h={"fit-content"}
            maxW={{ base: "full", md: "70rem" }}
            minH={"fit-content"}
            p={{ base: ".5rem", md: "1rem" }}
            pos={"relative"}
            w={"full"}
            {...innerProps}
        >
            {children}
        </Column>
    </Column>
);
