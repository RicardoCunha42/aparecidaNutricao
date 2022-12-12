var title = document.querySelector(".title")
title.textContent = 'Aparecida nutrição'

var pacients = document.querySelectorAll(".paciente")
for (i = 0; i < pacients.length; i++) {
    var trPacient = pacients[i]

    var tdWeight = trPacient.querySelector('.info-peso')
    var weight = tdWeight.textContent

    var tdHeight = trPacient.querySelector('.info-altura')
    var height = tdHeight.textContent

    var tdImc = trPacient.querySelector('.info-imc')

    var validWeight = validateWeight(weight);
    var validHeight = validateHeight(height);
    if (!validWeight) {
        tdImc.textContent = "Invalid weight";
        validWeight = false;
        trPacient.classList.add("invalid-value")

    } else if (!validHeight) {
        tdImc.textContent = "Invalid height";
        validHeight = false;
        trPacient.classList.add("invalid-value")

    } else if (validHeight && validWeight) {
        var imc = calculaImc(weight, height)
        tdImc.textContent = imc;
    }
}

function calculaImc(weight, height) {
    var imc = weight / (height * height)
    return imc.toFixed(2);
}

function validateWeight(weight) {
    if (weight >= 0 && weight <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validateHeight(height) {
    if (height >= 0 && height <= 3.00) {
        return true;
    } else {
        return false;
    }
}