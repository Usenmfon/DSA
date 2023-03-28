// function isPowerOfTwo(n){
//     if(n < 1) return false

//     for(let i = 0; i < n; i++){
//         if(n === Math.pow(2,i)){
//             return true
//         }
//     }
//     return false
// }

console.log(isPowerOfTwoBitWise(1))
console.log(isPowerOfTwoBitWise(2))
console.log(isPowerOfTwoBitWise(5))
console.log(isPowerOfTwoBitWise(8))

// function isPowerOfTwo(n){
//     if(n < 1){
//         return false
//     }

//     while(n > 2){
//         if(n % 2 !== 0){
//             return false
//         }
//         n = n / 2
//     }
//     return true
// }

//Big O - O(logn) 

function isPowerOfTwoBitWise(n){
    if(n < 1) return false

    return (n & (n - 1)) === 0
}

//Big O - O(1)