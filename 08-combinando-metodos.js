console.log("=== 8. Combinando Métodos ===");

//Exemplo 1 - Lista de alunos (includes e indexOf)
const alunos = [
    "Carlos",
    "Ana",
    "Pedro",
    "João",
    "Mariana"
];

console.log("Tem João?", alunos.includes("João")); //true
console.log("Posição de Mariana:", alunos.indexOf("Mariana")); //4

//Exemplo 2 - Organizar e transformar (sort + join)
const nomes = [
    "Carlos",
    "Ana",
    "Pedro",
    "João"
];

nomes.sort();
const resultadoNomes = nomes.join(" - ");
console.log("Nomes organizados e formatados:", resultadoNomes);

//Exemplo 3 - Pegar uma parte e mostrar
const produtos = [
    "Mouse",
    "Teclado",
    "Monitor",
    "Headset",
    "Webcam"
];

const destaque = produtos.slice(2, 5);
console.log("Produtos em detaque:", destaque.join(","));
