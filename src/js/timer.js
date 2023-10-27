const timer = setInterval(() => {
    const time = Date.now();
    const diff = time - start;
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff / 1000) % 60);
    const milliseconds = Math.floor(diff % 1000);

    document.getElementById("timer").innerHTML = `${minutes}:${seconds}.${milliseconds}`;
}, 1000);

document.getElementById("start").addEventListener("click", () => {
    start = Date.now();
});