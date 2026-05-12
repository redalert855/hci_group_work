import { VStack } from "@chakra-ui/react";
import { DisplaySet } from "../components/set/DisplaySet";
import { ShowCollection } from "@/components/card/ShowCollection";
import { PageContainer } from "@/components/ui/Page";

export const HomePage = () => {
    return (
        <PageContainer>
            <ShowCollection />
            <DisplaySet set_code={"uma"} />
        </PageContainer>
    );
};
