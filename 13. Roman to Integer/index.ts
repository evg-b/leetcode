// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

function romanToInt(s: string): number {
    let mapRome = new Map([
        ['I', 1],
        ['IV', 4],
        ['V', 5],
        ['IX', 9],
        ['X', 10],
        ['XL', 40],
        ['L', 50],
        ['XC', 90],
        ['C', 100],
        ['CD', 400],
        ['D', 500],
        ['CM', 900],
        ['M', 1000],
    ])
    let arrS = s.split('')
    let res = 0
    for (let i = 0; i < s.length; i++) {
        let pivot = mapRome.get(arrS[i])!
        let nextS = arrS[i + 1]
        if (nextS) {
            if (mapRome.has(arrS[i] + nextS)) {
                pivot = mapRome.get(arrS[i] + nextS)!
                i++
            }
        }
        res += pivot
    }
    return res
};



// Input: s = "III"
// Output: 3
console.log(`1. ${romanToInt("III")} = 3`)

// Input: s = "IV"
// Output: 4
console.log(`2. ${romanToInt("IV")} = 4`)

// Input: s = "IX"
// Output: 9
console.log(`3. ${romanToInt("IX")} = 9`)

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V = 5, III = 3.
console.log(`4. ${romanToInt("LVIII")} = 58`)

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
console.log(`5. ${romanToInt("MCMXCIV")} = 1994`)