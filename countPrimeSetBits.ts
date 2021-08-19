function countPrimeSetBits(left: number, right: number): number {

  let primeSetBitsAmount:number = 0;

  for (let i = left; i <= right; i++) {
    let binaryNum:number[] = convertToBinary(i);
    let setBits:number = countSetBits(binaryNum);
    if (isPrime(setBits)) primeSetBitsAmount++;
  }

  return primeSetBitsAmount;
};

export function convertToBinary(n:number): number[] {

  let binaryRep:number[] = [];

  let quotient = n;
  let remainder = 0;

  while (quotient > 1) {
    remainder = quotient % 2;
    // console.log(remainder);
    binaryRep.unshift(Math.floor(remainder));
    quotient = quotient / 2;
  }

  // console.log(binaryRep);
  return binaryRep;
}

function countSetBits(binaryNumber:number[]): number {
  
  let setBits = 0;

  for (let i = 0; i < binaryNumber.length; i++) {
    if (binaryNumber[i] === 1) {
      setBits++;
    }

  }
  // console.log(setBits);
  return setBits;
}

function isPrime(n:number): boolean {
  let isPrime:boolean = true;
  if (n === 0) return false;
  
  for (let i = n-1; i >= 2; i--) {
    let remainder = n % i;
    if (remainder === 0) {
      isPrime = false;
      break;
    }

  }
  // console.log(isPrime);
  return isPrime;
}

console.log(countPrimeSetBits(6,10));
// console.log(countPrimeSetBits(10,15));




