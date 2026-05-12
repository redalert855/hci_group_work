import { ShowCollection } from "@/components/card/ShowCollection";
import { TotalCardInCollection } from "./TotalCardInCollection";
import { PageContainer } from "@/components/ui/Page";
import { CardAdder } from "./CardAdder";

export const CollectionPage = () => {
    return (
        <PageContainer>
            <CardAdder />
            <TotalCardInCollection />
            <ShowCollection />
        </PageContainer>
    );
};
