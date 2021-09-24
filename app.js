//Function #1: Array Slice

const foods = ['pizza', 'burger', 'fingerShips', 'donuts', 'springRoll'];
let modifiedFood = foods.slice(1,4)
console.log(modifiedFood)

//Function #2: Array Splice

const foods = ['pizza', 'burger', 'fingerShips', 'donuts', 'springRoll'];
modifiedFood = [];
for (var i of foods)
{
    modifiedFood.push(i)
}    
modifiedFood.splice(2,0, 'noodles', 'icecream');
console.log(modifiedFood);

//Function #3.1: Filter

const numberArray = [12,324,213,4,2,3,45,4234];

let isEven  = numberArray.filter(Ele  => Ele % 2 === 0 )
console.log(isEven  )

//Function #3.2: Filter

const numberArray = [12,324,213,4,2,3,45,4234];

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
const myPrimeArray = numberArray.filter(isPrime);
console.log(myPrimeArray);

//Function #4: Reject

function nonPrime(arr, f)
{
    const a1 = [];
    let ct = 0; 
    for (let i = 0; i < arr.length; i++)
    {
        let val = arr[i]
        for (let j = 1; j <= val; j++) 
        {
            if (val % j === 0)
            {
                ct++
            }   
        }
            if (ct != 2)
           {
               a1.push(val)
               ct = 0
           }
           else
          {
              ct=0

          }
    }
    return a1;
}
const numberArray = [12,324,213,4,2,3,45,4234];
let isnotPrime = nonPrime(numberArray,function(item){return item})
console.log(isnotPrime);

//Function #5: Lambda

const numberArray = [12,324,213,4,2,3,45,4234];

const isEven =  x => 
{
  len(list(filter(lambda (x%2 === 0), numberArray))) 
}  
console.log(isEven)

//Function #6: Map

const myArray = [11, 34, 20, 5, 53, 16];

const findSquareOfNumbers = myArray.map(ele => ele*ele)
console.log(findSquareOfNumbers)

//Function #7.1: Reduce

const myArray = [2, 3, 5, 10];

function ur(otp, cval)
{
    return   otp*cval
}
const multiply = myArray.reduce(ur)
console.log(multiply)

//Function #7.2: Reduce

const myArray = [11, 34, 20, 5, 53, 16];

const findSquareOfNumbers = myArray.map(ele => ele*ele)
console.log(findSquareOfNumbers)
console.log('\n')
function ur(otp, cval)
{
    return   otp*cval
}
const multiply = myArray.reduce(ur)
console.log(multiply)








