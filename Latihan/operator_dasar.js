function hitungLuas(panjang, lebar) {
  return panjang * lebar;
}

const hasil1 = hitungLuas(7, 4);
const hasil2 = hitungLuas(12, 6);

console.log(`Luas (panjang 7, lebar 4) = ${hasil1}`);
console.log(`Luas (panjang 12, lebar 6) = ${hasil2}`);

document.getElementById("hasil").innerHTML = `
  <p>Luas persegi panjang dengan panjang 7 dan lebar 4 adalah: ${hasil1}</p>
  <p>Luas persegi panjang dengan panjang 12 dan lebar 6 adalah: ${hasil2}</p>
`;