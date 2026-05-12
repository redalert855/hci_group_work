import { ApiParamDef } from "./ApiParamDef";

export const DirSort: ApiParamDef = {
    asc: { description: "Sort in ascending order" },
    desc: { description: "Sort in descending order" },
    auto: {
        default: true,
        description:
            "Automatically determine sort direction: ascending for most fields, descending for prices and dates",
    },
};
