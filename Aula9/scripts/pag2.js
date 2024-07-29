let texto = prompt("Digite um texto: ");
alert(typeof texto);

let idade = Number(prompt("Digite sua idade"));

let verificacao = typeof idade
if ( verificacao === 'number'){
    idade = parseInt(idade);
}
alert(typeof idade);

//Operador ternario
let op = confirm("Você sabe Ruby? ");

let resp = (op)?"Contratado":"Ignorar";
alert(resp);



