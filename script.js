"use strict";
const x = 10;
console.log(x);
const obj = {
    name: "Hudson",
    age: 33
};
let variavel = 0;
const vetor = [1, 1];
function vetorDeQlqrTipo(vetor) {
    console.log("Aqui ó!");
}
const soma = (nums) => {
    return nums.n1 + nums.n2;
};
class Usuario {
    constructor(nome, senha, nvlAcess) {
        this.nome = nome;
        this.senha = senha;
        this.nvlAcss = nvlAcess;
    }
    getUser() {
        return this.nome;
    }
    setUser(nome) {
        this.nome = nome;
    }
}
const Hudson = new Usuario("Hudson", "1234", 1);
console.log(Hudson.getUser());
Hudson.setUser("Hudsinho");
console.log(Hudson.getUser());
class Produto {
    constructor(codigo, descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }
}
;
