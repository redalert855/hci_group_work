import { defineRecipe } from "@chakra-ui/react";

export const inputRecipe = defineRecipe({
    base: {
        _hover: {
            borderColor: "primary",
        },
        colorPalette: "primary",
        borderColor: "secondary",
        borderRadius: "full",
        bg: "white",
        color: "primary",
        fontWeight: "normal",
        boxShadow: "md",
        minH: "fit-content",
        focusVisibleRing: "inside",
    },
    defaultVariants: {
        size: "md",
        variant: "default",
    },
    variants: {
        size: {
            xs: {
                textStyle: "xs",
                px: ".6rem",
                py: "0",
                minH: "1.75rem",
            },
            sm: {
                textStyle: "sm",
                px: ".7rem",
                py: "0",
                minH: "2rem",
            },
            md: {
                textStyle: "md",
                px: ".8rem",
                py: "0",
                minH: "2.5rem",
            },
            lg: {
                textStyle: "lg",
                px: ".9rem",
                py: "0",
                minH: "3rem",
            },
            xl: {
                textStyle: "xl",
                px: "1rem",
                py: "0",
                minH: "3.5rem",
            },
            "2xl": {
                textStyle: "2xl",
                px: "1.1rem",
                py: "0",
                minH: "4rem",
            },
        },
        variant: {
            default: {
                bg: "separator.100",
                color: "secondary",
            },
        },
    },
});
