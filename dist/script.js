let bodyy = document.querySelector("body");
const start = bodyy.querySelector("#start");
const stop = bodyy.querySelector("#stop");
let checkInterval = null;

function randomColor() {
    let color = '#';
    const range = '1234567890ABCDEF';
    for (let i = 0; i < 6; i++) {
        color += range[Math.floor(Math.random() * 16)];
    }
    bodyy.style.backgroundColor = color;
}

start.addEventListener("click", () => {
    if (!checkInterval) {
        checkInterval = setInterval(randomColor, 1000);
    }
});

stop.addEventListener("click", () => {
    if (checkInterval) {
        clearInterval(checkInterval);
        checkInterval = null;
    }
});
