const colorBox = document.querySelector(".color-box");
const colorCode = document.getElementById("colorCode");

const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const message = document.getElementById("message");

let history = [];

// Generate Random HEX Color
function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// Apply Color Everywhere
function applyColor(color) {

    colorBox.style.background = color;

    colorCode.textContent = color;

    document.body.style.background =
        `linear-gradient(135deg, ${color}, #141E30)`;
}

// Show Message
function showMessage(text) {

    message.textContent = text;

    setTimeout(() => {
        message.textContent = "";
    }, 1500);
}

// Generate New Color
function generateColor() {

    const color = randomColor();

    applyColor(color);

    addHistory(color);
}              

// Add Color History
function addHistory(color) {

    // Remove duplicate
    history = history.filter(item => item !== color);

    // Add latest at first
    history.unshift(color);

    // Keep only last 10
    if (history.length > 10) {
        history.pop();
    }

    displayHistory();
}

// Display History
function displayHistory() {

    const historyDiv = document.getElementById("history");

    historyDiv.innerHTML = "";

    history.forEach(color => {

        const card = document.createElement("div");

        card.className = "history-card";

        card.innerHTML = `
            <div class="history-preview"
                style="background:${color}">
            </div>

            <div class="history-footer">
                <span>${color}</span>
                <button class="copy-btn">📋</button>
            </div>
        `;

        // Reuse color
        card.addEventListener("click", () => {

            applyColor(color);

        });

        // Copy color
        card.querySelector(".copy-btn")
            .addEventListener("click", (e) => {

                e.stopPropagation();

                navigator.clipboard.writeText(color);

                showMessage("✅ Copied!");

            });

        historyDiv.appendChild(card);

    });

}

// Generate Button
generateBtn.addEventListener("click", generateColor);

// Copy Main Color
copyBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(colorCode.textContent);

    showMessage("✅ Color Copied!");

});

// First Color
generateColor();

// Spacebar Shortcut
document.addEventListener("keydown", (event) => {

    if (event.code === "Space") {

        event.preventDefault();

        generateColor();

    }

});