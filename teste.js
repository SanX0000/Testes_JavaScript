
/**
 * The function should recive an integer between 1 and 12 (inclusive) and return the corresponding string value. If the informed integger is not between 1 and 12, the function should return 'Unknown Month'
 * Ex: input: 1 - output: "January"
 * Ex: input: 13 - output: "Unknown Month"
 *
 * A função recebe um inteiro entre 1 e 12 e retorna o mês correspondente por extenso. Caso o mês informado não esteja entre 1 e 12, deverá ser retornado "Mes Inexistente"
 * Ex: input: 1 	- output: "Janeiro"
 * Ex: input: 13 	- output: "Mês Desconhecido"
 *
 * 
 * 
  RESPOSTA = A função mostraMes da a instrução que se for maior ou igual a 1 e menor ou igual 12, retorne o 
  mês selecionado na variável (meses) de acordo com o número. Se não, mostra a mensagem  
  "Mês Desconhecido
*/

const meses = {
  1: "janeiro",
  2: "fevereiro",
  3: "março",
  4: "abril",
  5: "maio",
  6: "junho",
  7: "julho",
  8: "agosto",
  9: "setembro",
  10: "outubro",
  11: "novembro",
  12: "dezembro"
};

function mostraMes(num) {
  if (num >= 1 && num <= 12) {
    return meses[num];
  } else {
    return "Mês Desconhecido";
  }
}

console.log('Resposta 1 = ', mostraMes(10))
  



/**
 * The function should recive an array with at least 3 itens and return the arithmetic average of all the itens.
 * If the recived array contains less then 3 itens, the function should return the boolean false.
 * Ex: input: [4,6,8] 	- output 6
 * Ex: input: [1,2] 	- output false
 *
 * A função deverá receber um array com pelo menos 3 itens e retornar a média simples de todos os itens do array.
 * Caso o array recebido possua menos que 3 itens, deverá ser retornado o boleano false.
 * Ex: input: [4,6,8] 	- output 6
 * Ex: input: [1,2] 	- output false
 *
 * 
 * 
  RESPOSTA = A função mostraMedia verifica se o array é menor que 3, se for ele retorna como
  "false". Depois ele usa o método de redução para somar os valores e depois dividir esse resultado
  pelo total de itens do array para conseguir a média

 */

let medias = [3,7,10,12,]

function mostraMedia(medias) {
    if (medias.length < 3) {
        return false;
    }
    return medias.reduce((a, b) => a + b, 0) / medias.length;
    
}


console.log('Resposta 2 = ', mostraMedia(medias))





/**
 * The function should expect an array containing integers greater than zero and return the amount of even values contained in it.
 * Ex: input: [1,2,3,4,5] - output: 2
 *
 * Recebe um array de inteiros maiores que zero e retorna a quantidade de números pares existentes no array
 * Ex: input: [1,2,3,4,5] - output: 2
 *
 * 
 * 
  RESPOSTA = A função contaNumero(parOuImpar) usa o método de filtro para filtrar os números do 
  array que divididos por 2 que são igual a 0 (pares) e depois conta os resultados desse filtro
 */

let parOuImpar = [1,2,3,4,5,6,7,8,9,10]

function contaNumero(parOuImpar) {
    return parOuImpar.filter(function(num) {
        return num % 2 === 0;
    }).length;
}

console.log('Resposta 3 = ', contaNumero(parOuImpar))





/**
 * The function should expect a string and return it backwards.
 * Ex: input: "foo" - output: "oof"
 *
 * A função deverá receber uma string e retornar a mesma invertida.
 * Ex: input: "bar" - output: "rab"
 *
    RESPOSTA = A função stringReversa cumpre 3 tarefas
    (1) "split" transforma a string em um array
    (2) "reverse" inverte a ordem dos elementos desse array
    (3) "join" converte ela de volta em uma string

 */

    let str = "Santiago";

    function stringReversa(str) {
        return str.split("").reverse().join("");
    }
    
    console.log('Resposta 4 = ', stringReversa(str)) 





