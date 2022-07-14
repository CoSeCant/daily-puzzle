const images = [
    "./images/sudoku-board.png",
    "./images/sudoku-timer.png",
    "./images/sudoku-mistake.png",
    "./images/sudoku-grid.png",
    "./images/sudoku-numbers.png",
    "./images/sudoku-clock.png",
    "./images/sudoku-home.png"]

function changeImg(element, source) {
    buttonClicked = element
    if (buttonClicked = "timer-location") {
        document.getElementById("changed-image").setAttribute('src', images[source])
    }
}
