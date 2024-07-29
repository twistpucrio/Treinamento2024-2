/* posso criar variaveis 
global usando o comando var
local/bloco usando o comando let */

let nome= prompt("Digite seu nome: ");
let idade = parseInt(prompt("Digite sua idade: "));

// se a idade for maior que 18
// Entrada livre

if (idade > 18){
    alert(`${nome} você pode entrar!!!`);
    let comanda = -1;
    let resp = confirm("Deseja beber uma cerveja? ");
    if(resp){
        comanda-= 20;
    }
    alert(`Saldo atual: ${comanda}`);

    let saida = confirm("Deseja ir embora?");
    if(saida){
        if(comanda < 0){
            alert(`Sua conta ficou: ${comanda}`);
            let pagamento = parseFloat(
                prompt("Digite o valor pago: "));

            let result = comanda + pagamento
            if (result > 0){
                alert(`Seu troco é ${result}`);
            }
            else{
              if(result < 0){
                alert("Você não pagou, vai lavar pratos");
              }
              else{
                alert(`Pagamento ok, ${nome} pode sair`);
               }
            }

        }
        else{
            alert(`${nome} pode sair`);
        }
    }

}
else{
    alert(`${nome} você esta proibido de entrar`);
}

