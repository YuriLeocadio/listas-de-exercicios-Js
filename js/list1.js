const prompt = require('prompt-sync')()

function sum() {
    let num1 = parseFloat(prompt('Digite o primeiro número: '))
    let num2 = parseFloat(prompt('Digite o segundo número: '))

    let sum = num1 + num2

    console.log(`A soma dos números é: ${sum}`)
}

function user() {
    let name = prompt('Digite seu primeiro nome: ')
    let surname = prompt('Digite seu sobrenome: ')

    let user = name + " " + surname

    console.log(`Olá ${user}`)
}

function convertRealToDollar() {
    let amountInReais = parseFloat(prompt('Digite o valor em dólar: '))
    let exchangeRate = 5.25

    let amountInDollars = amountInReais / exchangeRate

    console.log(`O valor em dólares é: ${amountInDollars.toFixed(2)}`)
}

function findPredecessorAndSuccessor() {
    let number = parseInt(prompt('Digite um número inteiro: '))

    let predecessor = number - 1
    let successor = number + 1

    console.log(`O antecessor do número escolhido é: ${predecessor}, e o sucessor é: ${successor}`)
}

function calculateLandValue() {
    let width = parseFloat(prompt('Digite a largura do terreno em metros: '))
    let length = parseFloat(prompt('Digite o comprimento do terreno em metros: '))
    let valuePerMeter = parseFloat(prompt('Digite o valor por metro quadrado do terreno: '))

    let area = width * length
    let totalValue = area * valuePerMeter

    console.log(`A área do terreno é: ${area}m² e o valor total é R$${totalValue.toFixed(2)}`)
}

function calculateAverageConsumption() {
    let distanceTraveled = parseFloat(prompt('Digite a distância percorrida em km: '))
    let fuelSpent = parseFloat(prompt('Digite o total gasto em combustível em litros: '))

    let averageConsumption = distanceTraveled / fuelSpent

    console.log(`O consumo médio do veículo é de ${averageConsumption.toFixed(2)} km/L`)
}

function calculateAverageGrade() {
    let grade1 = parseFloat(prompt('Digite a primeira nota: '))
    let grade2 = parseFloat(prompt('Digite a primeira nota: '))
    let grade3 = parseFloat(prompt('Digite a primeira nota: '))
    let grade4 = parseFloat(prompt('Digite a primeira nota: '))

    let average = (grade1 + grade2 + grade3 + grade4) / 4

    console.log(`A média aritmética é: ${average.toFixed(1)}`)
}

function convertFahrenheitToCelsius() {
    let tempFahrenheit = parseFloat(prompt('Digite a temperatura em Fahrenheit: '))

    let tempCelsius = (tempFahrenheit - 32) / 1.8

    console.log(`A temperatura em Celcius é: ${tempCelsius.toFixed(2)}°C`)
}

function mainMenu() {
    while (true) {
        console.log("Escolha um exercício para rodar:")
        console.log("1 - Soma entre dois números")
        console.log("2 - Olá, usuário")
        console.log("3 - Converter reais para dólares")
        console.log("4 - Antecessor e sucessor")
        console.log("5 - Calcular valor do terreno")
        console.log("6 - Consumo médio do veículo")
        console.log("7 - Média aritmética das notas")
        console.log("8 - Converter Fahrenheit para Celsius")
        console.log("0 - Sair")

        let choice = parseInt(prompt("Digite sua opção: "))

        switch (choice) {
            case 1:
                sum()
                break;

            case 2:
                user()
                break;

            case 3:
                convertRealToDollar()
                break;

            case 4:
                findPredecessorAndSuccessor()
                break;

            case 5:
                calculateLandValue()
                break;

            case 6:
                calculateAverageConsumption()
                break;

            case 7:
                calculateAverageGrade()
                break;

            case 8:
                convertFahrenheitToCelsius()
                break;

            case 0:
                console.log("Saindo...")
                return;

            default:
                console.log("Opção inválida. Tente novamente.")
        }
    }
}

mainMenu();