const prompt = require('prompt-sync')();

function countdownTimer() {
    let seconds = parseInt(prompt('Digite um número entre 1 e 59 segundos: '));

    if (seconds < 1 || seconds > 59) {
        console.log('Erro: Digite um número válido entre 1 e 59.');
        countdownTimer();
    } else {
        console.log(`Contando até ${seconds} segundos...`);
        let timer = setInterval(function () {
            console.log(`${seconds} segundos restantes...`);
            seconds--;

            if (seconds === 0) {
                clearInterval(timer);
                console.log('Tempo esgotado!');
            }
        }, 1000);
    }
}

function multiplicationTable() {
    let number = parseInt(prompt('Digite um número para ver a tabuada: '));

    console.log(`Tabuada do ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

function evenNumbersBetween() {
    let num1 = parseInt(prompt('Digite o primeiro número: '));
    let num2 = parseInt(prompt('Digite o segundo número: '));

    console.log(`Números pares entre ${num1} e ${num2}:`);
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

function guessingGame() {
    let targetNumber = parseInt(prompt('Digite o número que alguém deve adivinhar: '));
    let guess;
    let attempts = 0;

    while (true) {
        guess = parseInt(prompt('Tente adivinhar o número: '));
        attempts++;

        if (guess === targetNumber) {
            console.log(`Parabéns! Você acertou o número em ${attempts} tentativas!`);
            break;
        } else if (Math.abs(targetNumber - guess) <= 2) {
            console.log('Quase lá!');
        } else if (guess < targetNumber) {
            console.log('Muito baixo.');
        } else {
            console.log('Muito alto.');
        }
    }
}

function loginSystem() {
    const correctLogin = 'usuario123';
    const correctPassword = 'senha123';
    let attempts = 0;

    while (attempts < 3) {
        let login = prompt('Digite seu login: ');
        let password = prompt('Digite sua senha: ');

        if (login === correctLogin && password === correctPassword) {
            console.log('Login bem-sucedido!');
            return;
        } else {
            attempts++;
            if (attempts === 3) {
                console.log('Última tentativa, mais um erro e seu acesso será bloqueado!');
            }

            if (login !== correctLogin && password !== correctPassword) {
                console.log('Login e senha incorretos.');
            } else if (login !== correctLogin) {
                console.log('Login incorreto.');
            } else {
                console.log('Senha incorreta.');
            }
        }
    }

    console.log('Acesso bloqueado após 3 tentativas erradas.');
}

function drawPyramid() {
    let floors;

    floors = parseInt(prompt("Digite o número de andares da pirâmide: "));

    for (let i = 1; i <= floors; i++) {
        for (let spaces = 1; spaces <= floors - i; spaces++) {
            process.stdout.write(" ");
        }

        for (let stars = 1; stars <= (2 * i - 1); stars++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

function drawRectangle() {
    let width;
    let height;

    width = parseInt(prompt("Digite a largura do retângulo: "));
    height = parseInt(prompt("Digite a altura do retângulo: "));

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

function mainMenu() {
    while (true) {
        console.log('\nEscolha uma das opções abaixo:');
        console.log('1) Cronômetro');
        console.log('2) Tabuada');
        console.log('3) Números pares entre dois números');
        console.log('4) Jogo da adivinhação');
        console.log('5) Verificação de login e senha');
        console.log('6) Pirâmide de asteriscos');
        console.log('7) Retângulo de asteriscos');
        console.log('0) Sair');

        let choice = parseInt(prompt('Digite o número da opção escolhida: '));

        switch (choice) {
            case 1:
                countdownTimer();
                break;

            case 2:
                multiplicationTable();
                break;

            case 3:
                evenNumbersBetween();
                break;

            case 4:
                guessingGame();
                break;

            case 5:
                loginSystem();
                break;

            case 6:
                drawPyramid();
                break;

            case 7:
                drawRectangle();
                break;

            case 0:
                console.log('Saindo do programa...');
                return;

            default:
                console.log('Opção inválida, tente novamente.');
        }
    }
}

mainMenu();
