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

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763",
]

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
        alert(`You have successfully finished today's puzzle with ${errors} mistake(s) and a completion time of ${timeStorage[0]}`)
    } else { //This gives the user a message if the failed the puzzle by commiting to many mistakes
        alert(`You have made ${errors} mistakes and are no longer able to continue today's puzzle. Time spent was ${timeStorage[0]}`);
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
            if (board[y][x] != "-") { //This if statement is used to fill the board will the numbers, and exclude the "-"
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

        //This is used to split the board co-ordinates which are forged on line 49
        let coords = this.id.split("-"); //This creates an array containing the y and x coordinates on the board --> ["y", "x"]
        let y = parseInt(coords[0]);
        let x = parseInt(coords[1]);

        if (solution[y][x] == numSelected.id) { //This checks to see if what digit you are adding to the board is correct
            this.innerText = numSelected.id;
            userSum = userSum + parseInt(numSelected.id) //This is used to sum all the numbers that the user successfully inputs into the board
            console.log(userSum)
        } else {
            errors += 1;
            document.getElementById("errors").innerText = errors; //Errors increases by 1 if incorrect placement
        }
    } 
}

