import { useAppDispatch, useAppSelector } from "@/rtk/store/hooks";
import { appSlice } from "@/rtk/store/slices/appSlice";
import { Button, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
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
