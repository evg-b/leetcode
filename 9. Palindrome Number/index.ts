// Дано целое число x, вернуть истину, если x является целым числом палиндрома.
// Целое число является палиндромом, когда оно читается так же, как и вперед, и назад. Например, 121 - это палиндром, а 123 - нет.

function isPalindrome(x: number): boolean {
    return String(x) === String(x).split('').reverse().join('')
};

// Input: x = 121
// Output: true
console.log(`1. ${isPalindrome(121)} = true`)

// Input: x = -121
// Output: false
// Explanation: Слева направо он читает - 121. Справа налево становится 121 -. Следовательно, это не палиндром.
console.log(`2. ${isPalindrome(-121)} = false`)

// Input: x = 10
// Output: false
// Explanation: 01 читается справа налево, поэтому это не палиндром.
console.log(`3. ${isPalindrome(10)} = false`)

// Input: x = -101
// Output: false
console.log(`4. ${isPalindrome(-101)} = false`)