import { CardCoreFields } from "./CardCoreFields";
import { CardGameplayFields } from "./CardGameplayFields";
import { CardPrintFields } from "./CardPrintFields";

export type CardObject = {
    object: "card";
} & CardCoreFields &
    CardGameplayFields &
    CardPrintFields;
