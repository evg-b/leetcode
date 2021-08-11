function twoSum(numbers: number[], target: number): number[] {
    let diffMap = new Map<number, number[]>()
    numbers.forEach((num, index) => {
        let dif = target - num
        if (diffMap.has(dif)) {
            diffMap.set(dif, [...diffMap.get(dif)!, index])
        } else {
            diffMap.set(dif, [index])
        }
    })
    console.log('diffMap:', diffMap)
    let res: number[] = []
    for (let i = 0; i < numbers.length; i++) {
        if (diffMap.has(numbers[i])) {
            if (diffMap.get(numbers[i])!.length != 1) {
                res = [diffMap.get(numbers[i])![0] + 1, diffMap.get(numbers[i])![1] + 1]
            } else {
                let d = target - numbers[i]
                console.log('d:', d, diffMap.get(d))
                res = [diffMap.get(d)![0] + 1, diffMap.get(numbers[i])![0] + 1]
            }
            break
        }
    }

    return res
};

// Input: numbers = [2, 7, 11, 15], target = 9
// Output: [1, 2]
console.log('1', twoSum([2, 7, 11, 15], 9), '[1, 2]')

// Input: numbers = [2, 3, 4], target = 6
// Output: [1, 3]
// console.log('2', twoSum([2, 3, 4], 6), '[1, 3]')

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// console.log('3', twoSum([-1, 0], -1), '[1, 2]')

// console.log('4', twoSum([2, 2, 3], 4), '[0, 1]')
// console.log('5', twoSum([0, 0, 3, 4], 0), '[1, 2]')

// более элегантное решение
// const memo = new Map()
// for(let i = 0;i<numbers.length;i++) {
//     let key = numbers[i]
//     if(memo.has(key)) {
//         return [memo.get(key)+1,i+1]
//     }

//     key = target - key;
//     memo.set(key,i);
// }
// return [0,0]