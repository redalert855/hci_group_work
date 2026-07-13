import { Button, Portal } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Dialog } from "@chakra-ui/react";

export const ConfirmationModal = (
    props: { message: string; onConfirm: () => void } & PropsWithChildren,
) => {
    return (
        <Dialog.Root placement={"center"}>
            <Dialog.Trigger asChild>{props.children}</Dialog.Trigger>
            <Dialog.Backdrop />
            <Portal>
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Are you sure?</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <Dialog.Description>{props.message}</Dialog.Description>
                        </Dialog.Body>
                        <Dialog.Footer
                            display={"flex"}
                            flexDir={"row"}
                            justifyContent={"center"}
                        >
                            <Dialog.CloseTrigger asChild>
                                <Button>Cancel</Button>
                            </Dialog.CloseTrigger>
                            <Dialog.Context>
                                {(context) => (
                                    <Button
                                        colorScheme="red"
                                        onClick={() => {
                                            props.onConfirm();
                                            context.setOpen(false);
                                        }}
                                    >
                                        Confirm
                                    </Button>
                                )}
                            </Dialog.Context>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
};
