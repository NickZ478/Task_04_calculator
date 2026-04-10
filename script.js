const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDiv = document.getElementById('result');

function getNumbers() {
    const value1 = num1Input.value;
    const value2 = num2Input.value;
    
    if (value1 === '' || value2 === '') {
        resultDiv.textContent = 'Заполните оба поля!';
        return null;
    }
    
    const num1 = Number(value1);
    const num2 = Number(value2);
    
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = 'Введите числа!';
        return null;
    }
    
    return { num1, num2 };
}

function sum() {
    const numbers = getNumbers();
    if (numbers === null) return;
    
    const result = numbers.num1 + numbers.num2;
    resultDiv.textContent = result;
}

function difference() {
    const numbers = getNumbers();
    if (numbers === null) return;
    
    const result = numbers.num1 - numbers.num2;
    resultDiv.textContent = result;
}

function multiply() {
    const numbers = getNumbers();
    if (numbers === null) return;
    
    const result = numbers.num1 * numbers.num2;
    resultDiv.textContent = result;
}

function divide() {
    const numbers = getNumbers();
    if (numbers === null) return;
    
    if (numbers.num2 === 0) {
        resultDiv.textContent = 'На ноль делить нельзя!';
        return;
    }
    
    const result = numbers.num1 / numbers.num2;
    resultDiv.textContent = result;
}

document.getElementById('btnSum').addEventListener('click', sum);
document.getElementById('btnDiff').addEventListener('click', difference);
document.getElementById('btnMult').addEventListener('click', multiply);
document.getElementById('btnDiv').addEventListener('click', divide);