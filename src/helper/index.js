import Stack from "../contentstack-sdk";
import { addEditableTags } from "@contentstack/utils";

const liveEdit = process.env.CONTENTSTACK_LIVE_EDIT_TAGS === "false";

export const getHeaderRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: "header"
    });

    liveEdit && addEditableTags(response[0][0], "header", true);
    return response[0][0];
};