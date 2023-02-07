const jajarGenjang = document.getElementById("jajargenjang");
const panjang = document.getElementById("panjang");
const lebar = document.getElementById("lebar");
const contentHasil = document.getElementById("content");

const jajarGen = JSON.parse(localStorage.getItem("content")) || [];

const addjajargen = (panjang, lebar, hasil) => {
    jajarGen.push(
        panjang,
        lebar,
        hasil
    );

    localStorage.setItem("jajarGen", JSON.stringify(jajarGen));

    return {panjang, lebar, hasil}
}

const createjajar = ({panjang, lebar, hasil}) => {
    const contentDiv = document.createElement("div")
    const panjangjg = document.createElement("p")
    const lebarjg = document.createElement("p")
    const hasiljg = document.createElement("h3")

    panjangjg.innerText = "nilai panjang : " + panjang
    lebarjg.innerText = "nilai lebar : " + lebar
    hasiljg.innerText = "hasil perhitungan : " + hasil

    contentDiv.append(panjangjg, lebarjg, hasiljg)
    contentHasil.appendChild(contentDiv)
}

jajarGen.forEach(createjajar);

jajarGenjang.onsubmit = e => {
    e.preventDefault()

    const panjangjg1 = panjang.value;
    const lebarjg1 = lebar.value;
    const hasil = (parseInt(panjangjg1) + parseInt(lebarjg1)) * 2;

    const newJajarGen = addjajargen (
        panjang.value,
        lebar.value,
        hasil

    )

    createjajar(newJajarGen);
    panjang.value = "";
    lebar.value = "";

}

