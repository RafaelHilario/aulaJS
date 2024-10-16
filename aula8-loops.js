const listaDeDestinos = new Array(
    'São Paulo',
    'Rio de Janeiro',
    'salvador',
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log(listaDeDestinos);

const podeComprar =  idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino exite");
        break;
    }else{
        destinoExiste = false;
    }
    ConstantSourceNode += 1;
}
console.log("Destino existe: ", destinoExiste);


const list = new Array(
    '81',
    '80',
    '82',
    '83'
);