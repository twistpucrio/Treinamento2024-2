/** 
 * Switch case
 */

let dado = prompt("Digite uma letra de a a c: ");

switch(dado){

    case "a":
        alert("A dona Aranha subiu pela parede");
        break;

    case 'b':
        alert("Babaloo, babaloo é california...");
        break;
    
    case `c`:
        alert("Ciranda cirandinha, vamos todos cirandar");
        break;
    
    default:
        alert("OPÇÃO INVALIDA!!!")
        break;
}