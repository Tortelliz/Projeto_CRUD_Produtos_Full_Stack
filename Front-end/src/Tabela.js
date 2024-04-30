//Este arquivo faz parte do "View" do padrão MVC, Está compondo o arquivo "App.js", é a tabela que retorna os dados que o usuário cadastrou e ou alterou.

function Tabela({vetor, selecionar}){
    return(
       <table className="table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Seleção</th>
                </tr>
            </thead>

            <tbody>
                {
                    vetor.map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice+1}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.marca}</td>
                            <td><button onClick={() => {selecionar(indice)}} className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
       </table> 
    )
}

export default Tabela;