/**
 * The function must replace all the vowels with '?' and return the result string
 * Ex: input: 'Foo' - output: 'F??'
 *
 * A função deverá receber uma string e substituir todas as vogais da mesma pelo sinal '?'
 * Ex: input: 'Bar' - output: 'B?r'
 *
    RESPOSTA = A função trocaVogal usa o método replace (com o sinalizador gi 
    para não para não diferenciar maiúsculas e minúsculas) que percorre a string,
    e ao encontrar as vogais declaradas subistitui por "?"
 */

let nome = "Lorelai"

function trocaVogal(nome) {
    return nome.replace(/[aeiou]/gi, '?');
  }

  console.log ('Resposta 5 = ', trocaVogal(nome))





/**
 * The function must expect an array of integers and sort it in ascending order
 * Ex: Input: [5,1,0,7,3,3] - Output: [0,1,3,3,5,7]
 *
 * A função deverá receber um array de inteiros como parâmetro e deverá retornar o mesmo array ordenado em ordem crescente.
 * Ex: Input: [5,1,0,7,3,3] - Output: [0,1,3,3,5,7]
 *
 * 
 * 
    RESPOSTA = A função ordenaArray usa o método sort que classifica os elementos 
    dentro do array em ordem crescente e compara os elementos trocando-os se estiverem na ordem
    errada
 */

let ord = [2,0,4,9,7,3,]    

function ordenaArray(ord) {
    return ord.sort((a, b) => a - b);
  }

console.log('Resposta 6 = ', ordenaArray(ord))





/**
 * The function must expect an array of integers and return the first non-repeated value.
 * Ex: input: [2,2,3,1,1,6] - output: 3
 *
 * A função irá receber um array de inteiros e retornar o primeiro elemento não repetido.
 * Ex: input: [2,2,3,1,1,6] - output: 3
 *
  RESPOSTA = A função mostraNumeroUnico percorre o array com "for" usando os métodos
  indexOf() e lastIndexOf() que analisam se o elemento verificado é o primeiro número 
  não repetido do array
 */

let unico = [2,2,8,8,8,7,0,0,0]

function mostraNumeroUnico(unico) {
    for (let i = 0; i < unico.length; i++) {
      if (unico.indexOf(unico[i]) === unico.lastIndexOf(unico[i])) {
        return unico[i];
      }
    }
    return null;
  }

  console.log('Resposta 7 = ', mostraNumeroUnico(unico))





/**
 * Your function need to read the file data.dat and return how many lines there are where the number of 0's is a multiple of 3 or the numbers of 1s is a multiple of 2.
 *
 * A função deverá ler o arquivo data.dat e retornar o número de linhas que atende pelo menos uma das condições abaixo:
 * 1 - A quantidade de números zeros na linha é um multiplo de 3
 * 2 - A quantidade de números 1 é um multiplo de 2
 *
  EXPLICAÇÃO = A função "contaLinhas" recebe o caminho do arquivo (filepath) e usa fs 
  para ler este arquivo. Depois usa "forEach" e "split" para verificar os número de 0s e 1s 
  na linha multiplos de 3 ou 2
 */

  const fs = require('fs');

  function contaLinhas(filepath) {
    let count = 0;
    fs.readFileSync(filepath, 'utf8').split('\n').forEach(line => {
      count += (line.split("0").length-1)%3 == 0 || (line.split("1").length-1)%2 == 0;
    });
    return count;
  }
  
  console.log('Resposta 8 = ', contaLinhas('./data.dat'))
  




/**
 * The function must return the full credit card number. The card number is a multiple of 123457 and the Luhn check digit is valid.
 * The Card Number must have the following pattern: 543210******1234
 *
 * Descubra o número do cartão de crédito abaixo sabendo que o mesmo é um multiplo de 123457 e o digito de luhn é válido.
 * O Número do cartão deve ter o seguinte padrão: 543210******1234
 * 
    EXPLICAÇÃO = A função generateCardNumber gera um número aleatório e verifica esse número usando o 
    Algoritmo de Luhn (um algoritmo que consiste em uma fórmula de soma de
    verificação usada para validar números de cartão de crédito ). Se ele passar na verificação
    desse algoritmo ele mostra o número.  
 */

