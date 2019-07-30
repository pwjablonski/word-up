import { createAction } from "redux-actions";

export const fetchWords = createAction("FETCH_WORDS");

export const wordsLoaded = createAction("WORDS_LOADED",
    (words) => ({words})
);