export default function generatePattern() {
    const newGrid = []

    for (let i = 0; i < 225; i++){
        newGrid.push({index: i, fill: '', clueNum: null});
    }

    for (let i = 0; i < 225; i++){
        let canFillSquare = canSquareBeFilled(newGrid, i);
        let shouldFillSquare = Math.random() < 0.5;
        if (shouldFillSquare && canFillSquare) {
            newGrid[i].fill= "."
        }
    }
    return newGrid;
}

  
function canSquareBeFilled(pattern, i, j){
    let leftClear = sideIsClear(pattern, i, "left")
    let rightClear = sideIsClear(pattern, i, "right")
    let upClear = sideIsClear(pattern, i, "up")
    let downClear = sideIsClear(pattern, i, "down")
    // debugger;
    if (
        leftClear &&
        rightClear &&
        upClear &&
        downClear
    ) {
        return true;
    }
    return false;
}

function sideIsClear(grid, i, direction){
    let incrementor;
    let isLessThanTreeFromEdge;
    let isSideClear;
    let isAtEdge
    // debugger;
    if(direction === "left"){
        incrementor = -1;
        isAtEdge = i % 15 === 0
        isLessThanTreeFromEdge = i % 15 < 3
    } else if (direction==="right"){
        incrementor = 1;
        isAtEdge = i % 15 === 14
        isLessThanTreeFromEdge = i % 15 > 11
    } else if(direction==="up"){
        incrementor = -15;
        isAtEdge = i < 15
        isLessThanTreeFromEdge = i < 45
    } else if (direction === "down"){
        incrementor = 15;
        isAtEdge = i > 209
        isLessThanTreeFromEdge = i > 179
    }
    

    if(isAtEdge || grid[i + incrementor].fill === "."){
        isSideClear = true;
    } else if(isLessThanTreeFromEdge){
        isSideClear = false
    } else {
        if (
            grid[i + incrementor].fill !== "." &&
            grid[i + incrementor * 2].fill !== "." &&
            grid[i + incrementor * 3].fill !== "."
        ) {
            isSideClear = true;
        } else {
            isSideClear = false
        }
    }


    
    return isSideClear;
}