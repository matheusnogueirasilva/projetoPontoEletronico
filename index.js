//Ler arquivo .csv e separar gravar em matriz

let fs = require('fs');



fs.readFile('./PontoDiario.csv', 'utf-8', function (err, data) {
    let lista = [];
    let matriz = [];

    if(err) throw err;

    lista = data.split('\n');
    
    for(i = 0; i < lista.length; i++){
        matriz.push(lista[i].split(';'));
    }

    console.log(matriz);
});
