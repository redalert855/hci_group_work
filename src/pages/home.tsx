import { useAppDispatch, useAppSelector } from "@/rtk/store/hooks";
import { appSlice } from "@/rtk/store/slices/appSlice";
import { Button, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { DisplaySet } from "../components/set/DisplaySet";

export const HomePage = () => {
    const dispatch = useAppDispatch();
    const { example } = useAppSelector((state) => state.app);
    const [text, setText] = useState(example);
    const saveTextToStore = () => {
        dispatch(appSlice.actions.setExample(text));
    };
    return (
        <VStack
            bg={"white"}
            maxH={"100vh"}
            p={4}
            w={"full"}
            overflow={"scroll"}
        >
            <Text>{`Current store text (saved): ${example}`}</Text>
            <Text>{`Current text (unsaved): ${text}`}</Text>
            <Input
                placeholder="enter text"
                onChange={(e) => setText(e.target.value)}
            />
            <Button onClick={() => saveTextToStore()}>Click me to save to the store</Button>
            <DisplaySet set_code={"uma"} />
        </VStack>
    );
};
