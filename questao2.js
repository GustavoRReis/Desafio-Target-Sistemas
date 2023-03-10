/* Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a 
soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e
 retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */

const isFibonacci = (number) => {
  let fibo = [0, 1];
  let boll = false;
  //uso o boll como um break para nao vazar o escopo dos ifs por usar arrow function
  fibo.forEach((value, index) => {
    if (value === number) {
      console.log(`O número ${number} pertence à sequência de Fibonacci!`);
      boll = true;
      return;
    }
    if (value > number) {
      console.log(`O número ${number} não pertence à sequência de Fibonacci.`);
      boll = true;
      return;
    }
    fibo.push(fibo[index] + fibo[index + 1]);
  });
  if (!boll) {
    console.log(`O número ${number} não pertence à sequência de Fibonacci.`);
  }
}

