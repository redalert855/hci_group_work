import type { IconButtonProps } from "@chakra-ui/react";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider, useTheme } from "next-themes";
import { forwardRef } from "react";
import { Icon } from "@iconify/react";

export interface ColorModeProviderProps extends ThemeProviderProps {}
export const ColorModeProvider = (props: ColorModeProviderProps) => (
    <ThemeProvider attribute={"class"} disableTransitionOnChange {...props} />
);
export function useColorMode() {
    const { resolvedTheme, setTheme } = useTheme();
    const toggleColorMode = () => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
    };
    return {
        colorMode: resolvedTheme,
        setColorMode: setTheme,
        toggleColorMode,
    };
}
export function useColorModeValue<T>(light: T, dark: T) {
    const { colorMode } = useColorMode();
    return colorMode === "light" ? light : dark;
}
export const ColorModeIcon = () => {
    const { colorMode } = useColorMode();
    return colorMode === "light" ? <Icon icon="mdi:weather-sunny" /> : <Icon icon="mdi:weather-night" />;
};
interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}
export const ColorModeButton = forwardRef<HTMLButtonElement, ColorModeButtonProps>(
    function ColorModeButton(props, ref) {
        const { toggleColorMode } = useColorMode();
        return (
            <ClientOnly fallback={<Skeleton boxSize={"8"} />}>
                <IconButton
                    ref={ref}
                    aria-label={"Toggle color mode"}
                    onClick={toggleColorMode}
                    size={"sm"}
                    {...props}
                    css={{
                        _icon: {
                            width: "5",
                            height: "5",
                        },
                    }}
                >
                    <ColorModeIcon />
                </IconButton>
            </ClientOnly>
        );
    },
);
