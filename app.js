const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
let modifiedFood = foods.slice(1,4)
console.log(modifiedFood)
foods.splice(2,0,"noodles", "icecream")
console.log(foods)

const numberArray = [12,324,213,4,2,3,45,4234];
let isEven = numberArray.filter(function(nums,numberArray){
        return (nums%2 == 0);
});
console.log(isEven)


let isPrime = numberArray.filter(function(nums,numberArray){
            if(nums == 2) return true;
            else if(nums < 2) return false;
            else{
                for(let i = 2;i <= Math.sqrt(nums);i++){
                    if(nums%i == 0) return false;
                }
                return true;
            }
});
console.log(isPrime)

let nonPrime = numberArray.filter(function(nums,numberArray){
            if(nums == 2) return false;
            else if(nums < 2) return true;
            else{
            for(let i = 2;i <= Math.sqrt(nums);i++){
                if(nums%i == 0) return true;
            }
            return false;
             }
});
console.log(nonPrime)


let isEven = numberArray.filter((nums,numberArray)=>(nums%2 == 0));
console.log(isEven)


const myArray = [11, 34, 20, 5, 53, 16];
let findSquareOfNumbers = myArray.map(function(num,index,myArray){
            return num*num;
});
console.log(findSquareOfNumbers)


const array = [2, 3, 5, 10];
let multiply = array.reduce(function(inital,item){
    return inital*item;
},1);
console.log(multiply)


let sum_of_squares = myArray.map(function(num,index,myArray){
        return num*num;
}).reduce(function(initial,num){
        return initial*num
},1);
console.log(sum_of_squares)