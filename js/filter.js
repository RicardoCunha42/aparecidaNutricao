var filter = document.querySelector('#filter');

filter.addEventListener('input', function () {
    var inputValue = this.value;
    var pacients = document.querySelectorAll('.paciente')
    
    if (inputValue.length != 0) {
        pacients.forEach(function (item) {
            var name = item.querySelector('.info-nome').textContent;
            var regex = new RegExp(inputValue, 'i')
            if(!regex.test(name)) {
               item.classList.add('invisible')
            } else {
               item.classList.remove('invisible')
            }
        }) 
    } else {
        pacients.forEach(function(item){
            item.classList.remove('invisible')
        })
    }
    
})