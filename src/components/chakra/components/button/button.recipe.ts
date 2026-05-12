import { mapEntries } from "@/components/chakra/utils/mapEntries";
import { defineRecipe } from "@chakra-ui/react";
import { inputRecipe } from "../input/input.recipe";

export const buttonRecipe = defineRecipe({
    base: {
        "--base-size": "1rem",
        borderRadius: "2.5rem",
        py: ".2rem",
        gap: ".5rem",
        fontWeight: "bold",
        height: "fit-content",
        _hover: {
            bg: "white",
            color: "black",
        },
        colorPalette: "primary",
        borderWidth: "2px",
    },
    defaultVariants: {
        size: { base: "xs", md: "md" },
        visual: "solid",
    },
    variants: {
        size: mapEntries(inputRecipe.variants?.size!, (key, variantStyles) => [
            key,
            {
                "--base-padding": variantStyles.px,
                ...variantStyles,
            },
        ]),
        visual: {
            solid: {
                _hover: {
                    bg: "{colors.colorPalette.muted}",
                    color: "{colors.colorPalette.contrast}",
                },
                bg: "{colors.colorPalette.solid}",
                color: "{colors.colorPalette.contrast}",
                _visited: {
                    bg: "white",
                    color: "{colors.colorPalette.contrast}",
                },
                _selected: {
                    bg: "{colors.colorPalette.muted}",
                    color: "{colors.colorPalette.contrast}",
                },
            },
        },
    },
});
