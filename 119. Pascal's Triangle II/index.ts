// Учитывая целое число rowIndex, верните rowIndexth (индексированный 0) строку треугольника Паскаля.
// В треугольнике Паскаля каждое число представляет собой сумму двух чисел прямо над ним, как показано:

function getRow(rowIndex: number): number[] {
    if (rowIndex === 0) return [1]
    let triangl: number[][] = []
    for (let i = 0; i <= rowIndex; i++) {
        if (!triangl.length) {
            triangl.push([1])
        } else {
            let res = triangl[i - 1].reduce<number[]>((prev, cur, index, arr) => {
                prev.push(cur + (arr[index - 1] || 0))
                if (index === arr.length - 1) {
                    prev.push(1)
                }
                return prev
            }, [])
            triangl.push(res)
        }
    }
    return triangl[rowIndex]
};

// Input: rowIndex = 3
// Output: [1, 3, 3, 1]
console.log('0', getRow(3), '[1, 3, 3, 1]')

// Input: rowIndex = 0
// Output: [1]
console.log('1', getRow(0), '[1]')

// Input: rowIndex = 1
// Output: [1,1]
console.log('2', getRow(1), '[1, 1]')