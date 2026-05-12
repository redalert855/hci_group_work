import { ShowCollection } from "@/components/card/ShowCollection";
import { TotalCardInCollection } from "./TotalCardInCollection";
import { CardNameInput } from "@/components/card/CardNameInput";
import { useState } from "react";
import { Text } from "@chakra-ui/react";
import { PageContainer } from "@/components/ui/Page";

export const CollectionPage = () => {
    const [name, setName] = useState("");
    return (
        <PageContainer>
            <CardNameInput
                onSelectName={(name) => {
                    setName(name);
                    console.log("name selected outside", name);
                }}
            />

            <TotalCardInCollection />
            <ShowCollection />
        </PageContainer>
    );
};
