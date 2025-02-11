let value = [];

function addValue(){
    let input = document.getElementById("valueInput").value;
    let num = parseFloat(input);

    if (isNaN(num)) {
        alert("Please enter a valid number.")
        return;
    }

    document.getElementById("valueInput").value = ""
    value.push(num);
    display();
    mean();
}

function removeValue(){
    let input = document.getElementById("valueInput").value;
    let num = parseFloat(input);

    if (isNaN(num)) {
        alert("Please enter a valid number.")
        return;
    }

    let index = value.indexOf(num)
    if (index !== -1){
        value.splice(index, 1);
        display();
        mean();
    }

    else {
        alert(num + " is not found.");
    }

    document.getElementById("valueInput").value = ""
}

function mean() {
    let sum = 0;

    if (value.length >= 1) {
        for (let i = 0; i < value.length; i++){
            sum += value[i];
        }
    }

    let mean = sum / value.length;

    document.getElementById("currentMean").innerHTML = "<br>Current Mean:";
    document.getElementById("mean").innerHTML = mean.toFixed(2);
}

function display(){
    document.getElementById("currentDataset").innerHTML = "<br>Current Dataset:";
    document.getElementById("currentValue").innerHTML = value.join(", ");
}

