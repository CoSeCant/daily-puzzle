//Variables for the timer
var sec = 0
var min = 0
var hr = 0
var timeStorage = [''] //Used to store the timer values
var timeStamps = "" //Records the value of the timer each second

//Variables used to detect when the puzzle is completed 
var givenSum = 0
var userSum = 0
var missingSum = 0


//Variables for the board and error counter
var numSelected = null;
var tileSelected = null;
var errors = 0;


//------------------------------------------------------------------------------

let sudoku = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  
  let sudoku2 = JSON.parse(JSON.stringify(sudoku));
  
  let changesMade = false;
  let fields = [];
  let counter = 0;
  let sudoku3;
  
  window.onload = function () {
    //generateRandomSudoku(25);
    //print_sudoku(sudoku3, "table1");
    //print_sudoku(sudoku, "table2");
  };
  
  // solves a sudoku
  function solveSudoku() {
    fill_possible_fields();
  
    changesMade = false;
    counter = 0;
  
    while (!sudoku_complete()) {
      counter++;
      test_rows_and_cols();
      test_blocks();
      test_possible_fields();
      if (!changesMade) {
        break;
      } else {
        changesMade = false;
      }
      if (counter === 100) {
        break;
      }
    }
  }
  
  // returns true if there are two equal numbers in the same row
  function duplicateNumberInRow(s, fieldY) {
    numbers = new Array();
    for (var i = 0; i < 9; i++) {
      if (s[i][fieldY] !== 0) {
        if (numbers.includes(s[i][fieldY])) {
          return true;
        } else {
          numbers.push(s[i][fieldY]);
        }
      }
    }
    return false;
  }
  
  // returns true if there are two equal numbers in the same col
  function duplicateNumberInCol(s, fieldX) {
    numbers = new Array();
    for (var i = 0; i < 9; i++) {
      if (s[fieldX][i] !== 0) {
        if (numbers.includes(s[fieldX][i])) {
          return true;
        } else {
          numbers.push(s[fieldX][i]);
        }
      }
    }
    return false;
  }
  
  // returns true if there are two equal numbers in the same box
  function duplicateNumberInBox(s, fieldX, fieldY) {
    boxX = Math.floor(fieldX / 3);
    boxY = Math.floor(fieldY / 3);
    numbers = new Array();
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        x = i + 3 * boxX;
        y = j + 3 * boxY;
        if (s[x][y] !== 0) {
          if (numbers.includes(s[x][y])) {
            return true;
          } else {
            numbers.push(s[x][y]);
          }
        }
      }
    }
    return false;
  }
  
  // returns true if there are two equal numbers in the same row, col or box
  function duplicateNumberExists(s, fieldX, fieldY) {
    if (duplicateNumberInRow(s, fieldY)) {
      return true;
    }
    if (duplicateNumberInCol(s, fieldX)) {
      return true;
    }
    if (duplicateNumberInBox(s, fieldX, fieldY)) {
      return true;
    }
    return false;
  }
  
  // generates a random sudoku with a given amount of numbers in it
  function generateRandomSudoku(numbers) {
    while (!sudoku_complete() || sudoku_invalid(sudoku)) {
      // new empty sudoku
      sudoku3 = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];
      sudoku = JSON.parse(JSON.stringify(sudoku3));
  
      // how many numbers are entered already?
      let numbersDone = 0;
  
      while (numbersDone < numbers) {
        let fieldX = Math.floor(Math.random() * 9);
        let fieldY = Math.floor(Math.random() * 9);
        let number = Math.floor(Math.random() * 9) + 1;
        //alert("" + fieldX + " " + fieldY + " " + number);
  
        if (sudoku3[fieldX][fieldY] === 0) {
          sudoku3[fieldX][fieldY] = number;
          if (duplicateNumberExists(sudoku3, fieldX, fieldY)) {
            sudoku3[fieldX][fieldY] = 0;
            continue;
          } else {
            numbersDone++;
          }
          //alert("" + numbersDone);
        }
      }
      sudoku = JSON.parse(JSON.stringify(sudoku3));
      solveSudoku();
    }
  }
  
  // fills the possible numbers for the fields
  function fill_possible_fields() {
    for (var i = 0; i < 9; i++) {
      fields[i] = [];
    }
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        fields[i][j] = [];
      }
    }
  
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        for (var k = 0; k < 9; k++) {
          fields[i][j][k] = k + 1;
        }
      }
    }
  }
  
  /*// show the sudoku as a table
  function print_sudoku(s, position) {
    var tbl = document.createElement("table");
    var tbdy = document.createElement("tbody");
    tbl.appendChild(tbdy);
    for (var i = 0; i < 9; i++) {
      var tr = document.createElement("tr");
      tbdy.appendChild(tr);
      for (var j = 0; j < 9; j++) {
        var td = document.createElement("td");
        td.appendChild(document.createTextNode("" + s[i][j]));
        if (s[i][j] === 0) {
          td.style.backgroundColor = "#777777";
        }
        tr.appendChild(td);
      }
    }
    document.getElementById(position).appendChild(tbl);
  }*/
  
  // tests the possible 9 numbers for a field, if only one is possible then it's entered to the field
  function test_possible_fields() {
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        if (sudoku[i][j] === 0) {
          var numbers = 0;
          var number = 0;
          for (var k = 0; k < 9; k++) {
            if (fields[i][j][k] !== 0) {
              number = k + 1;
              numbers++;
            }
          }
          if (numbers === 1) {
            sudoku[i][j] = number;
            changesMade = true;
          }
        }
      }
    }
  }
  
  // tests the rows and cols
  function test_rows_and_cols() {
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        if (sudoku[i][j] !== 0) {
          var number = sudoku[i][j];
          for (var k = 0; k < 9; k++) {
            if (sudoku[i][k] === 0) {
              if (fields[i][k][number - 1] !== 0) {
                changesMade = true;
              }
              fields[i][k][number - 1] = 0;
            }
          }
          var number = sudoku[i][j];
          for (var k = 0; k < 9; k++) {
            if (sudoku[k][j] === 0) {
              if (fields[k][j][number - 1] !== 0) {
                changesMade = true;
              }
              fields[k][j][number - 1] = 0;
            }
          }
        }
      }
    }
  }
  
  // tests the blocks
  function test_blocks() {
    for (var k = 0; k < 3; k++) {
      for (var l = 0; l < 3; l++) {
        for (var i = 0 + k * 3; i < 3 + k * 3; i++) {
          for (var j = 0 + l * 3; j < 3 + l * 3; j++) {
            if (sudoku[i][j] !== 0) {
              var number = sudoku[i][j];
              for (var a = 0 + k * 3; a < 3 + k * 3; a++) {
                for (var b = 0 + l * 3; b < 3 + l * 3; b++) {
                  if (sudoku[a][b] === 0) {
                    if (fields[a][b][number - 1] !== 0) {
                      changesMade = true;
                    }
                    fields[a][b][number - 1] = 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  
  // tests if a sudoku is complete and returns eiter true or false
  function sudoku_complete() {
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        if (sudoku[i][j] === 0) {
          return false;
        }
      }
    }
    return true;
  }
  
  //Tests if there are any duplicate numbers in a sudoku
  function sudoku_invalid(s) {
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        if (duplicateNumberExists(s, i, j)) {
          return true;
        }
      }
    }
    return false;
  }
  

//------------------------------------------------------------------------------
generateRandomSudoku(35);
console.log(sudoku3)
console.log(sudoku)

/*var board = [
    "007491605",
    "200060309",
    "000007010",
    "058600004",
    "003000090",
    "006200187",
    "904070002",
    "670830000",
    "810045000"
]*/

var board = sudoku3

/*var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763",
]*/

var solution = sudoku

var numSelectHistory = [9, 18, 27, 36, 45, 54, 63, 72, 81] //This array is used to store the number of times each number (1-9) is successfully placed on the board. This will allow me to incorporate the ability to indicate to the user when they have placed all of a number (Eg. 1) on the board. For instance, each time a 1 is added to the board, the array[0] will be reduced by 1. When array[0] reaches 0, this indicates that all of the 1s have successfully been placed on the board

function givenNumbers(num) {              //This function is used to determine how many of each number we are already given and subtract that number*(1-9) from the array so that we can properly detect once all of one number has been added to the board. For instance, if you are given fives 1s on the board, then this function will update the numSelectHistory array to reflect that you only need to place 4 more 1s to finish them. Therefore, numSelectHistory[0] = 4
  for (var i = 0; i < 9; i++) {
    if (board[i].includes(num)) {
      numSelectHistory[num - 1] -= num
    }
  }
}

for (var i = 0; i < 9; i++) {  //This for loop is used to efficiently run the givenNumbers function for each number (1 though 9)
  givenNumbers(i + 1)
}

console.log(numSelectHistory)

//Home Button Alert Function
function alertMessage() { //This function is used to alert the users when they click a button that leads them to a point of no return so that they can re-evaluate if they truely want to proceed
  var option = confirm("If u leave the page the timer will end and you will get a DNF (did not finish) for today's puzzle. Are you sure you would like to continue?")
  if (option == true) {
    document.getElementById("home-link").href = "./index.html"
  } else {
    return
  }
}

//Timer function
function timerCycle() {
    if (errors <= 2 && missingSum != userSum) {
        const timer = document.getElementById("stopwatch");
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec++;

        if(sec == 60) {
            sec = 0;
            min++;
        }
        if(min == 60) {
            min = 0;
            sec = 0;
            hr++;
        }
        if (hr == 24) {
            hr = 0;
        }
        
        timer.innerHTML = hr.toLocaleString(undefined, {minimumIntegerDigits:2}) + ":" + min.toLocaleString(undefined, {minimumIntegerDigits:2}) + ":" + sec.toLocaleString(undefined, {minimumIntegerDigits:2});
        
        timeStamps = timer.innerHTML
        timeStorage.push(timeStamps); //This adds the timestamps to the array and stores them
        if (timeStorage.length >= 2) { //This if statement is used to detect when the array stores more than 1 value and removes the oldest value added  
            timeStorage.shift(timeStorage) //This allows the only value stored in the array to be the most recent timestamp
        }
        console.log(timeStorage)//When the user reaches 3 errors, the time stops and is stored in the timeStorage variable
        console.log(missingSum, userSum)
    } else if (missingSum === userSum) { //This checks if the user has completed the puzzle successfully
        document.getElementById("board").remove();
        document.getElementById("digits").remove();
        document.getElementById("outcome").innerText = `Congratulations! You have successfully completed today's puzzle with ${errors} mistake(s) and a completion time of ${timeStorage[0]} Come back tomorrow!`
        //alert(`You have successfully finished today's puzzle with ${errors} mistake(s) and a completion time of ${timeStorage[0]}`)
    } else { //This gives the user a message if the failed the puzzle by commiting to many mistakes
        //alert(`You have made ${errors} mistakes and are no longer able to continue today's puzzle. Time spent was ${timeStorage[0]}`);
        document.getElementById("board").remove();
        document.getElementById("digits").remove();
        document.getElementById("outcome").innerText = `You have made ${errors} mistakes and are no longer able to continue today's puzzle. Time spent was ${timeStorage[0]} Come back tomorrow to try again!`
    }
}

//This is used to refresh the timer output on the screen
function initTimer() {
    timerCycle();
    window.setTimeout(initTimer, 1000)
}


function setGame() {
    //This loop creates the digits below the sudoku puzzle
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div"); /* Creates a div tag */
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber); //This checks to see if the user clicks on a digit. If so, the selectNumber() function is executed
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }


    //This loop creates the 9x9 board
    for (let y = 0; y < 9; y++) { // This first loop helps create the rows
        for (let x = 0; x < 9; x++) { //This nested loop helps to create the columns
            let tile = document.createElement("div");
            tile.id = y.toString() + "-" + x.toString();
            if (board[y][x] != 0) { //This if statement is used to fill the board with the numbers, and exclude the 0s
                tile.innerText = board[y][x];
                givenSum = givenSum + parseInt(tile.innerText) //This calculates the sum of the numbers given on the board
                console.log(givenSum)
                tile.classList.add("starting-tiles") //Adds gray background to starting tiles
            }
            missingSum = 405 - givenSum //This calculates the sum of the numbers not given on the board since all puzzles add up to 405
            console.log(missingSum)
            if (y == 2 || y == 5) { //This is used to add the horizontal line between 3x3 squares 
                tile.classList.add("horizontal-border");
            }
            if (x == 2 || x == 5) { //This is used to add the vertical line between 3x3 squares
                tile.classList.add("vertical-border");
            }
            tile.addEventListener("click", selectTile) //Goes to function if you click on tile
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
} 

function selectNumber() {
    if (numSelected != null) { //This if statement removes the styling after clicking on a new digit
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() { //This function allows you to add the selected digit to a tile on the sudoku board
    if (numSelected) {
        if (this.innerText != "") { //This if statement checks to see if the tile you are trying to add a digit to is already filled
            return; //If there already is a digit in the tile, we exit the function here
        }

        //This is used to split the board co-ordinates which are forged on line 49 (now on line number 104 I think)
        let coords = this.id.split("-"); //This creates an array containing the y and x coordinates on the board --> ["y", "x"]
        let y = parseInt(coords[0]);
        let x = parseInt(coords[1]);

        if (solution[y][x] == numSelected.id) { //This checks to see if what digit you are adding to the board is correct
            this.innerText = numSelected.id;
            numSelectHistory[numSelected.id - 1] -= numSelected.id //This calculation updates the array so that we know when a number (1-9) was successfully added to the board
            // This if statement is used to check whether or not all of a particular number has been added to the board            
            if (numSelectHistory[numSelected.id - 1] == 0) { //If all of a number has been added to the board, then that number is removed from the possible digits below the board (this makes the game more user friendly)
              var element = document.getElementById(numSelected.id)
              element.parentNode.removeChild(element)
            }
            userSum = userSum + parseInt(numSelected.id) //This is used to sum all the numbers that the user successfully inputs into the board
            console.log(userSum)
        } else {
            errors += 1;
            document.getElementById("errors").innerText = errors; //Errors increases by 1 if incorrect placement
        }
    } 
}

