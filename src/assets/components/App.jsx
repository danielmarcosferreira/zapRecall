import styled from "styled-components";
import GlobalStyle from "../css/GlobalStyle";
import Deck from "./Deck";

function App() {
  return (
    <ScreenContainer>
      <GlobalStyle />
      <Deck />
    </ScreenContainer>
  );
}

export default App;

const cardsReact = [
  {
    pergunta: "O que é JSX?",
    resposta: "Uma extensão de linguagem do JavaScript",
  },
  {
    pergunta: "O React é __",
    resposta: "uma biblioteca JavaScript para construção de interfaces",
  },
  { pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula" },
  { pergunta: "Podemos colocar __ dentro do JSX ", resposta: "expressões" },
  {
    pergunta: "O ReactDOM nos ajuda __ ",
    resposta: "interagindo com a DOM para colocar componentes React na mesma",
  },
  {
    pergunta: "Usamos o npm para __",
    resposta: "gerenciar os pacotes necessários e suas dependências",
  },
  {
    pergunta: "Usamos props para __",
    resposta: "passar diferentes informações para componentes ",
  },
  {
    pergunta: "Usamos estado (state) para __",
    resposta:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
  },
];
const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
