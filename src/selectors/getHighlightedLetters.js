import getHighlightedCells from "./getHighlightedCells"
import getCurrentPuzzleGrid from "./getCurrentPuzzleGrid"
import getCurrentCell from "./getCurrentCell";

export default function getHighlightedLetters(state) {
    const highlightedCells =  getHighlightedCells(state)
    const grid =  getCurrentPuzzleGrid(state)
    const currentCell = getCurrentCell(state);

    if(grid[currentCell].fill === "."){
        return null
    }
    let word = "";
    for(let i = 0; i < highlightedCells.length; i += 1){
        const letter =  grid[highlightedCells[i]].fill;
        if (letter ===  ""){
            word += "_ "
        } else {
            word += letter + " "
        }
    }
    return word;
}
  