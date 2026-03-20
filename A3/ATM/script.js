let balance = 5000;
let isLoggedIn = false;

function login() {

    if (isLoggedIn) {
        alert("Already Logged In");
        return;
    }

    let pin = prompt("Enter PIN:");

    if (pin == "1234") {
        isLoggedIn = true;
        alert("Login Successful");
    }
    else {
        alert("Wrong PIN");
    }

}

function logout() {

    if (!isLoggedIn) {
        alert("You are not logged in");
        return;
    }

    isLoggedIn = false;
    alert("Logged Out Successfully");

}

function ensureLogin() {

    if (!isLoggedIn) {
        alert("Please Login First");
        login();
    }

    return isLoggedIn;
}

function checkBalance() {

    if (!ensureLogin()) return;

    alert("Balance = ₹ " + balance);
}

function deposit() {

    if (!ensureLogin()) return;

    let amt = prompt("Enter deposit amount:");

    if (amt == "" || isNaN(amt) || amt <= 0) {
        alert("Invalid Amount");
        return;
    }

    balance = balance + Number(amt);

    alert("Deposit Successful");
}

function withdraw() {

    if (!ensureLogin()) return;

    let amt = prompt("Enter withdraw amount:");

    if (amt == "" || isNaN(amt) || amt <= 0) {
        alert("Invalid Amount");
        return;
    }

    if (amt > balance) {
        alert("Insufficient Balance");
        return;
    }

    balance = balance - Number(amt);

    alert("Withdrawal Successful");
}