// Учитывая непустой массив целых чисел nums, каждый элемент появляется дважды, кроме одного.Найди ту единственную.
// Вы должны реализовать решение с линейной сложностью времени выполнения и использовать только постоянное дополнительное пространство.

function singleNumber(nums: number[]): number {
    // O(n) | M(n)
    if (nums.length === 1) return nums[0]
    let map = new Map()
    nums.forEach((num => {
        if (map.has(num)) {
            map.delete(num)
        } else {
            map.set(num, num)
        }
    }))
    return Array.from(map.keys())[0]

    // решение спомощью битовой математики
    // O(n) | M(1)
    // let res = 0;
    // nums.forEach(num => {
    //     console.log(res ^ num)
    //     res = res ^ num;
    // });

    // return res;
};

// Input: nums = [2, 2, 1]
// Output: 1
console.log('1', singleNumber([2, 2, 1]), '1')

// Input: nums = [4, 1, 2, 1, 2]
// Output: 4
console.log('2', singleNumber([4, 1, 2, 1, 2]), '4')

// Input: nums = [1]
// Output: 1
console.log('3', singleNumber([1]), '1')