function generateCardNumber() {
    while (true) {
      let cardNumber = "543210" + Math.floor(Math.random() * 1e10).toString().padStart(10, "0") + "1234";
      if (isValidLuhn(cardNumber) && Number(cardNumber) % 123457 === 0) {
        return cardNumber;
      }
    }
  }
  
  function isValidLuhn(cardNumber) {
    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
      let digit = Number(cardNumber[i]);
      if ((cardNumber.length - i) % 2 === 0) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }
    return sum % 10 === 0;
  }
  
  console.log('Resposta 9 = ', generateCardNumber() )





/**
 * The function should work like an ATM machine. it will recive an integer value representing the amount that will be withdrown and an array containing the avaliable bank notes.
 * Your function will have to return an array informing the minimum amount of bank notes as possible for the withdrown. Consider that the amount of each note are infinity.
 *
 * A função será utilizada em um sistema de caixa.
 * Ela receberá um valor inteiro, representando o valor a ser sacado e um array contendo quais tipos de cédulas ela tem disponível.
 * O array de cédulas disponiveis indica quais valores de cédulas existirão no caixa, a quantidade das mesmas é ilimitada. No caso do input [2,5,50], o caixa terá quantidades ilimitadas de notas de 2, 5 e 50 para devolver ao cliente.
 * A função deverá retornar o mínimo de cédulas necessarias possivel para o saque em formato de um array, cuja chave seja o valor da cédula e o valor a quantidade daquela cédula que será sacada.
 *
 * Ex: input: 150 & [5, 50, 100] 	- output: ["100"=>1, "50"=>1].
 * Ex: input: 150 e [2, 5, 10] 		- output: ["10"=>15].
 *
  EXPLICAÇÃO = A função "saque" recebe a quantia a ser sacada e também as notas disponíveis.
  Depois com "sort" as ordena em ordem decrescente e com "for" e "filter" remove as notas de maior
  valor e calcula quais valor de notas precisam, para completar o valor de saque, analisando se o valor
  é maior que a nota atual
 */

let quantia = "150"
let notas = [5,50,100]

function saque (quantia, notas) {
    var resultado = {};
    notas = notas.sort((a, b) => b - a).filter(notas => notas <= quantia);
    for (var i = 0; i < notas.length; i++) {
        var contar = Math.floor(quantia / notas[i]);
        quantia -= contar * notas[i];
        resultado[notas[i]] = contar;
    }
    if (quantia > 0) {
        return "Erro: Nos desculpe, esse valor não pode ser sacado";
    }
    return resultado; 
}

console.log('Resposta 10 = ', saque (quantia, notas))





/*
 * In the context of object orientation, write the diferences between classes, objects, instances and interfaces:
 *
 * Escreva a diferença entre interfaces, instancias, objetos e classes no contexto de orientação a objeto:
 *
 * 
 * 
 * EXPLICAÇÃO:
Classe =  É o modelo padrão para criar um objeto. Ele pode definir atributos que o objeto irá herdar.
          Podemos comparar a classe a um carro.

Instâncias = São objetos específicos com propriedades únicas mas que compartilham os mesmos atributos herdados da classe.
          Podemos comparar a instância a um grupo de diferentes tipos de carro (gol, pegeout, nissan etc)

Objetos = São os itens distintos da Instância, que tem características únicas mas os mesmos atributos herdados
          Usando o exemplo acima, o Gol é um Objeto da Classe Carro.
          
Interfaces = São métodos e recursos que uma classe deve implementar. Ela define os requisitos a srem implementados.
          Seguindo os exemplos acima, um carro e uma moto tem requisitos comuns (acelerar, frear etc.) Chamemos esses
          requisitos (a Interface) de Automóvel. O Gol e uma moto Honda são de Classes diferentes, mas ambos implementam a 
          Interface "Automóvel"

*/