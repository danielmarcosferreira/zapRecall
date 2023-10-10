import styled from "styled-components";
import { useState } from "react";
import collors from "../css/collors";
import setaVirar from "../img/seta_virar.png";
import Icon from "./Icon";

export default function FlashCard({
  number,
  openCard,
  isOpened,
  question,
  answer,
  status,
  turnCard,
  turned
}) {
  const { RED, YELLOW, GREEN, GRAY } = collors;

  function open() {
    if (status === "no status") {
      openCard();
    }
  }

  function chooseColor() {
    switch (status) {
      case "error":
        return RED;
      case "almost":
        return YELLOW;
      case "right":
        return GREEN;
      default:
        return GRAY;
    }
  }

  return (
    <>
      {isOpened ? (
        <OpenedCard>
          {turned ? (
            <p>{answer}</p>
          ) : (
            <>
              <p>{question}</p>
              <img
                onClick={turnCard}
                src={setaVirar}
                alt="virar"
              />
            </>
          )}
        </OpenedCard>
      ) : (
        <ClosedCard onClick={open}>
          <ClosedCardText color={chooseColor()} status={status}>
            Pergunta {number}
          </ClosedCardText>
          <Icon status={status} />
        </ClosedCard>
      )}
    </>
  );
}

const OpenedCard = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
const ClosedCard = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ClosedCardText = styled.p`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.color};
  text-decoration: ${(props) =>
    props.status === "no status" ? "none" : "line-through"};
`;
