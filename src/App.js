import { Component } from 'react';

import './App.scss';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      itensExcluidos: [],
      listaDeCompras: [
        {
          id: 0,
          imagem: 'https://m.media-amazon.com/images/I/81-Yw7YyRBL._AC_SX425_.jpg',
          nome: 'Arroz Camil'
        },
        {
          id: 1,
          imagem: 'https://m.media-amazon.com/images/I/61eZFRX7gAL._AC_SY879_.jpg',
          nome: 'Feijão Camil'
        },
        {
          id: 2,
          imagem: 'https://api.tendaatacado.com.br/fotos/1269_mini.jpg',
          nome: 'Macarrão'
        },
      ]
    }
  }

  render() {
    let temp = [];

    const handlerExcluirProduto = (item) => {
      this.setState({
        itensExcluidos: [...this.state.itensExcluidos, item],
      })

      const novoArray = this.state.listaDeCompras.filter(produto => produto.id !== item.id);

      this.setState({
        listaDeCompras: novoArray
      });
    }

    const handlerRestaurar = () => {
      this.state.itensExcluidos.forEach(produto => {

        temp.push(produto);
        this.setState({
          listaDeCompras: [...this.state.listaDeCompras, ...temp]
        })
      })

      this.setState({
        itensExcluidos: []
      });
    }

    return (
      <>
        <button onClick={() => handlerRestaurar()}>
          Restaurar Página
        </button>
        <section>
          {
            this.state.listaDeCompras.map(produto => (
              <div className="card">
                <img src={produto.imagem} alt="" />
                <h2>{produto.nome}</h2>
                <button onClick={() => handlerExcluirProduto(produto)}>
                  Excluir produto
                </button>
              </div>
            ))
          }
        </section>
      </>
    );
  }
}