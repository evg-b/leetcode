// Для строки s найдите длину самой длинной подстроки без повторяющихся символов.

function lengthOfLongestSubstring(s: string): number {
    let max = 0
    if (s === '') return max
    let res = ''
    Array.from(s).forEach(n => {
        let index = res.indexOf(n)
        if (index !== -1) {
            max = Math.max(max, res.length)
            res = res.substring(index + 1)
        }
        res += n
    })
    max = Math.max(max, res.length)
    return max
};

// Input: s = "abcabcbb"
// Output: 3
console.log('1', lengthOfLongestSubstring("abcabcbb"), '3')

// Input: s = "bbbbb"
// Output: 1
console.log('2', lengthOfLongestSubstring("bbbbb"), '1')

// // Input: s = "pwwkew"
// // Output: 3
console.log('3', lengthOfLongestSubstring("pwwkew"), '3')

console.log('4', lengthOfLongestSubstring("aab"), '2')

console.log('5', lengthOfLongestSubstring("dvdf"), '3')