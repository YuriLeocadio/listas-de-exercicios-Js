const prompt = require('prompt-sync')();

// Função para calcular o total de vendas do dia
function calculateTotalSales(sales) {
    return sales.reduce((total, sale) => total + sale, 0);
}

// Função para encontrar as vendas mínima e máxima
function findMinMaxSales(sales) {
    return {
        min: Math.min(...sales),
        max: Math.max(...sales),
    };
}

// Função para calcular a média de vendas
function calculateAverageSales(sales) {
    const total = calculateTotalSales(sales);
    return total / sales.length || 0;
}

// Função para contar números pares em um array
function countEvenNumbers(array) {
    return array.filter(num => num % 2 === 0).length;
}

function mainMenu() {
    let sales = [];
    let items = [];
    let prices = [];

    while (true) {
        console.log('\nMenu:');
        console.log('1) Registrar uma venda');
        console.log('2) Mostrar total de vendas');
        console.log('3) Encontrar venda mínima e máxima');
        console.log('4) Calcular média de vendas');
        console.log('5) Contar números pares');
        console.log('6) Lista de compras');
        console.log('0) Sair');

        let option = parseInt(prompt('Escolha uma opção: '));

        switch (option) {
            case 1:
                let sale = parseFloat(prompt('Digite o valor da venda: '));
                if (sale >= 0) {
                    sales.push(sale);

                    console.log('Venda registrada.');
                } else {
                    console.log('Valor inválido. Digite um número positivo.');
                }
                break;

            case 2:
                let totalSales = calculateTotalSales(sales);

                console.log(`Total de vendas do dia: R$${totalSales.toFixed(2)}`);
                break;

            case 3:
                if (sales.length > 0) {
                    let { min, max } = findMinMaxSales(sales);

                    console.log(`Venda mínima: R$${min.toFixed(2)}`);
                    console.log(`Venda máxima: R$${max.toFixed(2)}`);
                } else {
                    console.log('Nenhuma venda registrada.');
                }
                break;

            case 4:
                let averageSales = calculateAverageSales(sales);

                console.log(`Média de vendas: R$${averageSales.toFixed(2)}`);
                break;

            case 5:
                let numberList = [3, 5, 6, 7, 8, 10, 22, 55, 110];
                let evenCount = countEvenNumbers(numberList);

                console.log(`Quantidade de números pares: ${evenCount}`);
                break;

            case 6:
                manageShoppingList(items, prices);
                break;

            case 0:
                console.log('Saindo do programa...');
                return;

            default:
                console.log('Opção inválida. Tente novamente.');
        }
    }
}

// Função para gerenciar a lista de compras
function manageShoppingList(items, prices) {
    while (true) {
        console.log('\nMenu da Lista de Compras:');
        console.log('1) Adicionar item');
        console.log('2) Ver lista de compras');
        console.log('3) Remover item');
        console.log('4) Imprimir lista por preço');
        console.log('5) Voltar ao menu principal');

        let choice = parseInt(prompt('Escolha uma opção: '));

        switch (choice) {
            case 1:
                let item = prompt('Digite o nome do item: ');
                let price = parseFloat(prompt('Digite o preço do item: '));

                items.push(item);
                prices.push(price);
                console.log('Item adicionado.');
                break;

            case 2:
                console.log('Lista de Compras:');
                items.forEach((item, index) => {
                    console.log(`${item}: R$${prices[index].toFixed(2)}`);
                });
                break;

            case 3:
                let itemToRemove = prompt('Digite o nome do item a remover: ');
                let index = items.indexOf(itemToRemove);

                if (index > -1) {
                    items.splice(index, 1);
                    prices.splice(index, 1);
                    console.log('Item removido.');
                } else {
                    console.log('Item não encontrado.');
                }
                break;

            case 4:
                // Ordenar itens por preço e exibir
                const sortedItems = items.map((item, index) => ({ item, price: prices[index] }))
                    .sort((a, b) => a.price - b.price);

                console.log('Lista de Compras por Preço:');
                sortedItems.forEach(({ item, price }) => {
                    console.log(`${item}: R$${price.toFixed(2)}`);
                });
                break;

            case 5:
                return;

            default:
                console.log('Opção inválida. Tente novamente.');
        }
    }
}

mainMenu();
