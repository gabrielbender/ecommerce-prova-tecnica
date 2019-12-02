$( document ).ready(function() {
    
    let dados = {};

    fetch('mock-produtos.json', {mode: 'no-cors'})
        .then(res => res.json())
        .then(res => dados = res)
        .catch();

    console.log(dados);

    

});
