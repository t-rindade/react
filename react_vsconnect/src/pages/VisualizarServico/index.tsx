//rotas
import { Link, useParams } from "react-router-dom";

//hooks
import { useState, useEffect } from "react";

//estilização
import "./style.css";

import api from "../../utils/api";

function VisualizarServico() {
  const { idServico } = useParams();

  const [nome, setNome] = useState<string>("");
  const [valor, setValor] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [listaTechs, setListaTechs] = useState<string[]>([]);

  useEffect(() => {
    document.title = "Servico " + nome + " - VSConnect";

    buscarUsuarioPorId();
  }, []);

  function buscarUsuarioPorId() {
    api
      .get("servicos/" + idServico)
      .then((response: any) => {
        setNome(response.data.nome);
        setValor(response.data.valor);
        setDescricao(response.data.descricao);
        setListaTechs(response.data.techs);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <main id="main_visualizarservico">
      <div className="container">
        <h1>Pagina de Servico</h1>
        <div className="servico">
          <div className="topo_servico">
            <h2>{nome}</h2>
            <span>{valor}</span>
          </div>
          <p>{descricao}</p>
          <div className="techs">
            {listaTechs.map((tech: any, index: number) => {
              return <span key={index}>{tech}</span>;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default VisualizarServico;
