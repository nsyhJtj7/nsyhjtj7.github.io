document.getElementById('form').addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted.")
    const password= document.getElementById('password').value;
    const username= document.getElementById('username').value;

    if (password.includes(username)) {
        event.preventDefault();
        alert("Your password cannot contain your username!")
    }

    sanitizeinput(event);
})

document.getElementById('username').addEventListener("input", function() {
    let username = this.value;

    const warning = [];

    if (username.length < 4 || username.length >8)
        warning.push("Your user name should be 4-8 characters.");

    if (/[!@#$%]/.test(username))
        warning.push("Your user name cannot have special character (!, @, #, $, %, etc.)");

    let output = "";

    if (warning.length > 0) {
        output = "<strong>Warning: </strong>";
        for (let i = 0; i < warning.length - 1; i++)
            output += warning[i] + ", ";
        output += warning[warning.length - 1];
    }

    document.getElementById('warning').innerHTML = output;
})

// TODO: Real-time custom validation
document.getElementById('password').addEventListener("input", function() {
    let password = this.value;

    const missing = [];

    if (password.length < 8)
    missing.push("8-character minimum");

    let hasLower = /[a-z]/.test(password);
    if (!hasLower)
        missing.push("lower-case letter");

    let hasUpper = /[A-Z]/.test(password);
    if (!hasUpper)
        missing.push("Upper-case letter");

    let hasNumber = /[0-9]/.test(password);
    if (!hasNumber)
        missing.push("number");

    let hasSpecial = /[!@#$%]/.test(password);
    if (!hasSpecial)
        missing.push("special character (!, @, #, $, %)");

    const username = document.getElementById('username').value;
    if (password.includes(username)) {
        missing.push("password cannot include username");
    }

    let output = "";

    if (missing.length > 0) {
        output = "<strong>Missing: </strong>";
        for (let i = 0; i < missing.length - 1; i++)
            output += missing[i] + ", ";
        output += missing[missing.length - 1];
    }

    let strength;
    let color;
    if (missing.length === 0) {
        strength = "strong";
        color = "green";
    }
    else if (missing.length < 3) {
        strength = "medium";
        color = "orange";
    }
    else {
        strength = "weak";
        color = "red";
    }

    output = "Password strength: <span style = 'color: " + color + "'>" +strength + "</span><br> " + output; 

    document.getElementById('passwordMessage').innerHTML = output;
});

function sanitization(input) {
    return input.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function sanitizeinput(event) {
    const inputs = ['name', 'phone', 'email', 'comment', 'username', 'password'];
    let sanitizedinput = {};

    inputs.forEach(id => {
        let element = document.getElementById(id);
        if (element) {
            sanitizedinput[id] = sanitization(element.value.trim());
            element.value = sanitizedinput[id];
        }
    });

    console.log("Sanitized Data:", sanitizedinput);

    document.getElementById("form").submit();
}

