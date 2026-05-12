import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { WebApp } from "./WebApp";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { reduxStore } from "./rtk/store/store";
import { chakraThemeSystem } from "./components/chakra/system";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
export const root = createRoot(container!);
root.render(
    <BrowserRouter>
        <ReduxProvider store={reduxStore}>
            <ColorModeProvider>
                <ChakraProvider value={chakraThemeSystem}>
                    <WebApp />
                    <ToastContainer
                        autoClose={5000}
                        closeOnClick
                        draggable
                        newestOnTop
                        pauseOnFocusLoss
                        pauseOnHover
                        rtl={false}
                    />
                </ChakraProvider>
            </ColorModeProvider>
        </ReduxProvider>
    </BrowserRouter>,
);
