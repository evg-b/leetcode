// Учитывая целое число numRows, верните первые numRows треугольника Паскаля.
// В треугольнике Паскаля каждое число представляет собой сумму двух чисел прямо над ним, как показано:

function generate(numRows: number): number[][] {
    if (numRows < 1) return []
    let triangl: number[][] = []
    for (let i = 0; i < numRows; i++) {
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
    return triangl
};

// Input: numRows = 5
// Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
console.log('0', generate(5), '[[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]')

// Input: numRows = 1
// Output: [[1]]
console.log('1', generate(1), '[[1]]')

console.log('2', generate(2), '[[1],[1,1]]')

console.log('3', generate(3), '[[1],[1,1],[1,2,1]]')