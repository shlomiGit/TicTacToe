// JavaScript source code

//// global variables ////

var activeCell
var cellsArray = new Array();
var player;
//var resultMessage = 'הניצחון של '


//// Initialize Functions ////

window.onload = function () {

    InitCellsArray();

    var btnNewGame = document.getElementById('newGame')
    btnNewGame.addEventListener("click", NewGame, false)
}

function InitCellsArray() {
    var board = document.getElementById('board')
    var rows = board.rows
    for (var i = 0; i < rows.length; i++) {
        for (var j = 0; j < 3; j++) {
            var cell = rows[i].cells[j];
            AddCellsEvents(cell);
            cellsArray.push(cell)
        }
    }
}

function NewGame() {

    for (var i = 0; i < cellsArray.length; i++) {
        cellsArray[i].innerHTML = "";
        AddCellsEvents(cellsArray[i]);
    }
    player = 'p1';
    var result = document.getElementById('result');
    result.style.display = 'none';
}

function AddCellsEvents(cell) {
    cell.addEventListener("mousedown", TurnInput, false);
    cell.addEventListener("mouseup", ResultCheck, false);
}

function RemoveCellsEvents(cell) {
    cell.removeEventListener("mousedown", TurnInput, false);
    cell.removeEventListener("mouseup", ResultCheck, false);
}

//// Game Functions ////

function TurnInput() {
    activeCell = this;

    if (player == 'p1' || player == null)
        activeCell.innerHTML = 'X'; //&#x25CB';
    else
        activeCell.innerHTML = 'O'; //'&#10060';
}

function SwitchTurns() {
    if (player == null || player == 'p1')
        player = 'p2';
    else
        player = 'p1';
}

function ResultCheck() {

    RemoveCellsEvents(activeCell);

    if (CheckRow() || CheckCol() || CheckDiagonal()) {
        ResultMessage('הניצחון של ' + GetResultMessage())
        for (var i = 0; i < cellsArray.length; i++)
            RemoveCellsEvents(cellsArray[i]);
    }
    else if (CheckFullBoard())
        ResultMessage("it's a tie")

    SwitchTurns();
}

function GetResultMessage() {
    var winner
    if (player == 'p1')
        winner = document.getElementById('p1').value != "" ? document.getElementById('p1').value : 'שחקן 1';
    else
        winner = document.getElementById('p2').value != "" ? document.getElementById('p2').value : 'שחקן 2';
    return winner;
}

function ResultMessage(message) {
    var result = document.getElementById('result')
    //result.innerHTML = unescape(encodeURIComponent(message))
    result.innerHTML = message
    document.getElementById('result').style.display = 'block';
}

//// End-Game Examination ////

function CheckRow() {

    var match = false;

    // get row
    var parentRow = activeCell.parentElement
    var rowCellsArray = parentRow.cells

    // check cells
    for (var i = 0; i < rowCellsArray.length; i++) {
        if (rowCellsArray[i].innerHTML != activeCell.innerHTML)
            return false;
        else
            match = true;
    }
    return match;
}

function CheckCol() {

    var cellIndex = activeCell.cellIndex;
    var colCellsArray = new Array();

    // get cells
    var board = document.getElementById('board')
    var rows = board.rows
    for (var i = 0; i < rows.length; i++)
        colCellsArray.push(rows[i].cells[cellIndex]);

    // check cells
    var match = false;
    for (var i = 0; i < colCellsArray.length; i++) {
        if (colCellsArray[i].innerHTML != activeCell.innerHTML)
            return false;
        else
            match = true;
    }

    return match;
}

function CheckCells(cell) {
    if (cell.innerHTML != activeCell.innerHTML)
        return false;
    else
        return true;
}

function CheckDiagonal() {
    if (activeCell.className.indexOf('cornerCell') == -1)
        return false;

    if (cellsArray[4].innerHTML != activeCell.innerHTML)
        return false;

    var rowIndex = (activeCell.parentElement.rowIndex - 2) * (-1);
    var cellIndex = (activeCell.cellIndex - 2) * (-1);
    var oppCell = document.getElementById('board').rows[rowIndex].cells[cellIndex];
    if (oppCell.innerHTML == activeCell.innerHTML)
        return true;

    return false;
}

function CheckFullBoard() {
    var fullBoard = false;
    for (var i = 0; i < cellsArray.length; i++) {
        if (cellsArray[i].innerHTML == "")
            return false;
        else
            fullBoard = true;
    }
    return fullBoard;
}