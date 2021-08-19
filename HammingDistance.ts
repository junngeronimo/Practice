function hammingDistance(x: number, y: number): number {
  
  let hammingDistance:number = 0;
  let xBin = convertToBinary(x);
  let yBin = convertToBinary(y);

  let highestBits = xBin.length > yBin.length ? xBin.length-1 : yBin.length-1

  for (let i = highestBits; i > highestBits; i--) {

    if (xBin[i] !== yBin[i]) {
      hammingDistance += 1;
    } else {
      break;
    }
  }

  return hammingDistance;

};

function convertToBinary(n:number): number[] {

  let binaryRep:number[] = [];

  let quotient = n;
  let remainder = 0;

  while (quotient >= 1) {
    remainder = quotient % 2;
    // console.log(remainder);
    binaryRep.unshift(Math.floor(remainder));
    quotient = quotient / 2;
  }

  // console.log(binaryRep);
  return binaryRep;
}

// for (let i = 1; i < 101; i++) {
//   console.log(convertToBinary(i));
// }

console.log(convertToBinary(1));
console.log(convertToBinary(4));
console.log(hammingDistance(1,4));
//deci-binary = each digit either 1 or 0

// deci-binary[].sum = n

// n = positive umber

// return minimum number of positive deci-binary numbers to sum up to n