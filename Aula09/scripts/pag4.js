alert("\t\t\t *** Tabuada *** \n\n\n");

let num = parseInt(prompt("Digite um numero inteiro: "));
let result = "\n";
for(let n=1; n<=10; n++){
    console.log(`${n} X ${num} = ${n*num}`);
    // concatenação de string
    result += `${n} X ${num} = ${n*num} \n`;
}

alert(result);

