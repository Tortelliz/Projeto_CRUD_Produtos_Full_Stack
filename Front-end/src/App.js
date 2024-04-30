//Este arquivo faz parte do "View" do padrão MVC, usada para interação do usuário com o software e suas funcionalidades, aqui as funções são atribuídas a interface e a interface é montada e consolidada em "//Retorno".

import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  //Objeto produto
  const produto = {
    codigo : 0,
    nome : '',
    marca : ''
  }

  //UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);

  //UseEffect
  useEffect(()=>{
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido))
  }, []);

  //Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjProduto({...objProduto, [e.target.name]:e.target.value});
  }

  // Cadastrar produto
  const cadastrar = () => {
    fetch("http://localhost:8080/cadastrar", {
      method: 'post',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        //Mensagem de erro
        throw new Error('Erro ao cadastrar o produto');
      }
      return response.json();
    })
    .then(retorno_convertido => {
      if (retorno_convertido.mensagem !== undefined) {
        alert(retorno_convertido.mensagem);
      } else {
        setProdutos([...produtos, retorno_convertido]);
        limparFormulario();
        //Mensagem de sucesso
        alert("Produto cadastrado com sucesso!");
      }
    })
    //Tratamento de erro
    .catch(error => {
      console.error('Erro na requisição:', error);
      alert('Erro ao cadastrar o produto. Verifique sua conexão ou tente novamente mais tarde.');
    });
  }  

  //Limpar Formulario
  const limparFormulario = () => {
    setObjProduto(produto);
    setBtnCadastrar(true);
  }

  //Selecionar produto
  const selecionarProduto = (indice) => {
    setObjProduto(produtos[indice])
    setBtnCadastrar(false);
  }

  //Remover produto
  const remover = () => {
    fetch("http://localhost:8080/remover/"+objProduto.codigo, {
      method:'delete',
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

      //Mensagem
      alert(retorno_convertido.mensagem);

      //Cópia do vetor de produtos
      let vetorTemp = [...produtos];

      //Índice
      let indice = vetorTemp.findIndex((p) => {
        return p.codigo === objProduto.codigo;
      });

      //Remover produto do vetorTemp
      vetorTemp.splice(indice, 1);

      //Atualizar o vetor de produtos
      setProdutos(vetorTemp);

      //Limpar formulário
      limparFormulario();
    
    });
  }

  //Alterar produto
  const alterar = () => {
    fetch("http://localhost:8080/alterar", {
      method:'put',
      body:JSON.stringify(objProduto),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
    
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{

          //Cópia do vetor de produtos
          let vetorTemp = [...produtos];

          //Índice
          let indice = vetorTemp.findIndex((p) => {
            return p.codigo === objProduto.codigo;
          });

          //Alterar produto do vetorTemp
          vetorTemp[indice] = objProduto;

          //Atualiozar o vetor de produtos
          setProdutos(vetorTemp);

          //Limpar formulário
          limparFormulario();

          //Mensgaem
          alert("Produto alterado com sucesso!");
      }

    });
  }

  //Retorno
  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objProduto} cancelar={limparFormulario} remover={remover} alterar={alterar} />
      <Tabela vetor={produtos} selecionar={selecionarProduto} />
    </div>
  );
}

export default App;
