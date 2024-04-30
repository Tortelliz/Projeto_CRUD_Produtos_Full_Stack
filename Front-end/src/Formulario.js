//Este arquivo faz parte do "View" do padrão MVC, Está compondo o arquivo "App.js", é o formulário de preenchimento do usuário, qual ele faz as requisições e interações com o software.

function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return(
        <form>
            <input type='text' value={obj.nome} onChange={eventoTeclado} name="nome" placeholder="Nome" className="form-control" />
            <input type='text' value={obj.marca} onChange={eventoTeclado} name="marca" placeholder="Marca" className="form-control" />

            {
                botao
                ?
                <button type="button" onClick={cadastrar} className="btn btn-secondary btn-cadastrar">
                Cadastrar
                </button>
                :
                <div>
                    <input type='button' value="Altrerar" onClick={alterar} className="btn btn-secondary" />
                    <input type='button' value="Remover" onClick={remover} className="btn btn-secondary" />
                    <input type='button' value="Cancelar" onClick={cancelar} className="btn btn-secondary" />
                </div>   
            }
        </form>
    )
}

export default Formulario;
