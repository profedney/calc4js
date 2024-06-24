// Função para calcular a soma de dois números
function soma(a, b) {
   return a + b;
}

// Função para calcular a subtração de dois números
function subtracao(a, b) {
   return a - b;
}

// Função para calcular a multiplicação de dois números
function multiplicacao(a, b) {
   return a * b;
}

// Função para calcular a divisão de dois números
function divisao(a, b) {
   if (b !== 0) {
       return a / b;
   } else {
       return 'Erro: divisão por zero';
   }
}

// Função para ser chamada ao clicar no botão "Somar"
function somando() {
   let num1 = parseFloat(document.getElementById('n1').value);
   let num2 = parseFloat(document.getElementById('n2').value);
   let resultado = soma(num1, num2);
   document.getElementById('receptor').innerHTML = 'Resultado da soma: ' + resultado;
}

// Função para ser chamada ao clicar no botão "Subtrair"
function subtrair() {
   let num1 = parseFloat(document.getElementById('n1').value);
   let num2 = parseFloat(document.getElementById('n2').value);
   let resultado = subtracao(num1, num2);
   document.getElementById('receptor').innerHTML = 'Resultado da subtração: ' + resultado;
}

// Função para ser chamada ao clicar no botão "Multiplicar"
function multiplicar() {
   let num1 = parseFloat(document.getElementById('n1').value);
   let num2 = parseFloat(document.getElementById('n2').value);
   let resultado = multiplicacao(num1, num2);
   document.getElementById('receptor').innerHTML = 'Resultado da multiplicação: ' + resultado;
}

// Função para ser chamada ao clicar no botão "Dividir"
function dividir() {
   let num1 = parseFloat(document.getElementById('n1').value);
   let num2 = parseFloat(document.getElementById('n2').value);
   let resultado = divisao(num1, num2);
   document.getElementById('receptor').innerHTML = 'Resultado da divisão: ' + resultado;
}