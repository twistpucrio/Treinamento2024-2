/**
 *  uma estrutura de dados
 * é um espaço na memoria, com tamanho n
 * onde n é a quantidade de elementos dentro dela
 * contendo um nome.
 * Cada elemento pode ser acessado por meio 
 * um ou mais indices;
 * 
 * Uma estrutura de dados unidimensional:
 * é acessada por meio de um unico indice
 * e:
 * x[1]
 * x: varaivel
 * []: indica que é para acessar um indice
 * 1: posição do elemento dentro da variavel x
 * 
 * estrutura de dados bidimensionais
 * dois indices: Linhas e colunas
 * x[1,2] ou x[1][2]
 * x: variavel
 * 1: linha
 * 2: coluna
 * 
 */

// colocar o array em branco
let teste=[];

// criar passando valores
let feira=['Banana','Maça','Perâ','Uva',"Morango"];

console.log(`Uma valor: ${feira[3]}`);
console.log(`Tudo: ${feira}`);

console.log(`Tamanho de teste ${teste.length}`);
teste.push(1);
teste.push("Abacate");
teste.push(1.99)
console.log(teste)
console.log(`tamanho de teste: ${teste.length}`)

alert("\n\n ## For padrão ##")
/** for padrão 
 * retorna o elemento
*/
for(let i=0; i< feira.length; i++){
    alert(feira[i])
}

alert("\n\n**For OF**")
/** for of 
 * retorna o elemento
*/
for (let fruta of feira){
    alert(fruta)
}

alert("\n\n=> For IN <=")
/** for in
 * esta retornando o indice
 */
for (let fruta in feira){
    alert(fruta)
}
