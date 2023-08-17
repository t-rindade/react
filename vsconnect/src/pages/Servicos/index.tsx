import "./style.css";
import CardServ from "../../components/CardServ";
import { useState } from "react";

function Servicos() {
  const [servico, setServico] = useState<any[]>([
    {
      titulo:
        "Desenvolvimento de site institucional - Gateway de Pagamento / Fintech",
      valor: "R$ 1300,00",
      descricao:
        "Desenvolver um site responsivo que seja utilizado como uma plataforma de apresentação do nosso gateway de pagamento. O objetivo principal deste projeto é criar um site atraente e informativo, que demonstre as funcionalidades e benefícios do nosso gateway de pagamento para potenciais clientes.",
      skills: ["HTML", "CSS", "REACT"],
    },
    {
      titulo: "Bot telegram Pagamento",
      valor: "R$ 2400,00",
      descricao:
        "Preciso fazer um código em python para um bot do telegram. O bot será para solicitação de pagamento.",
      skills: ["PYTHON"],
    },
    {
      titulo: "Caixa Rápido",
      valor: "R$ 1200,00",
      descricao:
        "Preciso fazer um software que permita ao usuário fazer o upload de seu extrato bancário em formato( ofx). Dentro do software o mesmo poderá categorizar todas as suas receitas e despesas, tendo categorias sugeridas pelo software e permitindo também personalizações. Após o lançamento de vários extratos o software irá entender que são lançamentos parecidos e fará a categorização de maneira automática, cabendo ao usuário somente categorizar as receitas e despesas que não se repetem. Após a categorização o software irá emitir gráficos e relatórios baseados na categorização das contas.",
      skills: ["PYTHON"],
    },
  ]);

  const [skillDigitada, setSkillDigitada] = useState<string>("");

  const [listaServicoFiltrados, setListaServicoFiltrados] =
    useState<any[]>(servico);

  function buscarPorSkill(event: any) {
    event.preventDefault();

    const servicoFiltrados = servico.filter((serv: any) =>
      serv.skills.includes(skillDigitada.toLocaleUpperCase())
    );

    if (servicoFiltrados.length === 0) {
      alert("Nenhum serviço encontado com essa skill!");
    } else {
      setListaServicoFiltrados(servicoFiltrados);
    }
  }

  function retornoServicoGeral(event: any) {
    if (event.target.value === "") {
      setListaServicoFiltrados(servico);
    }
    setSkillDigitada(event.target.value);
  }

  return (
    <>
      <main id="lista-servicos">
        <div className="container container_lista_servicos">
          <div className="lista_servicos_conteudo">
            <h2>Lista de Serviços</h2>
            <hr />
            <form method="post" onSubmit={buscarPorSkill}>
              <div className="wrapper_form">
                <label htmlFor="busca">Procurar serviços</label>
                <div className="campo-label">
                  <input
                    type="search"
                    name="campo-busca"
                    id="busca"
                    placeholder="Buscar serviços por tecnologias..."
                    onChange={retornoServicoGeral}
                  />
                  <button type="submit">Buscar</button>
                </div>
              </div>
            </form>
            <div className="wrapper_lista">
              <ul>
                {listaServicoFiltrados.map((serv: any, index: number) => {
                  return (
                    <li>
                      <CardServ
                        titulo={serv.titulo}
                        valor={serv.valor}
                        descricao={serv.descricao}
                        techs={serv.skills}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Servicos;
