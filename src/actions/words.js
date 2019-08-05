import { createAction } from "redux-actions";

export const searchWord = createAction("SEARCH_WORD");

export const wordsLoaded = createAction("WORDS_LOADED",
    (words) => ({words})
);