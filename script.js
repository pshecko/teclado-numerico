let content = document.getElementById("contenedor");
let div = document.createElement("div");

let display = document.createElement("div");
display.id = "display";
content.before(display);

addEventListener("click", function(event) {
    if (event.target.className === "key") {
        if (event.target.textContent === "C") {
            display.textContent = "";
        } else {
            display.textContent += event.target.textContent;
        }
    }
});

const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "C"];

for (let i = 0; i < keys.length; i++) {
    div = document.createElement("div");
    div.className = "key";
    if (keys[i] === "C") {
        div.id = "clear";
    }
    div.textContent = keys[i];
    content.appendChild(div);
}