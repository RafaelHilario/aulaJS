
class Pessoa {

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    dizerOla() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }

    fazerAniversario() {
        this.idade += 1;
        console.log(`Parabéns ${this.nome}, agora você tem ${this.idade} anos!`);
    }
}

const pessoa1 = new Pessoa('Maria', 30);
const pessoa2 = new Pessoa('rafale', 21)

pessoa1.dizerOla(); 
pessoa2.dizerOla();
pessoa1.fazerAniversario();
pessoa2.fazerAniversario();