const header = document.getElementById("header");
const cardSobre = document.getElementById("card-sobre");
const cardObjetivos = document.getElementById("card-objetivos");
const cardConhecimentos = document.getElementById("card-conhecimentos");
const footer = document.getElementById("footer");      

header.style.display = "block";
cardSobre.style.display = "block";
cardObjetivos.style.display = "none";
cardConhecimentos.style.display = "none";
footer.style.display = "block";

function clickNoSobre() {
    header.style.display = "block";
    cardSobre.style.display = "block";
    cardObjetivos.style.display = "none";
    cardConhecimentos.style.display = "none";
    footer.style.display = "block";

    console.log("Clicou no botão SOBRE");
}

function clickNoObjetivos() {
    header.style.display = "block";
    cardSobre.style.display = "none";
    cardObjetivos.style.display = "block";
    cardConhecimentos.style.display = "none";
    footer.style.display = "block";

    console.log("Clicou no botão OBJETIVOS");
}

function clickNoConhecimentos() {
    header.style.display = "block";
    cardSobre.style.display = "none";
    cardObjetivos.style.display= "none";
    cardConhecimentos.style.display = "block";
    footer.style.display = "block";

    console.log("Clicou no botão CONHECIMENTOS");
}
