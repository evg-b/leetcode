// Учитывая массив чисел размера n, верните элемент большинства.

// Элемент большинства - это элемент, который встречается более ⌊n / 2⌋ раз.Вы можете предположить, что большинство элементов всегда существует в массиве.

// O(n) M(n/2)
function majorityElement(nums: number[]): number {
    let mapNums: { [key: string]: number } = {}

    nums.forEach(num => {
        mapNums[num] = mapNums[num] + 1 || 1
    })
    let res = Object.keys(mapNums).sort((a, b) => mapNums[b] - mapNums[a])
    return Number(res[0])
};

// Boyer-Moore O(n) M(1)
// let count = 0;
// let candidate:number = 0;

// nums.forEach(num => {
//     if (count == 0) {
//         candidate = num;
//     }
//     count += (num == candidate) ? 1 : -1;
// })
// return candidate;

// Input: nums = [3, 2, 3]
// Output: 3
console.log('1', majorityElement([3, 2, 3]), '3')

// Input: nums = [2, 2, 1, 1, 1, 2, 2]
// Output: 2
console.log('2', majorityElement([2, 2, 1, 1, 1, 2, 2]), '2')