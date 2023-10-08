import styled from "styled-components";
import FlashCard from "./FlashCard";
import Header from "./Header";
import { useState } from "react";

export default function Deck({ cards }) {
    const [opened, setOpened] = useState(null)
    const [answered, setAnswered] = useState([])

    function answerQuestion (status) {
        if (opened !== null) {
            const newArray = [...answered, {index: opened, status: status}]
            setAnswered(newArray)
            setOpened(null)carta virada
        }
    }

  return (
    <>
      <Header />
      {cards.map((c, i) => (
        <FlashCard 
            key={i} 
            number={i + 1} 
            openCard={() => setOpened(i)}
            isOpened = {i === opened}
            question = {c.question}
            answer = {c.answer}
        />
      ))}

      <FooterContainer>
        <ContainerBotoes>
          <ChoiceButton onClick={() => answerQuestion("error")}>Não lembrei</ChoiceButton>
          <ChoiceButton onClick={() => answerQuestion("almost")}>Quase não lembrei</ChoiceButton>
          <ChoiceButton onClick={() => answerQuestion("right")}>Zap!</ChoiceButton>
        </ContainerBotoes>
        CONCLUIDOS X/{cards.length}
      </FooterContainer>
    </>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;
const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
`;
const ChoiceButton = styled.button`
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: blue;
  border-radius: 5px;
  border: 1px solid blue;
  padding: 5px;
`;
