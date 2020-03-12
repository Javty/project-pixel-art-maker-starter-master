// Select color input
var colorPickers = document.querySelector("#colorPicker");
// Select size input
var rows = document.querySelector("#inputHeight");
var columns = document.querySelector("#inputWidth");
// Select the grid
var gridBody = document.querySelector("#pixelCanvas");
let tableBody = document.createElement("tbody");
gridBody.appendChild(tableBody);

// makeGridfunction
function makeGrid(rows, columns) {
  let tableBody = document.createElement("tbody");
  gridBody.appendChild(tableBody);
// Create a gridBody
  for (var i= 0; i<rows.value; i++) {
    const tr = document.createElement("tr");
    for (var j=0; j<columns.value; j++) {
      const td = document.createElement("td");
      tr.appendChild(td);
      td.addEventListener("click", function(colorbackground){
        td.style.backgroundColor = colorPickers.value;
      });
    }
    tableBody.appendChild(tr);
  }
};

//Reset function
function resetGrid() {
  let tableBody = document.querySelector("tbody");
  tableBody.remove()
};

// When size is submitted by the user, call makeGrid()
form = document.querySelector("#sizePicker")
form.addEventListener("submit", function(event) {
    event.preventDefault();
    resetGrid();
    makeGrid(rows,columns)
});
