const columnNumbers0 = [1,2,3,4,5,6,7,8,9]
const columnNumbers1 = [1,2,3,4,5,6,7,8,9]
const columnNumbers2 = [1,2,3,4,5,6,7,8,9]
const columnNumbers3 = [1,2,3,4,5,6,7,8,9]
const columnNumbers4 = [1,2,3,4,5,6,7,8,9]
const columnNumbers5 = [1,2,3,4,5,6,7,8,9]
const columnNumbers6 = [1,2,3,4,5,6,7,8,9]
const columnNumbers7 = [1,2,3,4,5,6,7,8,9]
const columnNumbers8 = [1,2,3,4,5,6,7,8,9]

const solution = []
var numbers = []

//number added to each row must be taken from one of the remaining respective column numbers
//we will still use the 'if(numbers.indexOf(candidateInt) === -1)' to ensure no duplicate number is used in each row

function columnNumbers(column) {
    if (column == 0) {
        return columnNumbers0
    } else if (column == 1) {
        return columnNumbers1
    } else if (column == 2) {
        return columnNumbers2
    } else if (column == 3) {
        return columnNumbers3
    } else if (column == 4) {
        return columnNumbers4
    } else if (column == 5) {
        return columnNumbers5
    } else if (column == 6) {
        return columnNumbers6 
    } else if (column == 7) {
        return columnNumbers7
    } else if (column == 8) {
        return columnNumbers8
    }
}


function rowGeneration() {
    for (let i = 0; i < 3; i++) { //generates the number of rows needed (eg. if i < 3, this will generate 3 unique rows)
        while(numbers.length < 9) {
            var randomInt = columnNumbers(numbers.length)[~~(Math.random() * columnNumbers(numbers.length).length)]
            if(numbers.indexOf(randomInt) === -1){
                var index = columnNumbers(numbers.length).indexOf(randomInt)
                columnNumbers(numbers.length).splice(index, 1)
                numbers.push(randomInt)
            }
        }
        solution.push(numbers)
        numbers = []
        randomInt = null
        index = null
    }
}

rowGeneration()

console.log(solution)
console.log(columnNumbers0)
console.log(columnNumbers1)
console.log(columnNumbers2)
console.log(columnNumbers3)
console.log(columnNumbers4)
console.log(columnNumbers5)
console.log(columnNumbers6)
console.log(columnNumbers7)
console.log(columnNumbers8)