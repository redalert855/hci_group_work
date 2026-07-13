import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { buttonRecipe } from "./components/button/button.recipe";
import { inputRecipe } from "./components/input/input.recipe";

const uiThemeConfiguration = defineConfig({
    theme: {
        recipes: {
            button: buttonRecipe,
            input: inputRecipe,
        },
    },
});
export const chakraThemeSystem = createSystem(defaultConfig, uiThemeConfiguration);
