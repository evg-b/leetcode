// Учитывая строку s, содержащую только символы '(', ')', '{', '}', '[' и ']', определите, действительна ли входная строка.

// Строка ввода действительна, если:
//   Открытые скобки должны закрываться скобками того же типа.
//   Открытые скобки должны быть закрыты в правильном порядке.

// function isValid(s: string): boolean {
//     if (s.length < 2) {
//         return false
//     }
//     console.log('start s:', s)
//     let [a, b, c] = [0, 0, 0]
//     let UnExpected = new Map([['(', ']}'], ['{', ')]'], ['[', ')}']])
//     for (let i = 0; i < s.length; i++) {
//         if (UnExpected.get(s[i - 1])?.includes(s[i])) {
//             return false
//         }
//         switch (s[i]) {
//             case '(':
//                 a++
//                 break
//             case ')':
//                 a = a > 0 ? a - 1 : a + 2
//                 break
//             case '{':
//                 b++
//                 break
//             case '}':
//                 b = b > 0 ? b - 1 : b + 2
//                 break
//             case '[':
//                 c++
//                 break
//             case ']':
//                 c = c > 0 ? c - 1 : c + 2
//                 break
//         }
//     }
//     console.log('a, b, c:', a, b, c)
//     if (Math.abs(a) + Math.abs(b) + Math.abs(c) === 0) {
//         return true
//     } else {
//         return false
//     }
// };
function isValid(s: string): boolean {
    console.log('start s:', s)
    let Expected = '({['
    let debtExpected = new Map([['(', ')'], ['{', '}'], ['[', ']']])
    let debt = []
    for (let i = 0; i < s.length; i++) {
        if (Expected.includes(s[i])) {
            debt.unshift(debtExpected.get(s[i]))
        } else {
            if (debt.length && s[i] === debt[0]) {
                debt.shift()
            } else {
                return false
            }
        }
    }
    return debt.length === 0
};

let s = "("
let ans = false
console.log(`0. ${isValid(s)} = ${ans}\n`)

s = "()"
ans = true
console.log(`1. ${isValid(s)} = ${ans}\n`)

s = "()[]{}"
ans = true
console.log(`2. ${isValid(s)} = ${ans}\n`)

s = "(]"
ans = false
console.log(`3. ${isValid(s)} = ${ans}\n`)

s = "([)]"
ans = false
console.log(`4. ${isValid(s)} = ${ans}\n`)

s = "{[]}"
ans = true
console.log(`5. ${isValid(s)} = ${ans}\n`)

s = "(("
ans = false
console.log(`6. ${isValid(s)} = ${ans}\n`)

s = "){"
ans = false
console.log(`7. ${isValid(s)} = ${ans}\n`)

s = "(){}}{"
ans = false
console.log(`8. ${isValid(s)} = ${ans}\n`)

s = ")("
ans = false
console.log(`9. ${isValid(s)} = ${ans}\n`)

s = ")()"
ans = false
console.log(`10. ${isValid(s)} = ${ans}\n`)

s = "[([]])"
ans = false
console.log(`11. ${isValid(s)} = ${ans}\n`)

