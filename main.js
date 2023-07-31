const screen1 = document.querySelector(".screen1");
const screen2 =  document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randonNumber = Math.round(Math.random() * 10);
let xAttempts = 1;


btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', function(e) {
    if(e.kye == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})


function handleTryClick(event) {
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randonNumber) {
        toggleScreen()
        screen2.classList.remove("hide")

        document
        .querySelector(".screen2 h2")
        .innerText = `Você acertou em ${xAttempts} tentativas!`
    } else if(Number(inputNumber.value) < 0) {
        alert("Insira um número de 0 a 10")
    } else if(Number(inputNumber.value) > 10) {
        alert("Insira um número de 0 a 10!")
    }

    inputNumber.value = "";
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1;
    randonNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
