var button = document.querySelector('#get-pacients')

button.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://raw.githubusercontent.com/mmgcnerds/api-pacientes/main/api-pacientes.json')

    xhr.addEventListener('load', function(){
        var ajaxError = document.querySelector('#ajax-error');
        if(xhr.status == 200){
            ajaxError.classList.add('invisible')
            var pacients = JSON.parse(this.responseText);
            pacients.forEach(pacient => {
                addPacient(pacient)
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            ajaxError.classList.remove('invisible')
        }
    })

    xhr.send();
})