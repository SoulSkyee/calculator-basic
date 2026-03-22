let a = 0;
let b = 0;
let operator = "";

// const answerSection = document.querySelector(".answerSection")
const displayValue = document.querySelector(".answer");
const btnNumber = document.querySelectorAll(".btn-number");
const btnOperator = document.querySelectorAll(".btn-operator");
const btnResult = document.querySelector(".btn-result");
const btnReset = document.querySelector(".btn-clear");

// LEARN: test button click
// bikin func forEach untuk ambil semua button
btnNumber.forEach(tombol => {
    // tambahin event listener pada masing" tombol
    tombol.addEventListener('click', function () {
        if (displayValue.textContent === "0") {
            displayValue.textContent = "";
        }
        displayValue.textContent += tombol.textContent;
    });
});

//LEARN: btn operator 
btnOperator.forEach(operasi => {
    // tambahkan event listener pada masing" tombol
    operasi.addEventListener('click', function () {
        // 1. Ambil angka yang saat ini ada di layar (displayValue) dan simpan ke variabel 'a'.
        // 2. Simpan simbol operator yang diklik (operasi.textContent) ke variabel 'operator'.
        // 3. Kosongkan isi layar (displayValue.textContent = "") agar siap menerima input angka kedua.
        if (displayValue.textContent === "0" || displayValue.textContent === "") {
            return;
        }

        if (operator === "") {
            a = Number(displayValue.textContent);
            operator = operasi.textContent;
            displayValue.textContent = "";
        } else {
            b = Number(displayValue.textContent);
            let hasil = operate(operator, a, b);
            operator = operasi.textContent;
            displayValue.textContent = hasil;
            a = hasil;
            displayValue.textContent = "";
        }
    });
});

// LEARN: btn Reset
btnReset.addEventListener('click', function () {
    a = 0;
    b = 0;
    operator = "";
    displayValue.textContent = "0";
})

// LEARN: btn result
// tombol listener
btnResult.addEventListener('click', function () {
    b = Number(displayValue.textContent);
    let hasilAkhir = operate(operator, a, b);
    displayValue.textContent = hasilAkhir;
})


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Bego lu");
        return Number.NaN;
    }
    return a / b;
}

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b)
    }
    if (operator === "-") {
        return subtract(a, b)
    }
    if (operator === "*") {
        return multiply(a, b)
    }
    if (operator === "/") {
        return divide(a, b)
    }
    return Number.NaN;
}