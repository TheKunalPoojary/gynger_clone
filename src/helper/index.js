import Stack from "../contentstack-sdk";
import { addEditableTags } from "@contentstack/utils";

const liveEdit = process.env.CONTENTSTACK_LIVE_EDIT_TAGS === "false";

export const getHeaderRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: "navbar",
    });

    liveEdit && addEditableTags(response[0][0], "header", true);
    return response[0][0];
};

export const getFooterRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: "bottom_section",
    });
    liveEdit && addEditableTags(response[0][0], "footer", true);
    return response[0][0];
};

export const getMainRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: "full_page",
    });
    liveEdit && addEditableTags(response[0][0], "footer", true);
    return response[0][0];
};