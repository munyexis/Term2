function multiplyNumber() {
    // Get the value inputted by the user
    const inputNumber = document.getElementById('numberInput').value;
    
    // Check if the input is a number
    const number = parseFloat(inputNumber);
    if (isNaN(number)) {
        alert('Please enter a valid number');
        return;
    }

    // Multiply the number by a factor (e.g., 2)
    const result = number * 5; // You can change 2 to any other multiplier
    
    // Display the result
    document.getElementById('result').innerText = `Result: ${result}`;
}