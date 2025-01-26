function darkMode() {
    document.getElementById('currentSetting').innerHTML = "Dark";
    document.getElementById('pageBody').style = "background-color: rgb(24, 24, 24); color: white;";
    document.getElementById('header').style = "background-color: black"
    document.getElementById('introduction').style = "background-color: rgb(24, 24, 24)";
    document.getElementById('JS').style = "background-color: black";
    document.getElementById('footer').style = "background-color: rgb(24, 24, 24)";
    document.getElementById('image').style = "border: 2px solid rgb(92, 92, 92)";
}

function lightMode() {
    document.getElementById('currentSetting').innerHTML = "Light";
    document.getElementById('pageBody').style = "background-color: white; color: black;";
    document.getElementById('header').style = "background-color: rgb(215, 214, 214)"
    document.getElementById('introduction').style = "background-color: white";
    document.getElementById('JS').style = "background-color: rgb(215, 214, 214)";
    document.getElementById('footer').style = "background-color: white";
    document.getElementById('image').style = "border: 2px solid rgb(215, 214, 214)";
}

function defaultMode() {
    document.getElementById('currentSetting').innerHTML = "Default";
    document.getElementById('pageBody').style = "background-color: rgb(211, 211, 210); color: black;";
    document.getElementById('header').style = "background-color: lightpink"
    document.getElementById('introduction').style = "background-color: rgb(211, 211, 210)";
    document.getElementById('JS').style = "background-color: lightpink";
    document.getElementById('footer').style = "background-color: rgb(211, 211, 210)";
    document.getElementById('image').style = "border: 2px solid palevioletred"
}

function perimeter() {
    let a = document.getElementById('aperimeter').value;
    let result = a * 4;

    document.getElementById('perimeterResult').innerHTML = result;
}

function area() {
    let a = document.getElementById('aarea').value;
    let result = a * a;

    document.getElementById('areaResult').innerHTML = result;
}

function volume() {
    let a = document.getElementById('avolume').value;
    let h = document.getElementById('h').value;
    let result = 1 / 3 * h * a * a;

    document.getElementById('volumeResult').innerHTML = result;
}