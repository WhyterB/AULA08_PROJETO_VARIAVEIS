//criando uma variavel var
var nome ='Adamastora';
console.log(nome);

if(nome==='Adamastor'){
    var escola = 'CESF';
    console.log(escola);
}

console.log(escola);
escola = 'Sagrada';
console.log(escola);

/* Variáveis do tipo VAR são acessíveis fora do escopo no qual
foram criadas. isso implica na possibilidade de reatribuirmos
novo valor a elas */

//Variáveis do tipo LET 
if(nome==='Adamastor'){
    let curso = 'DS';
    console.log(curso);
}

//console.log(curso);
curso = 'Culinária';

/* cuidado não conseguimos acessar a let curso
porque ela só existe no escopo em que foi criada 
além de não poder consumir também não podemos sobrescrever 
reatribuindo-lhe valor, ao tentarmos fazer
isso estamos criando um esqueleto dentro do armário
e induzindo nosso código a bugs*/

console.log(curso);

//variavel do tipo CONST

const cargo ='estudante';
console.log(cargo);

//tentar reatribuir valor a cargos
cargo = 'estagiário';
console.log(cargo);