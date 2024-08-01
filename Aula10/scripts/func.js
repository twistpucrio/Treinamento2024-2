
/**
 * Funções
 * function Nome()
 */

/**
 * função sem parametro e sem retorno
 */
function CalcQuadrado(){
    let lado = parseFloat(prompt("Digite o lado: "));
    alert("\n\n"+
        "** A Area do quadrado é: "+(lado**2));
}

/** 
 * função com parametro e sem retorno
*/
function calcRetangulo(base, altura){
    alert("\n\n"+
        "**A area do Retangulo é: "+(base*altura));
}

/**
 * Função com parametro e com retorno
 */
function calcTriangulo(base, altura){
    let calc = (base*altura)/2;
    return calc;
}

/**
 * função sem parametro e com retorno
 */
function calcTrapezio(){
    let base, Base, altura;
    base = parseFloat(prompt("Digite a base menor: "));
    Base = parseFloat(prompt("Digite a base maior: "));
    altura = parseFloat(prompt("Digite a altura: "));
    calc = (base+Base)/2 * altura;
    return calc;
}

function mostrarDados(){
    let texto = "\n";
    texto+= document.querySelector("#txtNome").value;
    texto+= "\n";
    texto += document.querySelector('#txtCpf').value;
    texto+= "\n";
    /** da linha 52  a 58  testado ok
     *  vamos retomar na quinta - OK
    */
    let livro = document.querySelector('#livros');
    if (livro.checked){
        texto+= document.querySelector('#livros').value;
        texto += "\n***********\n"
    }

    //continuação na quinta 01/08
    // pegar todos os checkbox
    let hobbies = document.getElementsByName('hobbies');
    //console.log(hobbies);

    for( h of hobbies){
        if(h.checked){
            texto += h.value;
            texto+= "\n"
        }
        //console.log(h.value);
    }
  alert(texto);
}

