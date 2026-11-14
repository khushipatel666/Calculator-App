let display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (!display.value || !/^[0-9+\-*/%.() ]+$/.test(display.value)) {
            throw new Error("Invalid");
        }

        let result = Function('"use strict"; return (' + display.value + ')')();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid");
        }

        display.value = Number(result.toPrecision(12));
    } catch {
        display.value = "Error";
    }
}