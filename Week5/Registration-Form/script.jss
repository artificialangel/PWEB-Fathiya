const mahasiswa = [
  "Fathiya Nayla Husna Wibowo",
  "Jeihan Shawmy Prasetya",
  "Shifa Alya Dewi",
  "Najma Lail Arazy"
];

const dosen = {
  "PeWeb": [
    "Fajar Baskoro, S.Kom., MT.",
    "Misbakhul Munir Irfan Subakti, S.Kom., M.Sc."
  ],
  "PBO": [
    "Fajar Baskoro, S.Kom., MT.",
    "Rully Soelaiman, S.Kom,M.Kom."
  ]
};

const inputNama = document.getElementById("nama");
const suggestList = document.getElementById("suggestList");
const matkulSel = document.getElementById("matkul");
const dosenSel = document.getElementById("dosen");

inputNama.addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase();
  suggestList.innerHTML = "";

  if (!q) {
    suggestList.hidden = true;
    return;
  }

  const matches = mahasiswa.filter((n) => n.toLowerCase().includes(q));
  if (matches.length === 0) {
    suggestList.hidden = true;
    return;
  }

  matches.forEach((name) => {
    const div = document.createElement("div");
    div.className = "suggest-item";
    div.textContent = name;
    div.onclick = () => {
      inputNama.value = name;
      suggestList.hidden = true;
    };
    suggestList.appendChild(div);
  });

  suggestList.hidden = false;
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".suggestions")) {
    suggestList.hidden = true;
  }
});

matkulSel.addEventListener("change", () => {
  dosenSel.innerHTML = '<option value=""></option>';
  const list = dosen[matkulSel.value] || [];
  list.forEach((d) => {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d;
    dosenSel.appendChild(opt);
  });
});
