
// function factorial(number){
//   let result = number;
//   if(number === 0 || number === 1){
//     return 1;
//   }
//   for(i=number-1; i>1; i--){
//     number*=i
//   }
//   return number
// }

// console.log(factorial(1))
//SPREAD OPERATOR
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [...arr1,6,...arr2]
console.log(arr3)
function sayNum(one,two){
  console.log(`${one} & ${two}`)
}

sayNum(...arr1)

function listNums(){
  const arr = Array.from(arguments) //converting to array
  return arr.reduce((acc,val)=>{
    return acc + val
  })
}

console.log(listNums(1,2,3,5,6))

// REST OPERATOR