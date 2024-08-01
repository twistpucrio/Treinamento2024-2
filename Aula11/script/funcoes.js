
function soma(a,b){
    let v1 = parseFloat(a.value);
    let v2 =parseFloat(b.value);
    return(v1+v2);
}

function sub(){
    let val1 = document.querySelector("#val1").value;
    let val2 = document.querySelector("#val2").value; 
    return(Number(val1)-Number(val2));
  
}

function mult(){
    let val1 = document.querySelector("#val1").value;
    let val2 = document.querySelector("#val2").value;
    let result = document.querySelector("#result");
    let calc = Number(val1) * Number(val2);
    result.value = calc;
}

function div(a,b){
    calc = Number(a)/Number(b);
    let result = document.querySelector("#result");
    result.value = calc;
}

function limpa(){
    let val1 = document.querySelector("#val1");
    let val2 = document.querySelector("#val2");
    let result = document.querySelector("#result");
    val1.value = " ";
    val2.value = " ";
    result.value = " ";
    // não é o de limpar é um teste de alterar o estilo
    let calc = document.querySelector("#calc");
    calc.style.backgroundColor ="azure";
    
    let classe = document.querySelectorAll(".espaco");
    for( elemento of classe){
        elemento.style.color = "purple";
    }

    let novo = "<h1> Teste 1 <\h1>";
    
    document.getElementById("teste").innerHTML = novo;
}


window.addEventListener("load",
   function(){
    let btnSoma = document.querySelector("#soma");
    let btnSub = document.querySelector("#sub");
    let btnMult = document.querySelector("#mult");
    let btnDiv = document.querySelector("#div");
    let btnLimpa = document.querySelector("#limpa");

    btnSoma.addEventListener("click", 
        function(){
            let val1 = document.querySelector("#val1");
            let val2 = document.querySelector("#val2");
            let result = document.querySelector("#result");
            let resultado = soma(val1, val2);
            result.value = resultado;
            });
    
    btnSub.addEventListener("click",
        function(){
            let result = document.querySelector("#result");
            let resultado = sub();
            result.value = resultado;
        });

    btnMult.addEventListener("click",
        function(){
            mult();
        });

    btnDiv.addEventListener("click",
        function(){
            let val1 = document.querySelector("#val1").value;
            let val2 = document.querySelector("#val2").value;
            div(val1, val2);
        });
    btnLimpa.addEventListener("click",
        function(){
            limpa();
        });
   });






