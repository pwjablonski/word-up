import { createAction } from "redux-actions";

export const puzzleCreated = createAction("PUZZLE_CREATED", 
    (puzzleKey) => ({puzzleKey})
);

export const createPuzzle = createAction("CREATE_PUZZLE");

export const updateCellFill = createAction("UPDATE_CELL_FILL",
    (currentPuzzleKey, cell, fill) => ({currentPuzzleKey, cell, fill})
);

export const updatePuzzle = createAction("UPDATE_PUZZLE",
    (key) => ({key})
);

export const gridUpdated = createAction("GRID_UPDATED",
    (currentPuzzleKey, grid, clues) => ({currentPuzzleKey, grid, clues})
);

export const clueTextChanged = createAction("CLUE_TEXT_CHANGED",
    (currentPuzzleKey, direction, index, value) =>
    ({currentPuzzleKey, direction, index, value})
);

export const authorChanged = createAction("AUTHOR_CHANGED",
    (currentPuzzleKey, value) =>
    ({currentPuzzleKey, value})
);

export const titleChanged = createAction("TITLE_CHANGED",
    (currentPuzzleKey, value) =>
    ({currentPuzzleKey, value})
);