const escolhaGenero = document.querySelector(".genero-objetos");

escolhaGenero.addEventListener('click', identificarGenero);

function identificarGenero(event) {
    // console.log(event.target);
    const element = event.target;

    if (element.tagName === "LI") {
        const id = element.id;
        const opcaoGenero = document.querySelector(`li[id="${id}"`);

        removeClasseSelected();

        opcaoGenero.classList.add('selected')
    }
}

function removeClasseSelected() {
    const divs = document.querySelectorAll(".genero .container .genero-objetos li")

    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.remove("selected")
    }
}




const calcular = document.querySelector(".btnCalcular");

calcular.addEventListener('click', imprimeImc);

function imprimeImc () {
    // const inputIdade = document.querySelector("#input-idade");
    const inputAltura = document.querySelector("#input-altura");
    const inputPeso = document.querySelector("#input-peso");
    const valorAltura = inputAltura.value;
    const valorPeso = inputPeso.value;

    const imc = (valorPeso / ((valorAltura / 100) ** 2));
    alert("IMC = " + imc)
}