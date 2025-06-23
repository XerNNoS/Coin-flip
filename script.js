function flipTheCoin() {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    document.getElementById("result").textContent = result;
    document.getElementById("coin").src = "./resources/" + result.toLowerCase() + ".svg";
    document.getElementById("coin").alt = "Coin" + result.toLocaleLowerCase();
}

document.getElementById("coin").addEventListener("click", flipTheCoin())