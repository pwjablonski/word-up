export default function createEmptyPuzzle(puzzleKey, cols, rows) {
    let puzzle = {};
    puzzle.puzzleKey = puzzleKey
    puzzle.title = "Untitled"
    puzzle.author = "No Author"
    puzzle.size = {
      cols: 15,
      rows: 15
    }
    puzzle.grid = []
    puzzle.clues = {
        across: [],
        down: [],
    }
    let clueCount = 1;
    for(let i = 0; i < cols * rows; i += 1) {
        if (i < 15 && i % 15 === 0) {
            puzzle.grid.push({index: i, fill: '', clueNum: clueCount})
            puzzle.clues.down.push({clueNum: clueCount, text: "(BLANK)"})
            puzzle.clues.across.push({clueNum: clueCount, text: "(BLANK)"})
            clueCount += 1;
        } else if(i < 15) {
            puzzle.grid.push({index: i, fill: '', clueNum: clueCount})
            puzzle.clues.down.push({clueNum: clueCount, text: "(BLANK)"})
            clueCount += 1;
        } else if (i % 15 === 0) {
            puzzle.grid.push({index: i, fill: '', clueNum: clueCount})
            puzzle.clues.across.push({clueNum: clueCount, text: "(BLANK)"})
            clueCount += 1;
        }else {
            puzzle.grid.push({index: i, fill: '', clueNum: null})
        }
    }

    return puzzle
}


// {
//     title: null,
//     author: null,
//     clues: {
//       across: [],
//       down: [],
//     },
//     grid: [],
//     size: {
//       cols: 15,
//       rows: 15
//     },
//   }