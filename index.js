//Ler arquivo .csv e separar gravar em matriz

let fs = require('fs');

fs.readFile('./PontoDiario.csv', 'utf-8', function (err, data) {
    if(err) throw err;
    console.log(data);
});