let xTurn = true;
let gameOver = false;
function changeMark(buttonId) {
    if (gameOver) return;
    let currentMark = document.getElementById(buttonId).innerHTML;

    if (!currentMark) {
        if (xTurn) {
            document.getElementById(buttonId).innerHTML = "X";
            document.getElementById(buttonId).style.background = 'red';
            document.getElementById(buttonId).style.border = 'red';
            document.getElementById(buttonId).style.color = 'black';
            document.getElementById(buttonId).style.fontSize = '30px';
            document.getElementById(buttonId).style.fontWeight = 'bold';
        }
        else {
            document.getElementById(buttonId).innerHTML = "O";
            document.getElementById(buttonId).style.background = 'blue';
            document.getElementById(buttonId).style.border = 'blue';
            document.getElementById(buttonId).style.color = 'white';
            document.getElementById(buttonId).style.fontSize = '30px';
            document.getElementById(buttonId).style.fontWeight = 'bold';
        }

        xTurn = !xTurn;
        checkWin(); 
    }

}

function resetGame() {
    document.getElementById("a1").innerHTML = "";
    document.getElementById("a1").style.background = "";
    document.getElementById("a1").style.border = "";
    document.getElementById("a1").style.color = "";
    document.getElementById("a1").style.fontSize = "";
    document.getElementById("a1").style.fontWeight = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("b1").style.background = "";
    document.getElementById("b1").style.border = "";
    document.getElementById("b1").style.color = "";
    document.getElementById("b1").style.fontSize = "";
    document.getElementById("b1").style.fontWeight = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("c1").style.background = "";
    document.getElementById("c1").style.border = "";
    document.getElementById("c1").style.color = "";
    document.getElementById("c1").style.fontSize = "";
    document.getElementById("c1").style.fontWeight = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("a2").style.background = "";
    document.getElementById("a2").style.border = "";
    document.getElementById("a2").style.color = "";
    document.getElementById("a2").style.fontSize = "";
    document.getElementById("a2").style.fontWeight = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b2").style.background = "";
    document.getElementById("b2").style.border = "";
    document.getElementById("b2").style.color = "";
    document.getElementById("b2").style.fontSize = "";
    document.getElementById("b2").style.fontWeight = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c2").style.background = "";
    document.getElementById("c2").style.border = "";
    document.getElementById("c2").style.color = "";
    document.getElementById("c2").style.fontSize = "";
    document.getElementById("c2").style.fontWeight = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("a3").style.background = "";
    document.getElementById("a3").style.border = "";
    document.getElementById("a3").style.color = "";
    document.getElementById("a3").style.fontSize = "";
    document.getElementById("a3").style.fontWeight = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("b3").style.background = "";
    document.getElementById("b3").style.border = "";
    document.getElementById("b3").style.color = "";
    document.getElementById("b3").style.fontSize = "";
    document.getElementById("b3").style.fontWeight = "";
    document.getElementById("c3").innerHTML = "";
    document.getElementById("c3").style.background = "";
    document.getElementById("c3").style.border = "";
    document.getElementById("c3").style.color = "";
    document.getElementById("c3").style.fontSize = "";
    document.getElementById("c3").style.fontWeight = "";
    document.getElementById('checkWin').innerHTML = "";
}


function checkWin() {
    let outputString= "";

    let a1 = document.getElementById("a1").innerHTML;
    let b1 = document.getElementById("b1").innerHTML;
    let c1 = document.getElementById("c1").innerHTML;
    let a2 = document.getElementById("a2").innerHTML;
    let b2 = document.getElementById("b2").innerHTML;
    let c2 = document.getElementById("c2").innerHTML;
    let a3 = document.getElementById("a3").innerHTML;
    let b3 = document.getElementById("b3").innerHTML;
    let c3 = document.getElementById("c3").innerHTML;

    if (a1 == b1 && b1 == c1 && a1 == "X")
        outputString += '<br>Result: X is Win!';
    
    else if (a2 == b2 && b2 == c2 && a2 == "X") 
        outputString += '<br>Result: X is Win!';
    
    else if (a3 == b3 && b3 == c3 && a3 == "X") 
        outputString += '<br>Result: X is Win!';
    
    else if (a1 == a2 && a2 == a3 && a1 == "X") 
        outputString += '<br>Result: X is Win!';
    
    else if (b1 == b2 && b2 == b3 && b1 == "X")
        outputString += '<br>Result: X is Win!';
    
    else if (c1 == c2 && c2 == c3 && c1 == "X")
        outputString += '<br>Result: X is Win!';
    
    else if (a1 == b2 && b2 == c3 && a1 == "X") 
        outputString += '<br>Result: X is Win!';
    
    else if (a3 == b2 && b2 == c1 && a3 == "X") 
        outputString += '<br>Result: X is Win!';        

    else if (a1 == b1 && b1 == c1 && a1 == "O") 
        outputString += '<br>Result: O is Win!';
    
    else if (a2 == b2 && b2 == c2 && a2 == "O")
        outputString += '<br>Result: O is Win!';
    
    else if (a3 == b3 && b3 == c3 && a3 == "O")
        outputString += '<br>Result: O is Win!';
    
    else if (a1 == a2 && a2 == a3 && a1 == "O")
        outputString += '<br>Result: O is Win!';
    
    else if (b1 == b2 && b2 == b3 && b1 == "O")
        outputString += '<br>Result: O is Win!';
    
    else if (c1 == c2 && c2 == c3 && c1 == "O")
        outputString += '<br>Result: O is Win!';
    
    else if (a1 == b2 && b2 == c3 && a1 == "O")
        outputString += '<br>Result: O is Win!';
    
    else if (a3 == b2 && b2 == c1 && a3 == "O")
        outputString += '<br>Result: O is Win!';
        

    let allclicked = (a1 && b1 && c1 && a2 && b2 && c2 && a3 && b3 && c3);

    if (outputString == "" && allclicked) {
        outputString += '<br>Result: It is a Tie!';
    }

    
    
    document.getElementById('checkWin').innerHTML = outputString;

}