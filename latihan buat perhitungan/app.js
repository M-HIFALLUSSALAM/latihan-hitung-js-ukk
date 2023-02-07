const hitungSegitga = document.getElementById("hitungSegitiga");
const alas = document.getElementById("alas");
const tinggi = document.getElementById("tinggi");
const contentHasil = document.getElementById("content")


const Segitiga = JSON.parse(localStorage.getItem("content")) || [];

const tambahSegitiga = (alas, tinggi, hasil) => {
    Segitiga.push({
        alas,
        tinggi,
        hasil
    });

    localStorage.setItem("segitiga", JSON.stringify(Segitiga));

    return {alas, tinggi, hasil};
};   

const createSegitiga = ({alas, tinggi, hasil}) => {
    const contentDiv = document.createElement("div");
    const alasSegitiga = document.createElement("p");
    const tinggiSegitiga = document.createElement("p");
    const hasilHitung = document.createElement("h3");

    alasSegitiga.innerText = "alas segitiga : " + alas;
    tinggiSegitiga.innerText = "tinggi segitiga : " + tinggi;
    hasilHitung.innerText = "hasil perhitungan : " + hasil;

    contentDiv.append(alasSegitiga, tinggiSegitiga, hasilHitung);
    contentHasil.appendChild(contentDiv);
};

Segitiga.forEach(createSegitiga);

hitungSegitga.onsubmit = e => {
    e.preventDefault();

    const alas1 = alas.value;
    const tinggi1 = tinggi.value;
    const Luas = (alas1*tinggi1)/2;


    const newSegitiga = tambahSegitiga(
        alas.value,
        tinggi.value,
        Luas
    );

    createSegitiga(newSegitiga);
    alas.value = "";
    tinggi.value = "";
}

