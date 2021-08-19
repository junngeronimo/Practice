function cutOffTree(forest: number[][]): number {
  
  let goNorth = (pos:number[], rows: number, cols: number):(number[] | null) => {
    
    if (pos[0] - 1 < 0) {
      return null;
    }
    
    return [pos[0]-1, pos[1]];
  };
  
  let goEast = (pos:number[], rows: number, cols: number):(number[] | null) => {
    
    if (pos[1]+1 >= rows) return null;
    
    return [pos[0], pos[1]+1];
  };
  
  let goSouth = (pos:number[], rows: number, cols: number):(number[] | null) => {
    
    if (pos[0]+1 >= cols) return null;
        
    return [pos[0]+1, pos[1]];
  };
  
  let goWest = (pos:number[], rows: number, cols: number):(number[] | null) => {
    
    if (pos[1]-1 < 0) return null;
        
    return [pos[0], pos[1]-1];
  };

  let checkTrees = (forest: number[][]): boolean => {

    for (let i = 0; i < forest.length; i++) {
      for (let j = 0; j < forest[0].length; j++) {
        if (forest[i][j] > 1) {
          return false;
        }
      }
    }

    return true;
  }

  let moveChecker = (moves:number[]): boolean => {

    for (let i = 0; i < moves.length; i++) {
      if (moves[i] > 0) {
        return true;
      }
    }
    return false;
  }
  
  let currPos = [0, 0]
  let currCell = forest[currPos[0]][currPos[1]];
  let steps = 0;
  let maxSteps = (forest.length * forest[0].length)-1
  let rows = forest[0].length;
  let cols = forest.length;
  let areStepsAvailable:boolean = true;
  let nextMinVal = currCell;
  let nextPos;

  // console.log(`rows ${rows} cols ${cols}`)
    
  // check currCell
    // if currCell == 0, return -1
    // if currCell == 1, 
      // find adjacent cell to step to 
      // step
      // increase step counter
    // if currCell > 1
      // currCell = 1
      // 
  
  // check adjacent cells
  
  while (areStepsAvailable) {
    console.log(`steps: ${steps}`)
    
    
    if (currCell === 0) {
      return -1;
    }
    
    // ESTABLISH POSSIBLE STEPS
    let northPos = goNorth(currPos, rows, cols);
    let eastPos = goEast(currPos, rows, cols);
    let southPos = goSouth(currPos, rows, cols);
    let westPos = goWest(currPos, rows, cols);
    
    let NCell = northPos ? forest[northPos[0]][northPos[1]] : null;
    let ECell = eastPos ? forest[eastPos[0]][eastPos[1]] : null;
    let SCell = southPos ? forest[southPos[0]][southPos[1]] : null;
    let WCell = westPos ? forest[westPos[0]][westPos[1]] : null;
    
    let directions = [NCell, ECell, SCell, WCell];
    // ===== ESTABLISH POSSIBLE STEPS  

    if (currCell === 1 && steps !== 0) {
      console.log(`forest: [${forest}]`)
      console.log(`BEFORE ==== currCell: ${currCell} -> currPos: [${currPos}] , directions ${directions}`)
      if (checkTrees(forest) === false && moveChecker(directions)) {

          // console.log(`first loop currcell == 1`)
          while (westPos !== null && currCell <= 1) {
            if (currCell === 0) return -1;
            currPos = westPos;
            currCell = WCell;

            northPos = goNorth(currPos, rows, cols);
            eastPos = goEast(currPos, rows, cols);
            southPos = goSouth(currPos, rows, cols);
            westPos = goWest(currPos, rows, cols);
            NCell = northPos ? forest[northPos[0]][northPos[1]] : null;
            ECell = eastPos ? forest[eastPos[0]][eastPos[1]] : null;
            SCell = southPos ? forest[southPos[0]][southPos[1]] : null;
            WCell = westPos ? forest[westPos[0]][westPos[1]] : null;
            directions = [NCell, ECell, SCell, WCell];
            steps++;
            console.log(`west ${currPos}, ${currCell}`)
          }
          while (southPos !== null && currCell <= 1) {
            if (currCell === 0) return -1;
            currPos = southPos;
            currCell = SCell;
            nextMinVal = currCell + 1

            northPos = goNorth(currPos, rows, cols);
            eastPos = goEast(currPos, rows, cols);
            southPos = goSouth(currPos, rows, cols);
            westPos = goWest(currPos, rows, cols);
            NCell = northPos ? forest[northPos[0]][northPos[1]] : null;
            ECell = eastPos ? forest[eastPos[0]][eastPos[1]] : null;
            SCell = southPos ? forest[southPos[0]][southPos[1]] : null;
            WCell = westPos ? forest[westPos[0]][westPos[1]] : null;
            directions = [NCell, ECell, SCell, WCell];
            steps++;
            console.log(`south ${currPos}, ${currCell}`)
          }
          while (eastPos !== null && currCell <= 1) {
            if (currCell === 0) return -1;
            currPos = eastPos;
            currCell = ECell;
            nextMinVal = currCell + 1

            northPos = goNorth(currPos, rows, cols);
            eastPos = goEast(currPos, rows, cols);
            southPos = goSouth(currPos, rows, cols);
            westPos = goWest(currPos, rows, cols);
            NCell = northPos ? forest[northPos[0]][northPos[1]] : null;
            ECell = eastPos ? forest[eastPos[0]][eastPos[1]] : null;
            SCell = southPos ? forest[southPos[0]][southPos[1]] : null;
            WCell = westPos ? forest[westPos[0]][westPos[1]] : null;
            directions = [NCell, ECell, SCell, WCell];
            steps++;
            console.log(`east ${currPos}, ${currCell}`)
          }
          while (northPos !== null && currCell <= 1) {
            if (currCell === 0) return -1;
            currPos = northPos;
            currCell = NCell;
            nextMinVal = currCell + 1

            northPos = goNorth(currPos, rows, cols);
            eastPos = goEast(currPos, rows, cols);
            southPos = goSouth(currPos, rows, cols);
            westPos = goWest(currPos, rows, cols);
            NCell = northPos ? forest[northPos[0]][northPos[1]] : null;
            ECell = eastPos ? forest[eastPos[0]][eastPos[1]] : null;
            SCell = southPos ? forest[southPos[0]][southPos[1]] : null;
            WCell = westPos ? forest[westPos[0]][westPos[1]] : null;
            directions = [NCell, ECell, SCell, WCell];
            steps++;
            console.log(`north ${currPos}, ${currCell}`)
          }

          // while (eastPos !== null) {
          //   eastPos = goEast(currPos, rows, cols);
          //   currPos = eastPos;
          //   currCell = eastPos ? forest[eastPos[0]][eastPos[1]] : null;
          //   directions[1] = currCell;
          // }
          // while (northPos !== null) {
          //   northPos = goNorth(currPos, rows, cols);
          //   currPos = northPos;
          //   currCell = northPos ? forest[northPos[0]][northPos[1]] : null;
          //   directions[0] = currCell;
          // }
          console.log(`AFTER ==== currCell: ${currCell} -> currPos: [${currPos}] , directions ${directions}`)



      } else if (checkTrees(forest)) {
        return steps - 1;
      } else if (moveChecker(directions) === false){
        return -1;
      }
    }
  
    // FIND DIRECTION TO STEP
    for (let i = 0; i < directions.length; i++) {
      
      console.log(`currCell: ${currCell} , i: ${i} , directions: [${directions}] , nextMinVal: ${nextMinVal}`)

      if (directions[i] === nextMinVal || (directions[i] > 1 )) { 
        switch(i) {
          case 0:
            nextPos = northPos;
            nextMinVal = forest[nextPos[0]][nextPos[1]]
            break;
          case 1:
            nextPos = eastPos;
            nextMinVal = forest[nextPos[0]][nextPos[1]]
            break;
          case 2:
            nextPos = southPos;
            nextMinVal = forest[nextPos[0]][nextPos[1]]
            break;
          case 3:
            nextPos = westPos;
            nextMinVal = forest[nextPos[0]][nextPos[1]]
            break;
        }
        // nextMinVal++;
        break;
      } else {
      
        // SEARCH THROUGH POSSIBLE MOVES
        if (directions[i] !== undefined && directions[i] > 0) { // null | 0 = you can't step there
          
          // NORTH
          if (i == 0 && directions[i] < nextMinVal) {
            // nextMinVal = directions[i];
            nextPos = northPos;
          } 
          
          // EAST
          else if (i == 1 && directions[i] < nextMinVal) {
            // nextMinVal = directions[i];
            nextPos = eastPos;
          } 
          
          // SOUTH
          else if (i == 2 && directions[i] < nextMinVal) {
            // nextMinVal = directions[i];
            nextPos = southPos;
          } 
          
          // WEST
          else if (i == 3 && directions[i] < nextMinVal) {
            // nextMinVal = directions[i];
            nextPos = westPos;
          } 

          else {
            console.log(`STOPPING while loop i = ${i} , directions[i] = ${directions[i]},  nextMinVal = ${nextMinVal}`)
            areStepsAvailable = false;
          }
          
        }
      }

      console.log(`nextPos at end of for loop: ${nextPos}`)
       
    }
    if (nextPos===undefined) {
      if (!checkTrees(forest)) return -1;
      console.log(`nextPos undefined`)
      return -1;
    }
    
    // TAKE STEP
    // if (steps > maxSteps) {
    //   console.log(`steps > maxSteps`)
    //   if (!checkTrees(forest)) return -1;
    //   return steps;
    // } 
    //make currCell = 1;
    console.log(`currPos: ${currPos} = ${forest[currPos[0]][currPos[1]]}`)

    forest[currPos[0]][currPos[1]] = 1;
    currPos = nextPos;
    currCell = forest[currPos[0]][currPos[1]];
    console.log(`nextPos: ${nextPos} = ${currCell}`)

    
    steps++
    // nextMinVal += 1;
    console.log(`forest: [${forest}]`)
  }
      
  if (!checkTrees(forest)) return -1;
         
  return steps;
};

console.log(
  cutOffTree(
    [[1,2,3],[0,0,4],[7,6,5]]
    
    ));

console.log(
  cutOffTree(
    [[1,2,3],[0,0,0],[7,6,5]]
    
    ));

console.log(
  cutOffTree(
    [[2,3,4],[0,0,5],[8,7,6]]
    
    ));


// console.log(
//   cutOffTree(
//     [[54581641,64080174,24346381,69107959],[86374198,61363882,68783324,79706116],[668150,92178815,89819108,94701471],[83920491,22724204,46281641,47531096],[89078499,18904913,25462145,60813308]]
//   )
// )