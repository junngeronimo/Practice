function countPrimeSetBits(left, right) {
    var primeSetBitsAmount = 0;
    for (var i = left; i <= right; i++) {
        var binaryNum = convertToBinary(i);
        var setBits = countSetBits(binaryNum);
        if (isPrime(setBits))
            primeSetBitsAmount++;
    }
    return primeSetBitsAmount;
}
;
export function convertToBinary(n) {
    var binaryRep = [];
    var quotient = n;
    var remainder = 0;
    while (quotient > 1) {
        remainder = quotient % 2;
        // console.log(remainder);
        binaryRep.unshift(Math.floor(remainder));
        quotient = quotient / 2;
    }
    // console.log(binaryRep);
    return binaryRep;
}
function countSetBits(binaryNumber) {
    var setBits = 0;
    for (var i = 0; i < binaryNumber.length; i++) {
        if (binaryNumber[i] === 1) {
            setBits++;
        }
    }
    // console.log(setBits);
    return setBits;
}
function isPrime(n) {
    var isPrime = true;
    if (n === 0)
        return false;
    for (var i = n - 1; i >= 2; i--) {
        var remainder = n % i;
        if (remainder === 0) {
            isPrime = false;
            break;
        }
    }
    // console.log(isPrime);
    return isPrime;
}
console.log(countPrimeSetBits(6, 10));
// console.log(countPrimeSetBits(10,15));
