let history = []; // History store karne ke liye array

function vibratePhone() {
    if (navigator.vibrate) navigator.vibrate(50);
}

// 1. Theme Toggle
function toggleTheme() {
    vibratePhone();
    document.body.classList.toggle("light-mode");
    const btn = document.getElementById("theme-btn");
    btn.innerText = document.body.classList.contains("light-mode") ? "Dark Mode" : "Light Mode";
}

// 2. Calculation with History
function calculate() {
    const display = document.getElementById("display");
    try {
        if (display.value === "") return;
        let expression = display.value;
        let result = eval(expression);
        
        // History Array mein add karna
        history.push(`${expression} = ${result}`);
        if (history.length > 3) history.shift(); // Sirf top 3 dikhao
        updateHistory();
        
        display.value = result;
        vibratePhone(); //

        if (typeof confetti === 'function') {
            confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        }
    } catch (e) {
        display.value = "Error";
    }
}

function updateHistory() {
    const list = document.getElementById("history-list");
    if(list) {
        list.innerHTML = history.map(item => `<li>${item}</li>`).join('');
    }
}

// 3. History Update Function
function updateHistory() {
    const historyList = document.getElementById("history-list");
    if (historyList) {
        historyList.innerHTML = history.map(item => `<li>${item}</li>`).join('');
    }
}

function clearHistory() {
    history = [];
    updateHistory();
    vibratePhone();
}

// Baaki functions (Pie, Square, etc.) pehle jaise hi rakho...
function appendToDisplay(input) { document.getElementById("display").value += input; vibratePhone(); }
function clearDisplay() { document.getElementById("display").value = ""; vibratePhone(); }
function deleteLast() { let d = document.getElementById("display"); d.value = d.value.slice(0, -1); vibratePhone(); }
function appendPie() { document.getElementById("display").value += "3.1415"; vibratePhone(); }
function calculateSquare() { let d = document.getElementById("display"); d.value = Math.pow(eval(d.value), 2); vibratePhone(); }
function calculateRoot() { let d = document.getElementById("display"); d.value = Math.sqrt(eval(d.value)); vibratePhone(); }
function calculateReciprocal() { let d = document.getElementById("display"); d.value = (1 / eval(d.value)).toFixed(4); vibratePhone(); }

