const x:number = 10

console.log(x)

const obj:{name: string, age:number} = {
    name: "Hudson",
    age: 33
}

type numOrString = number | string

let variavel:numOrString = 0

type vetorDeNum = number[] //limita o vetor a um tipo

const vetor:vetorDeNum = [1, 1]

function vetorDeQlqrTipo<T>(vetor:T[]):void{ //generic, vetor de qlqr tipo
    console.log("Aqui ó!")
}

interface somaParams {
    n1: number,
    n2: number
}

const soma = (nums:somaParams) =>{
    return nums.n1 + nums.n2
}

class Usuario {
    nome
    senha
    nvlAcss

    constructor(nome:string, senha:string, nvlAcess:number){
        this.nome = nome
        this.senha = senha
        this.nvlAcss = nvlAcess
    }

    getUser(){
        return this.nome
    }

    setUser(nome:string){
        this.nome = nome
    }
}

const Hudson = new Usuario("Hudson", "1234", 1)
console.log(Hudson.getUser())
Hudson.setUser("Hudsinho")
console.log(Hudson.getUser())

interface Cadastros { //interface de classes
    codigo:number,
    descricao: string
}

class Produto implements Cadastros{
    codigo
    descricao

    constructor(codigo:number, descricao:string){
        this.codigo = codigo
        this.descricao = descricao
    }
};