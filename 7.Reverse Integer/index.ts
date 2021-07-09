// Для 32-битного целого числа x со знаком вернуть x с перевернутыми цифрами. Если реверсирование x приводит к тому, что значение выходит за пределы диапазона 32-битных целых чисел со знаком [-231, 231 - 1], возвращается 0.
// Предположим, что среда не позволяет хранить 64-разрядные целые числа (со знаком или без знака).

function reverse(x: number): number {
    let isNegative = Math.sign(x)
    x = Math.abs(x)
    let arrInt = Array.from(String(x))
    let resReverseInt = Number(arrInt.reverse().join(''))
    if (resReverseInt > 0x7fffffff) {
        return 0
    }
    return resReverseInt * isNegative
};

// Input: x = 123
// Output: 321
console.log(`1. ${reverse(123)} = 321`)

// Input: x = -123
// Output: -321
console.log(`2. ${reverse(-123)} = -321`)

// Input: x = 120
// Output: 21
console.log(`3. ${reverse(120)} = 21`)

// Input: x = 0
// Output: 0
console.log(`4. ${reverse(0)} = 0`)

// Input: x = 1534236469
// Output: 0
console.log(`4. ${reverse(1534236469)} = 0`)