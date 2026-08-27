//4. splice() - "Vou mexer no array"
//Sintaxe: array.splice(posição, quantidade_a_remover, ...itens_para_adicionar)
//Importante: ALTERA o próprio array original!

console.log('=== 4. splice() ===');

//Exemplo 1 - remover 1 item a partir do índice 1
const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];
frutas.splice(1, 2); //Remove 1 item na posição 1 ("Banana")
console.log('Após remover Banana:', frutas); //["maçã", "laranja", "uva"]

//Exemplo 2 - remover dois itens
const numeros = [10, 20, 30, 40, 50];
numeros.splice(1, 2); //Remove 2 itens a partir do índice 1 (20 e 30)
console.log('Após remover dois números:', numeros); //[10, 40, 50]

//Exemplo 3 - Adicionar sem remover nenhum (quantidade = 0)
const frutas2 = ['maçã', 'banana', 'uva'];
frutas2.splice(2, 0, 'Laranja'); //Na posição 2, remove 0 e adiciona "laranja"
console.log('Após adicionar laranja na posição 2:' , frutas2); //["maçã", "banana", "laranja", "uva"]

//Exemplo 4 - substituir (remove 1 e adiciona outro no lugar)
const cores = ['vermelho', 'azul', 'verde'];
cores.splice(1, 1, 'Roxo'); // Na posição 1, remove "azul" e adiciona "roxo"
console.log('Após substituir Azul por Roxo:', cores);
