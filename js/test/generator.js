const given = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
]

const solution = []

var numbers = []

/*const numberOptions = [1,2,3,4,5,6,7,8,9] 

var checker */

/*var column1 = []
var column2 = []
var column3 = []
var column4 = []
var column5 = []
var column6 = []
var column7 = []
var column8 = []
var column9 = []*/


function firstRowGeneration() {
    while(numbers.length < 9) {
        var candidateInt = Math.floor(Math.random() * 9) + 1
        if(numbers.indexOf(candidateInt) === -1){
            numbers.push(candidateInt)
        }
    }
    solution.push(numbers)
    numbers = []
return(numbers)
}

/*function rowGeneration(rowNumber) {
    while(numbers.length < 9) {
        var randomInt = numberOptions[~~(Math.random() * numberOptions.length)]
        if (rowNumber == 1) {
            checker = randomInt != solution[0][numbers.length]
        }
        else if (rowNumber == 2) {
            checker = randomInt != solution[0][numbers.length] && randomInt != solution[1][numbers.length]
        }
        for (let i = 0; i < rowNumber; i++) {
            if(checker){
                numbers.push(randomInt) 
                var index = numberOptions.indexOf(randomInt)
                numberOptions.splice(index, 1)
            }
        } console.log(numberOptions, randomInt)
            
    }
    solution.push(numbers)
    numbers = []
return(numbers)
}

rowGeneration(1)
rowGeneration(2)
rowGeneration(3)
rowGeneration(4)
rowGeneration(5)
rowGeneration(6)
rowGeneration(7)
rowGeneration(8)*/  //This doesn't seem to work (attempt at making a single function)


function secondRowGeneration() {
    while(numbers.length < 9) {
        var randomInt = Math.floor(Math.random() * 9) + 1
        if (numbers.indexOf(randomInt) === -1 && randomInt != solution[0][numbers.length]) {
            numbers.push(randomInt)
        } 
    }
    solution.push(numbers)
    numbers = []
return numbers
}

function thirdRowGeneration() {
    while(numbers.length < 9) {
        var randomInt = Math.floor(Math.random() * 9) + 1
        if (numbers.indexOf(randomInt) === -1 && randomInt != solution[0][numbers.length] && randomInt != solution[1][numbers.length]) {
            numbers.push(randomInt)
        } 
    }
    solution.push(numbers)
    numbers = []
return numbers
}

function fourthRowGeneration() {
    while(numbers.length < 9) {
        var randomInt = Math.floor(Math.random() * 9) + 1
        if (numbers.indexOf(randomInt) === -1 && randomInt != solution[0][numbers.length] && randomInt != solution[1][numbers.length] && randomInt != solution[2][numbers.length]) {
            numbers.push(randomInt)
        } 
    }
    solution.push(numbers)
    numbers = []
return numbers
}

function fifthRowGeneration() {
    while(numbers.length < 9) {
        var randomInt = Math.floor(Math.random() * 9) + 1
        if (numbers.indexOf(randomInt) === -1 && randomInt != solution[0][numbers.length] && randomInt != solution[1][numbers.length] && randomInt != solution[2][numbers.length] && randomInt != solution[3][numbers.length]) {
            numbers.push(randomInt)
        }
    }
    solution.push(numbers)
    numbers = []
return numbers
}

function sixthRowGeneration() {
    while(numbers.length < 9) {
        var randomInt = Math.floor(Math.random() * 9) + 1
        if (numbers.indexOf(randomInt) === -1 && randomInt != solution[0][numbers.length] && randomInt != solution[1][numbers.length] && randomInt != solution[2][numbers.length] && randomInt != solution[3][numbers.length] && randomInt != solution[4][numbers.length]) {
            numbers.push(randomInt)
        }
    }
    solution.push(numbers)
    numbers = []
return numbers
}

function seventhRowGeneration() {
    while(numbers.length < 9) {
        var randomInt = Math.floor(Math.random() * 9) + 1
        if (numbers.indexOf(randomInt) === -1 && randomInt != solution[0][numbers.length] && randomInt != solution[1][numbers.length] && randomInt != solution[2][numbers.length] && randomInt != solution[3][numbers.length] && randomInt != solution[4][numbers.length] && randomInt != solution[5][numbers.length]) {
            numbers.push(randomInt)
        }
    }
    solution.push(numbers)
    numbers = []
return numbers
}

function eighthRowGeneration() {
    while(numbers.length < 9) {
        var randomInt = Math.floor(Math.random() * 9) + 1
        if (numbers.indexOf(randomInt) === -1 && randomInt != solution[0][numbers.length] && randomInt != solution[1][numbers.length] && randomInt != solution[2][numbers.length] && randomInt != solution[3][numbers.length] && randomInt != solution[4][numbers.length] && randomInt != solution[5][numbers.length] && randomInt != solution[6][numbers.length]) {
            numbers.push(randomInt)
        }
    }
    solution.push(numbers)
    numbers = []
return numbers
}

function ninthRowGeneration() {
    while(numbers.length < 9) {
        var randomInt = Math.floor(Math.random() * 9) + 1
        if (numbers.indexOf(randomInt) === -1 && randomInt != solution[0][numbers.length] && randomInt != solution[1][numbers.length] && randomInt != solution[2][numbers.length] && randomInt != solution[3][numbers.length] && randomInt != solution[4][numbers.length] && randomInt != solution[5][numbers.length] && randomInt != solution[6][numbers.length] && randomInt != solution[7][numbers.length]) {
            numbers.push(randomInt)
        }
    }
    solution.push(numbers)
    numbers = []
return numbers
} 

/*firstRowGeneration()
secondRowGeneration()
thirdRowGeneration()
fourthRowGeneration()
fifthRowGeneration()
sixthRowGeneration()
seventhRowGeneration()
eighthRowGeneration()
ninthRowGeneration()*/

console.log(solution)





/*for (let i = 0; i < 9; i++) {
    firstRowGeneration()
    if (solution[0][i] == solution[i+1][i]) {
        solution[i+1] = []
        break
    } */
/*
    column1.push(solution[i][0])
    column2.push(solution[i][1])
    column3.push(solution[i][2])
    column4.push(solution[i][3])
    column5.push(solution[i][4])
    column6.push(solution[i][5])
    column7.push(solution[i][6])
    column8.push(solution[i][7])
    column9.push(solution[i][8])
} */


//console.log(solution)
//console.log(column1)
//console.log(column2)
//console.log(column3)
//console.log(column4)
//console.log(column5)
//console.log(column6)
//console.log(column7)
//console.log(column8)
//console.log(column9)




/*const set = new Set()

function rowGeneration() {
    while (set.size < 9) {
        set.add(Math.floor(Math.random() * 9) + 1)
    }
    return set
}

rowGeneration(9,9)
solution.push(set)
console.log(solution) 
var ree = [...set][0]
console.log(ree) */
