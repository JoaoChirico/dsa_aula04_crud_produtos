let idGerador = 2;
let listaProdutos = [
    {
        id: 1,
        nome: "arroz",
        categoria: "alimento",
        preco: 5.80
    },
    {
        id: 2,
        nome: "leite",
        categoria: "bebida",
        preco: 4.25
    }

];

function listar() {
    return listaProdutos;
}

function inserir(produto) {
    produto.id = ++idGerador;
    listaProdutos.push(produto);
}

function buscarPorId(id){
    /*for(let i=0; i<listaProdutos.length; i++){
        if(listaProdutos[i].id === id){
            return listaProdutos[i];
        }
    }*/

    for(let produto of listaProdutos) {
        if(produto.id === id){
            return produto;
        }
    }
}

function main() {
    console.log(listar());

    inserir({
        nome: "Feijao",
        catergoria: "alimento",
        preco: 8.00
    });
    inserir({
        nome: "Suco de laranja",
        catergoria: "bebida",
        preco: 9.20
    });
    inserir({
        nome: "Coca",
        catergoria: "bebida",
        preco: 10
    });

    console.log(listar());

    console.log(buscarPorId(5));
    console.log(buscarPorId(2));

}


main();