// Dice Roller Program


function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    diceResult.textContent = "";
    diceImages.innerHTML = "";

    if (numOfDice < 1 || numOfDice > 6) {
        diceResult.textContent = "⚠️ You have to enter a number between 1 and 6!";
        diceResult.style.color = "red";
        return;
    }

    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/dice-${value}.png" alt="Dice ${value}">`)
    }
    diceResult.textContent = `Dice : ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}