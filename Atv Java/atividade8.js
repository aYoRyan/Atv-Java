
const item1 = {
    nome: "Camiseta",
    preco: 200,
    quantidade: 2
};

const item2 = {
    nome: "Calça",
    preco: 79.99,
    quantidade: 1
};

const item3 = {
    nome: "Tênis",
    preco: 799.99,
    quantidade: 1
};

const carrinhoDeCompras = [item1, item2, item3];

function calcularTotal(carrinho) {
    let total = 0;
    for (const item of carrinho) {
        total += item.preco * item.quantidade;
    }
    return total;
}

for (const item of carrinhoDeCompras) {
    console.log(`${item.nome} - Preço: $${item.preco.toFixed(2)} - Quantidade: ${item.quantidade}`);
}

const totalDoCarrinho = calcularTotal(carrinhoDeCompras);
console.log(`Total do carrinho: $${totalDoCarrinho.toFixed(2)}`);
