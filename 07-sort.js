console.log("=== 7. sort() ===");

//Exemplo 1 - nomes (ordem alfabética)
const nomes = ["Carlos", "Ana", "Pedro", "Bruno"];
nomes.sort();
console.log("Nomes ordenados:", nomes);

//Exemplo 2 - cidades (ordem alfabética)
const cidades = ["São Paulo", "Campinas", "Valinhos", "Vinhedo"];
cidades.sort();
console.log("Cidades ordenadas:", cidades);

//Exemplo 3 - números (A famosa pegadinha)
const numeros = [10, 2, 30, 5];


numeros.sort((a, b) => a - b);
console.log("Números ordenados corretamente:", numeros);
