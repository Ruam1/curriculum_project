import React from "react";
import { useState } from "react";
import { Div, Button } from "./style.js"; //
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [cursor, setCursor] = useState(false);

  const handleSendEmail = (e) => {
    e.preventDefault();
    setCursor(true);
    if (nome === "" || email === "" || mensagem === "" || assunto === "") {
      toast.warn("Por favor, preencha todos os campos!");
      setCursor(false);
      return;
    }
    const templateParams = {
      from_name: nome,
      email: email,
      assunto: assunto,
      message: mensagem,
    };
    emailjs
      .send(
        "service_a9gqp5e",
        "template_3pyarib",
        templateParams,
        "7qQTxHCvg671qvdTK"
      )
      .then(
        (response) => {
          setNome("");
          setEmail("");
          setAssunto("");
          setMensagem("");
          toast.success(
            "Obrigado por entrar em contato! Responderei em breve."
          );
          setCursor(false);
        },
        (error) => {
          toast.error(
            "Wow, algo de inesperado ocorreu, tente o contato pelo meu número pessoal."
          );
          setCursor(false);
        }
      );
  };

  return (
    <>
      <Div cursor={cursor}>
        <h1>Contatos</h1>
        <div className="container">
          <div className="formDiv">
            <form className="form" onSubmit={handleSendEmail}>
              <input
                className="input"
                type="text"
                placeholder="Digite seu nome e sobrenome"
                onChange={(e) => setNome(e.target.value)}
                value={nome}
              />
              <input
                className="input"
                type="text"
                placeholder="Digite seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                className="input"
                type="text"
                placeholder="Digite o assunto"
                onChange={(e) => setAssunto(e.target.value)}
                value={assunto}
              />
              <textarea
                className="textarea"
                placeholder="Sua mensagem..."
                onChange={(e) => setMensagem(e.target.value)}
                value={mensagem}
              />
              <Button type="submit">Enviar</Button>
            </form>
            <ToastContainer />
          </div>
          <div className="contato">
            <div className="email">
              <h2>E-mail para contato</h2>
              <span>ruamribeiroramos@gmail.com</span>
            </div>
            <div className="redes">
              <h2>Adicione nas redes</h2>
              <div className="rede">
                <a
                  href="https://github.com/Ruam1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="icon" size={30} />
                </a>

                <span>/ruam-ribeiro</span>
              </div>
              <div className="rede">
                <a
                  href="https://www.linkedin.com/in/ruam-ribeiro-812280219"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="icon" size={30} />
                </a>
                <span>/Ruam1</span>
              </div>
            </div>
          </div>
        </div>
      </Div>
    </>
  );
};

export default Contact;
