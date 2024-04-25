/*
3 - Faça um programa que calcule e imprima o salário a ser transferido para um funcionário
    - Para realizar o calculo receba o valor bruto e o adcional dos benefícios
    - O salário a ser transferido é calculado da seguinte maneira:
        Valor do salário bruto - Percentual de Impostos mediante a faixa salarial + adicional dos beneficios
        (SB - I) + B
    - Para calcular o percentual de imposto segue as alíquotas:
        de R$ 0 a R$ 1100.00 = 5%
        de R$ 1100.01 a R$ 2500.00 = 10%
        maior que R$ 2500.01 = 15%

    Exemplo:
        entrada = 
            2000
            250    
            
        saida =
            2050 

*/

const { gets, print } = require("./funcoes-auxiliares-ex3");

const salarioBruto = gets();
const beneficios = gets();

function calcularPorcentagem(valor, percentual) {
  return valor * (percentual / 100);
}

function pegarAlicota(salario) {
  if (salario >= 0 && salario <= 1100) {
    return 5;
  } else if (salario >= 1100.01 && salario <= 2500) {
    return 10;
  } else {
    return 15;
  }
}
const aliquotaImposto = pegarAlicota(salarioBruto);
const valorImposto = calcularPorcentagem(salarioBruto, aliquotaImposto);

const valorATransferir = salarioBruto - valorImposto + beneficios;

print(valorATransferir);

