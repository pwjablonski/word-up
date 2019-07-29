export default function updateClueNums(puzzle) {
    const {grid, clues} = puzzle;
    let newGrid = [];
    let newClues = {across:[], down:[]};
    let label = 1;
    for (let i = 0; i < grid.length; i += 1) {
      if (grid[i].fill === ".") {
        newGrid.push({index: i, fill: grid[i].fill, clueNum: null});
      } else {
        if((i % 15 === 0 || grid[i - 1].fill === ".") && 
          (i < 15 || grid[i - 15].fill === ".")
        ){
          newGrid.push({index: i, fill: grid[i].fill, clueNum: label});
          newClues.across.push({clueNum:label, text: "(BLANK)"})
          newClues.down.push({clueNum:label, text: "(BLANK)"})
          label += 1;
        }
        else if (i % 15 === 0 || grid[i - 1].fill === ".") {
          newGrid.push({index: i, fill: grid[i].fill, clueNum: label});
          newClues.across.push({clueNum:label, text: "(BLANK)"})
          label += 1;
        } else if (i < 15 || grid[i - 15].fill === ".") {
          newGrid.push({index: i, fill: grid[i].fill, clueNum: label});
          newClues.down.push({clueNum:label, text: "(BLANK)"})
          label += 1;
        } else {
          newGrid.push({index: i, fill: grid[i].fill, clueNum: null});
        }
      }
    }

    for(let i = 0; i < newClues.across.length; i +=1) {
      const clue = clues.across.find(function(oldClue){
        return newClues.across[i].clueNum === oldClue.clueNum;
      });
      if(clue){
        newClues.across[i].text = clue.text;
      }
    }
    
    for(let i = 0; i < newClues.down.length; i +=1) {
      const clue = clues.down.find(function(oldClue){
        return newClues.down[i].clueNum === oldClue.clueNum;
      });
      if(clue){
        newClues.down[i].text = clue.text;
      }
    }

    return {newGrid, newClues};
}
