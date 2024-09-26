const prompt = require('prompt-sync')()

function evenOrOddOrZero() {
    let num = parseInt(prompt('Digite um número: '))

    if (num === 0) {
        console.log("O número é 0")
    } else if (num % 2 === 0) {
        console.log("O número é par")
    } else {
        console.log("O número é ímpar")
    }
}

function findLargerNumber() {
    let num1 = parseFloat(prompt('Digite o primeiro número: '))
    let num2 = parseFloat(prompt('Digite o segundo número: '))

    if (num1 > num2) {
        console.log(`O maior número é: ${num1}`)
    } else if (num2 > num1) {
        console.log(`O maior número é: ${num2}`)
    } else {
        console.log('Os números são iguais')
    }
}

function queueAssignment() {
    let age = parseInt(prompt('Digite sua idade: '))
    let disabled = prompt('Você é deficiente? (S/N): ').toUpperCase()
    let pregnant = prompt('Você está grávida? (S/N): ').toUpperCase()

    if (age > 65 || disabled === 'S' || pregnant === 'S') {
        console.log("Você deve ir para a fila preferencial")
    } else {
        console.log("Você deve ir para a fila comum")
    }
}

function checkAgeForEvent() {
    let age = parseInt(prompt('Digite sua idade: '))

    if (age < 16) {
        console.log("Menores de 16 anos: Não pode entrar")
    } else if (age < 18) {
        console.log("Menores de 18 anos: Apenas acompanhado dos responsáveis")
    } else {
        console.log("Maiores de 18 anos: Entrada permitida")
    }
}

function verifyLoginAndPassword() {
    let correctLogin = 'usuario'
    let correctPassword = 'senha123'

    let login = prompt('Digite seu login: ')
    let password = prompt('Digite sua senha: ')

    if (login === correctLogin && password === correctPassword) {
        console.log("Login bem-sucedido")
    } else {
        if (login !== correctLogin) {
            console.log("Login incorreto")
        }

        if (password !== correctPassword) {
            console.log("Senha incorreta")
        }
    }
}

function studentGrade() {
    let grade1 = parseFloat(prompt('Digite a primeira nota: '))
    let grade2 = parseFloat(prompt('Digite a segunda nota: '))

    let average = (grade1 + grade2) / 2

    if (average >= 6) {
        console.log("Aluno aprovado")
    } else {
        let recoveryGrade = parseFloat(prompt('Digite a nota de recuperação: '))
        let newAverage = (recoveryGrade + Math.max(grade1, grade2)) / 2

        if (newAverage >= 6) {
            console.log("Aluno aprovado após recuperação")
        } else {
            console.log("Aluno reprovado")
        }
    }
}

function divisibilityCheck() {
    let num = parseInt(prompt('Digite o número a ser verificado: '))
    let divisor = parseInt(prompt('Digite o divisor: '))

    if (num % divisor === 0) {
        console.log(`${num} é divisível por ${divisor}`)
    } else {
        console.log(`${num} não é divisível por ${divisor}`)
    }
}

function quizGame() {
    let score = 0
    let mistakes = 0

    let questions = [
        {
            question: 'Qual é a linguagem de programação que roda no navegador?',
            options: ['A) Java', 'B) Python', 'C) JavaScript'],
            answer: 'C'
        },
        {
            question: 'Qual é o método usado para imprimir algo no console em Java?',
            options: ['A) print()', 'B) console.log()', 'C) System.out.print()'],
            answer: 'C'
        },
        {
            question: 'Qual é o símbolo utilizado para indicar o início de um comentário em linha no JavaScript?',
            options: ['A) //', 'B) <!-- -->', 'C) /* */'],
            answer: 'A'
        },
        {
            question: 'Qual desses tipos de dados não existe em Java?',
            options: ['A) int', 'B) boolean', 'C) decimal'],
            answer: 'C'
        },
        {
            question: 'Qual é o valor padrão de uma variável booleana em Java?',
            options: ['A) true', 'B) false', 'C) 0'],
            answer: 'B'
        }
    ]

    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i].question)
        console.log(questions[i].options.join(' '))
        let userAnswer = prompt('Sua resposta: ').toUpperCase()

        if (userAnswer === questions[i].answer) {
            score++
        } else {
            mistakes++
            if (mistakes === 3) {
                console.log("Você perdeu o jogo!")
                return
            }
        }
    }

    console.log(`Você terminou o jogo com ${score} respostas corretas!`)
}

function mainMenu() {
    while (true) {
        console.log("Escolha um exercício para executar:")
        console.log("1 - Par, Ímpar ou Zero")
        console.log("2 - Encontrar maior número")
        console.log("3 - Encaminhamento de fila")
        console.log("4 - Verificação de idade para evento")
        console.log("5 - Verificar login e senha")
        console.log("6 - Avaliação de nota do aluno")
        console.log("7 - Verificação de divisibilidade")
        console.log("8 - Jogo de perguntas e respostas")
        console.log("0 - Sair")

        let choice = parseInt(prompt("Digite sua opção: "))

        switch (choice) {
            case 1:
                evenOrOddOrZero()
                break

            case 2:
                findLargerNumber()
                break

            case 3:
                queueAssignment()
                break

            case 4:
                checkAgeForEvent()
                break

            case 5:
                verifyLoginAndPassword()
                break

            case 6:
                studentGrade()
                break

            case 7:
                divisibilityCheck()
                break

            case 8:
                quizGame()
                break

            case 0:
                console.log("Saindo...")
                return

            default:
                console.log("Opção inválida. Tente novamente.")
        }
    }
}

mainMenu();
