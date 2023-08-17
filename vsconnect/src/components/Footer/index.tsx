import "./style.css";
import Logo from "../../assets/img/logo.svg";
import Facebook from "../../assets/img/facebook.svg";
import Instagram from "../../assets/img/instagram.svg";
import Linkedin from "../../assets/img/linkedin.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="container rodape">
          {/* <div className="span_dicas">
            <img src={Dev} alt="" />
            <div className="span_dicas_texto">
              <p>
                Temos algumas dicas para o seu serviço ou freela ser um sucesso,
                acesse nossa página de recomendações para saber mais.
              </p>
              <a className="botao botao_dicas" href="#">
                mais dicas
              </a>
            </div>
          </div> */}
          <div className="rodape_conteudo">
            <div className="rodape_conteudo_paginas">
              <h2>Páginas</h2>
              <ul>
                <li>
                  <Link className="linksfooter" to="login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="linksfooter" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="linksfooter" to="servicos">
                    Listar Serviços
                  </Link>
                </li>
                <li>
                  <Link className="linksfooter" to="cadastroserv">
                    Cadastrar Cliente
                  </Link>
                </li>
                <li>
                  <Link className="linksfooter" to="cadastrodev">
                    Cadastrar Desenvolvedor
                  </Link>
                </li>
              </ul>
            </div>
            <img src={Logo} alt="" />
            <div className="rodape_conteudo_contatos">
              <h2>Contatos</h2>
              <div>
                <a href="#">
                  <img src={Facebook} alt="" />
                </a>
                <a href="#">
                  <img src={Instagram} alt="" />
                </a>
                <a href="#">
                  <img src={Linkedin} alt="" />
                </a>
              </div>
              <a href="mailto:">contato@vsconnect.com</a>
            </div>
          </div>
          <p>todos os direitos reservados ©.</p>
        </div>
      </footer>
      ;
    </>
  );
}
export default Footer;
