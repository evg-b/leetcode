// Если строка sсостоит из нескольких слов, разделенных пробелами, верните длину последнего слова в строке. Если последнее слово не существует, вернитесь0 .
// Слово является максимальной подстрокой , состоящей только из символов без пробелов.

function lengthOfLastWord(s: string): number {
    let strArr = s.trim().split(' ')
    let lastLen = strArr[strArr.length - 1].length
    console.log("last:", lastLen)
    return lastLen
};

// Input: s = "Hello World"
// Output: 5
console.log(`1. ${lengthOfLastWord("Hello World")} =5`)

// Input: s = " "
// Output: 0
console.log(`2. ${lengthOfLastWord(" ")} = 0`)

// Input: s = "a "
// Output: 0
console.log(`3. ${lengthOfLastWord("a ")} = 1`)