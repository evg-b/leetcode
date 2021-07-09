// Напишите функцию для поиска самой длинной строки общего префикса среди массива строк.
// Если общего префикса нет, вернуть пустую строку «».

function longestCommonPrefix(strs: string[]): string {
    let prefix = ''
    for (let i = 0; i < strs[0].length; i++) {
        let nextWord = strs[0][i]
        for (let j = 0; j < strs.length; j++) {
            if (nextWord !== strs[j][i]) {
                return prefix
            }
        }
        prefix += nextWord
    }
    return prefix
};

// Input: strs = ["flower", "flow", "flight"]
// Output: "fl"
console.log(`1. ${longestCommonPrefix(["flower", "flow", "flight"])} = fl`)

// Input: strs = ["dog", "racecar", "car"]
// Output: ""
// Explanation: Среди входных строк нет общего префикса.
console.log(`2. ${longestCommonPrefix(["dog", "racecar", "car"])} = ''`)

// Input: strs = ["dog", "daggi", "di"]
// Output: "d"
// Explanation: Среди входных строк нет общего префикса.
console.log(`3. ${longestCommonPrefix(["dog", "daggi", "di"])} = d`)