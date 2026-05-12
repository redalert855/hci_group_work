import { VStack } from "@chakra-ui/react";
import { DisplaySet } from "../components/set/DisplaySet";
import { ShowCollection } from "@/components/card/ShowCollection";

export const HomePage = () => {
    return (
        <VStack
            bg={"white"}
            maxH={"100vh"}
            p={4}
            w={"full"}
            overflow={"scroll"}
        >
            <ShowCollection />
            <DisplaySet set_code={"uma"} />
        </VStack>
    );
};
