var addButton = document.querySelector('#adicionar-paciente')
addButton.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona")
    
    pacient = createPacient(form);

    var errors = validatePacient(pacient)
    if(errors.length > 0) {
        showErrors(errors)
        return;
    }

    addPacient(pacient)

    var ul = document.querySelector('#error-messages');
    ul.innerHTML = ''
    
    form.reset()
});

function createPacient(form) {
    var pacient = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return pacient;
}

function createTr(pacient) {
    var trNew = document.createElement('tr');

    trNew.classList.add('paciente')

    trNew.appendChild(createTd(pacient.nome, 'info-nome'))
    trNew.appendChild(createTd(pacient.peso, 'info-peso'))
    trNew.appendChild(createTd(pacient.altura, 'info-altura'))
    trNew.appendChild(createTd(pacient.gordura, 'info-gordura'))
    trNew.appendChild(createTd(pacient.imc, 'info-imc'))

    return trNew;
}

function createTd(text, classe){
    var td = document.createElement('td');
    td.textContent = text;
    td.classList.add(classe);

    return td;
}

function validatePacient(pacient) {
    var errors = []
    if(!validateWeight(pacient.peso)) errors.push('Peso inválido')
    
    if(!validateHeight(pacient.altura)) errors.push('Altura inválida')

    if(pacient.nome == '') errors.push('Nome não pode estar em branco')

    if(pacient.peso == '') errors.push('Peso não pode estar em branco')
    
    if(pacient.altura == '') errors.push('Altura não pode estar em branco')
    
    if(pacient.gordura == '') errors.push('Godura não pode estar em branco')
    
    return errors;
}

function showErrors(errors) {
    var ul = document.querySelector('#error-messages');
    ul.innerHTML = ''

    errors.forEach(function(error) {
        var li = document.createElement('li')
        li.textContent = error
        ul.appendChild(li);
    })
}

function addPacient(pacient) {
    var tr = createTr(pacient);    
    var tbody = document.querySelector('#tabela-pacientes')
    tbody.appendChild(tr)
}
