const merk = {
  "Dekstop": ["Lenovo", "HP", "Dell", "Asus", "Apple"],
  "Laptop": ["ASUS", "Lenovo", "Acer", "HP", "Dell", "Apple", "MSI", "Samsung"],
  "Smartphone": ["Samsung", "Xiaomi", "Apple", "Vivo", "OPPO", "Realme", "Infinix", "Tecno"]
};

const matkulSel = document.getElementById("matkul");
const merkSel = document.getElementById("merk");

matkulSel.addEventListener("change", () => {
  merkSel.innerHTML = '<option value="">Pilih Merk</option>';

  const list = merk[matkulSel.value] || [];
  list.forEach((m) => {
    const opt = document.createElement("option");
    opt.value = m;
    opt.textContent = m;
    merkSel.appendChild(opt);
  });
});
