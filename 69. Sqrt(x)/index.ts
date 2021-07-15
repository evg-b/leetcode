// Учитывая неотрицательное целое число x, вычислите и верните квадратный корень из x .
// Поскольку тип возвращаемого значения является целым числом, десятичные цифры усекаются , и возвращается только целая часть результата.
// Примечание.  Вам не разрешается использовать какие-либо встроенные функции или операторы экспоненты, такие как pow(x, 0.5)или  x ** 0.5.

// Вавилоновский метод или как его еще называют метод Герона https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method
function mySqrt(x: number): number {
    let error = 0.00001;
    let s = x;
    while ((s - x / s) > error) {
        s = (s + x / s) / 2
    }
    return s | 0
};

// Input: x = 4
// Output: 2
console.log(`1. ${mySqrt(4)} = 2`)

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
console.log(`2. ${mySqrt(8)} = 2`)