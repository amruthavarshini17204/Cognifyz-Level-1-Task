// Color Change Button
document.getElementById("colorBtn").addEventListener("click", function() {
    this.style.backgroundColor = 
        "#" + Math.floor(Math.random() * 16777215).toString(16);
});

// Calculator
document.getElementById("addBtn").addEventListener("click", function() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);

    let sum = n1 + n2;
    document.getElementById("resultValue").textContent = sum;
});
