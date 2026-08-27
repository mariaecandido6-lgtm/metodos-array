//1. includes () - "Tem esse item?"
//Responde a pergunta: "Existe?" (retorna true ou false)

console.log("=== 1. includes() ==");

//Exemplo 1 - Lista de frutas
const frutas = ["maçã", "Banana", "Laranja"];

console.log("Tem Banana?", frutas.includes("Banana")); //true (porque banana está no array)
console.log("Tem Uva?", frutas.includes("Uva")); //false porque Uva não está no array)

//Exemplo 2
if (frutas.includes("Banana")) {
    console.log("Tem Banana!");
} else {
    console.log("Não tem banana!");
}

//Exemplo 3 - lista de alunos
const alunos = ["Ana", "João", "Carlos"];
const nome = "João";

if (alunos.includes(nome)) {
    console.group("Aluno encontrado!");
} else {
    console.log("Aluno não encontrado!");
}
