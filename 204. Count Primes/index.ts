// Подсчитайте количество простых чисел меньше неотрицательного числа n.

function isPrime(n: number): boolean {
    let max = Math.sqrt(n);
    for (let i = 2; i <= max; i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}

function countPrimes(n: number): number {
    let count = 0
    if (n <= 2) {
        return count
    }
    for (let i = 2; i < n; i++) {
        isPrime(i) && count++
    }
    return count
}

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
console.log('1', countPrimes(10), '4')

// Input: n = 0
// Output: 0
console.log('2', countPrimes(0), '0')

// Input: n = 1
// Output: 0
console.log('3', countPrimes(1), '0')
console.log('4', countPrimes(2), '0')
console.log('5', countPrimes(3), '1')
console.log('6', countPrimes(499979), '41537')