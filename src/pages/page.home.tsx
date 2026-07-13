import { Flex } from "@chakra-ui/react";
import { Row } from "@/components/ui/Row";
import { useNavigate } from "react-router";

export const HomePage = () => {
    const navigate = useNavigate();
    const HomeButton = ({ label, onClick }: { label: string; onClick?: () => void }) => (
        <Flex
            flexGrow={1}
            flexBasis={1}
            textAlign={"center"}
            h={"10rem"}
            fontSize={"2rem"}
            fontWeight={"bold"}
            bg={"red"}
            _hover={{
                bg: "white",
                cursor: "pointer",
            }}
            align={"center"}
            justify={"center"}
            onClick={onClick}
        >
            {label}
        </Flex>
    );
    return (
        <Row
            p={"5rem"}
            w={"full"}
            gap={"1rem"}
            h={"full"}
            wrap={"wrap"}
        >
            <HomeButton label={"Bulk Import Cards (TBD)"} />
            <HomeButton
                label={"View Vault"}
                onClick={() => navigate("/vault")}
            />
            <HomeButton
                label={"View Decks"}
                onClick={() => navigate("/decks")}
            />
        </Row>
    );
};
