// Учитывая непустой массив десятичных цифр, представляющих неотрицательное целое число, увеличьте единицу до целого числа.
// Цифры хранятся таким образом, что наиболее значимая цифра находится в начале списка, а каждый элемент в массиве содержит одну цифру.
// Вы можете предположить, что целое число не содержит нуля в начале, кроме самого числа 0.

function plusOne(digits: number[]): number[] {
    let bInt = BigInt(digits.join('')) + BigInt(1)
    return String(bInt).split('').map(n => +n)
};

// Input: digits = [1, 2, 3]
// Output: [1, 2, 4]
// Explanation: The array represents the integer 123.
console.log(`1. ${plusOne([1, 2, 3])} = [1, 2, 4]`)

// Input: digits = [4, 3, 2, 1]
// Output: [4, 3, 2, 2]
// Explanation: The array represents the integer 4321.
console.log(`2. ${plusOne([4, 3, 2, 1])} = [4, 3, 2, 2]`)

// Input: digits = [0]
// Output: [1]
console.log(`3. ${plusOne([0])} = [1]`)

// Input: digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
console.log(`4. ${plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])} = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]`)