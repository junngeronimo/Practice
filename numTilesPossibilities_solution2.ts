// Working!!
function numTilePossibilities(tiles: string): number {

  let set = new Set(); // store in valid combos
  let N = tiles.length;
  
  const dfsHelper = (curr: string, tilesLeft: string[], count:number) => {
    
    if (count === N) {
      if (!set.has(curr)) set.add(curr);
      return;
    }
    
    // making it conditional with a check the set makes it so much faster
    if (!set.has(curr)) dfsHelper(curr, tilesLeft, count+1)
    
    for (let i = 0; i < tilesLeft.length; i++) {
      
      let remainingTiles = [...tilesLeft];
      remainingTiles.splice(i, 1);

      // making it conditional with a check the set makes it so much faster
      if (!set.has(curr + tilesLeft[i])) dfsHelper(curr + tilesLeft[i], remainingTiles, count);
      
    }
        
  }
    
  dfsHelper("", [...tiles], 0);
  
  return (set.size)-1;
  
}