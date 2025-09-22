const data = {
  "Jawa Timur": {
    "Surabaya": {
      "Sukolilo": "60111",
      "Wonokromo": "60243",
      "Genteng": "60272"
    }
  },
  "DKI Jakarta": {
    "Jakarta Selatan": {
      "Cipulir": "12230", "Senayan": "12190","Pasar Minggu": "12510"
    },
    "Jakarta Timur": {
      "Bendungan Hilir": "10210",
      "Mangga Dua Selatan": "10730"
    }
  }
};

const provSel = document.getElementById("prov");
const kotaSel = document.getElementById("kota");
const kecSel = document.getElementById("kec");
const hasil = document.getElementById("hasil");

Object.keys(data).forEach(prov => {
  const opt = document.createElement("option");
  opt.value = prov;
  opt.textContent = prov;
  provSel.appendChild(opt);
});

provSel.addEventListener("change", () => {
  if (!provSel.value) return;
  Object.keys(data[provSel.value]).forEach(kota => {
    const opt = document.createElement("option");
    opt.value = kota;
    opt.textContent = kota;
    kotaSel.appendChild(opt);
  });
});

kotaSel.addEventListener("change", () => {
  if (!kotaSel.value) return;

  Object.keys(data[provSel.value][kotaSel.value]).forEach(kec => {
    const opt = document.createElement("option");
    opt.value = kec;
    opt.textContent = kec;
    kecSel.appendChild(opt);
  });
});

document.getElementById("form-kodepos").addEventListener("submit", (e) => {
  e.preventDefault();

  const prov = provSel.value;
  const kota = kotaSel.value;
  const kec = kecSel.value;
  const kodepos = data[prov][kota][kec];

  hasil.innerHTML = `
    <h3>Hasil Pencarian:</h3>
    <p><strong>Kode Pos:</strong> ${kodepos}</p>
    <p><strong>Informasi Daerah:</strong> Kec. ${kec}, Kota ${kota}, Prov. ${prov}</p>
  `;
});
