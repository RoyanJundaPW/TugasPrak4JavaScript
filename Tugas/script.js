const inputAngka1 = document.querySelector("#angka-1");
const inputAngka2 = document.querySelector("#angka-2");
const teksHasil = document.querySelector("#hasil");

function hitung(operasi) {
    if (inputAngka1.value === "" || inputAngka2.value === "") {
        teksHasil.textContent = "Kedua angka wajib diisi";
        return;
    }

    const a = Number(inputAngka1.value);
    const b = Number(inputAngka2.value);
    let hasil;

    switch (operasi) {
        case "+":
            hasil = a + b;
            break;
        case "-":
            hasil = a - b;
            break;
        case "x":
            hasil = a * b;
            break;
        case "/":
            if (b === 0) {
                teksHasil.textContent = "Tidak bisa membagi dengan nol";
                return;
            }
            hasil = a / b;
            break;
    }
    
    teksHasil.textContent = `Hasil: ${a} ${operasi} ${b} = ${hasil}`;
}

document.querySelector("#tombol-tambah").addEventListener("click", function () {
    hitung("+");
});

document.querySelector("#tombol-kurang").addEventListener("click", function () {
    hitung("-");
});

document.querySelector("#tombol-kali").addEventListener("click", function () {
    hitung("x");
});

document.querySelector("#tombol-bagi").addEventListener("click", function () {
    hitung("/");
});