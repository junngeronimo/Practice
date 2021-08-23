// Not working, brute force style.
function numTilePossibilities(tiles: string): number {
  
  if (tiles.length === 1) {
    return 1;
  }
  
  let map = new Map()
  let combinations = 0;
  let n = 0;
  let r = tiles.length;
  
  for (let i = 0; i< tiles.length; i++) {
    
    if (map.get(tiles.charAt(i)) >= 0) {
      map.set(tiles.charAt(i), map.get(tiles.charAt(i))+1);
      if (map.get(tiles.charAt(i)) > n) {
        n = map.get(tiles.charAt(i));
      }
    } else {
      map.set(tiles.charAt(i), 1);
    }
  }
  
  console.log(`n: ${n}`);
  
  const fact = (n:number):number => {
    
    if (n === 0) {
      return 1
    } else if (n < 0) {
      return (n * fact(n+1));
    } else {
      return (n * fact(n-1));
    }
    
  }
  
  let arr = [...tiles];
  
  // map.forEach((value, key) => {
  //   let top = fact(n)
  //   let bot = (fact(n-value))
  //   let sol = Math.floor(top / bot)
  //   console.log(`top ${top} bot ${bot} sol ${sol} val ${value}`)
  //   combinations += sol;
  // })  
  
  // In summary we have these ways to select 
  // r things from n possibilities:
  
  for (let i = 1; i < arr.length+1; i++) {
    let top = fact(n+i-1)
    let bot = (fact(i) * fact(n-1))
    let sol = top / bot
    console.log(`C(${n+i-1},${i}) = top ${top} bot ${bot} sol ${sol} i ${i}`)
    combinations += sol;
  }
  
  let top = fact(3);
  let bot = (fact(3-2))
  let sol = top / bot
  console.log(`sol permutations ${sol}`)
  
  return combinations;
};


// put string into HashMap to find unique letters

// 