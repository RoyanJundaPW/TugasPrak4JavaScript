let btnBackground = document.createElement("button");
btnBackground.textContent = "Ubah Latar Belakang";
btnBackground.onclick = function() {
    document.body.style.backgroundColor = "rgb(226, 255, 3)";
};

let btnTextColor = document.createElement("button");
btnTextColor.textContent = "Ubah Warna Teks";
btnTextColor.onclick = function() {
    document.body.style.color = "#fc0bc4f2";
};

let btnIncreaseFont = document.createElement("button");
btnIncreaseFont.textContent = "Perbesar Font";
btnIncreaseFont.onclick = function() {
    let currentSize = parseInt(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize + 2) + "px";
};

let btnDecreaseFont = document.createElement("button");
btnDecreaseFont.textContent = "Perkecil Font";
btnDecreaseFont.onclick = function() {
    let currentSize = parseInt(getComputedStyle(document.body).fontSize);
    if (currentSize > 10) {
        document.body.style.fontSize = (currentSize - 2) + "px";
    }
};

let outputDiv = document.getElementById("output3");
outputDiv.appendChild(btnBackground);
outputDiv.appendChild(btnTextColor);
outputDiv.appendChild(btnIncreaseFont);
outputDiv.appendChild(btnDecreaseFont);