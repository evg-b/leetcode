// Вы поднимаетесь по лестнице. nЧтобы достичь вершины, нужны шаги.
// Каждый раз можно либо подниматься, 1либо 2ступеньками. Какими разными способами вы можете подняться на вершину?

function climbStairs(n: number): number {
    if (n <= 2) {
        return n
    }
    let [a, b] = [1, 1]
    let c = 0
    for (let i = 3; i <= n; i++) {
        [a, b] = [a + b, a]
        c = a + b
    }
    return c
};

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
console.log(`1. ${climbStairs(2)} = 2`)

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
console.log(`2. ${climbStairs(3)} = 3`)
console.log(`3. ${climbStairs(4)} = 5`)
console.log(`4. ${climbStairs(5)} = 8`)
console.log(`5. ${climbStairs(8)} = 34`)
