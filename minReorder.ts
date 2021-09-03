function minReorder(n: number, connections: number[][]): number {
  
  let changes = 0;
  const forward = new Map();
  const backward = new Map();
  let visited = [];
  
  connections.forEach((element) => {

    if (forward.has(element[0])) {
      forward.get(element[0]).push(element[1]);
    } else {
    
    forward.set(element[0], [element[1]])
    
    }
    
    if (backward.has(element[1])) {
      backward.get(element[1]).push(element[0]);
    } else {
      
    backward.set(element[1], [element[0]])
    
    }
    
  })
  
  const dfs = (currRoad:number, checkForward:boolean) => {
    
    if (visited[currRoad]) {
      return
    }
    visited[currRoad] = true;
    if (checkForward) {
      changes++;
    }
    const f = forward.get(currRoad);
    const b = backward.get(currRoad);
    // console.log(`f: ${f}`)
    // console.log(`f: ${f}`)
    
    if (f) {
      f.forEach((element) => {
        // console.log(`f-element: ${element}`)
        dfs(element, true);
      })
    }
    if (b) {
      b.forEach((element) => {
        // console.log(`b-element: ${element}`)
        dfs(element, false);
      })
    }
    
  }
  
  // input capital city
  dfs(0, false)
  
  // console.log(map.get(4))
  // console.log(map.get(1))
  // console.log(map.get(3))
  
//   console.log(forward);
//   console.log(backward);
  
  return changes;

};