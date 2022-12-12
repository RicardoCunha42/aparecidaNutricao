var tBody = document.querySelector('#tabela-pacientes');

tBody.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fade-out')
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500)
})






// var trs = document.querySelectorAll('.paciente');

// trs.forEach(function(tr){
//     tr.addEventListener('dblclick', function(){
//         this.remove();
//     })
// })