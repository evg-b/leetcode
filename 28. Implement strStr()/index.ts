function strStr(haystack: string, needle: string): number {
    if (!needle.length) {
        return 0
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.slice(i, needle.length + i) === needle) {
            return i
        }
    }
    return -1
};

// Input: haystack = "hello", needle = "ll"
// Output: 2
console.log(`1. ${strStr("hello", "ll")} = 2\n`)

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
console.log(`2. ${strStr("aaaaa", "bba")} = -1\n`)

// Input: haystack = "", needle = ""
// Output: 0
console.log(`3. ${strStr("", "")} = 0\n`)