let map = [];
let tile1 = null, tile2 = null;
let rows = 4, cols = 4;

const loadMap = () => {
    let maxPair = (rows * cols) / 2;
    let tileNum = [];

    for (let i = 1; i <= maxPair; i++){
        tileNum.push(i, i);
    }

    tileNum = shuffle(tileNum);

    map = [];
    let index = 0;
    for (let row = 0; row < rows; row++) {
        let newRow = [];
        for (let col = 0; col < cols; col++) {
            newRow.push(tileNum[index]);
            index++;
        }
        map.push(newRow);
    }
}

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const makeBoard = (rows= 4, cols=4) =>{
    let output = '<table>';
    for (let row = 0; row < rows; row++) {
        output += '<tr>';
        for (let col = 0; col < cols; col++) {
            output += '<td><button' +
                ' class="tile"' +
                ' id="' + row + '_' + col + '"' +
                ' onclick="process(' + row + ',' + col + ')">' +
                '</button></td>';  
        }
        output += '</tr>';
    }
    document.getElementById('gameBoard').innerHTML = output + '</table>';
};

const process = (row, col) => {
    let clicked_tile = document.getElementById(row + '_' + col);
    // Clicked tile not already contains data
    if (!Boolean(clicked_tile.innerHTML)){
        // Tile 1 not yet selected
        if (!tile1) {
            tile1 = clicked_tile;
            clicked_tile.innerHTML = map[row][col];
        }
        
        // Tile 2 not yet selected
        else if (!tile2) {
            tile2 = clicked_tile;
            clicked_tile.innerHTML = map[row][col];
            
            // TODO: Set timeout callback function
            setTimeout(checkMatch, 1000);
        }
    }
}


const checkMatch = () => {
    if (tile1.innerHTML == tile2.innerHTML) {
        tile1.hidden = true;
        tile2.hidden = true;
    }

    tile1.innerHTML = '';
    tile2.innerHTML = '';
    tile1 = tile2 = null;
}


const resetBoard = () => {
    loadMap();
    makeBoard();
};

