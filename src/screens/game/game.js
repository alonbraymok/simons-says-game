import React, {useState, useRef, useEffect} from 'react';
import {GameBoardContainer, StartButtonWrapper} from './game.styled';
import SimonButton from '../../components/simon.button/simon.button';
import StatsButton from '../../components/stats.button/stats.button';
import {View, Button} from 'react-native';

const COLORS = ['blue', 'red', 'green', 'yellow'];

function sleep(ms = 0) {
  return new Promise((r) => setTimeout(r, ms));
}

export default function Game() {
  const [isUserTurn, setIsUserTurn] = useState(false);
  const [movesArray, setMovesArray] = useState([]);
  const [computerPress, setComputerPress] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameIndex, setGameIndex] = useState(0);
  const indexRef = useRef(0);

  function getRandomNumber() {
    return Math.floor(Math.random() * 4);
  }

  async function start() {
    if (!isGameStarted) {
      setIsGameStarted(true);
    }
    await sleep(500);
    const newMoves = [...movesArray, getRandomNumber()];
    renderComputerPress(newMoves);
    setMovesArray(newMoves);
  }

  async function renderComputerPress(moves) {
    for (let i = 0; i < moves.length; i++) {
      setComputerPress(moves[i]);
      await sleep(800);
      setComputerPress(null);
      await sleep(200);
    }

    setIsUserTurn(true);
    setComputerPress(null);
  }

  async function handleUserPress(index) {
    if (isUserTurn) {
      if (index === movesArray[indexRef.current]) {
        indexRef.current = indexRef.current + 1;
        if (indexRef.current === movesArray.length) {
          start();
          setGameIndex(gameIndex + 1);
          setIsUserTurn(false);
          indexRef.current = 0;
        }
      } else {
        alert('Reset Game');
        setIsGameStarted(false);
        initialAll();
      }
    }
  }

  function initialAll() {
    setIsUserTurn(false);
    indexRef.current = 0;
    setMovesArray([]);
  }

  function renderButtons() {
    return [1, 1, 1, 1].map((_, index) => (
      <SimonButton
        color={COLORS[index]}
        isUserTurn={isUserTurn}
        pressed={computerPress === index}
        setComputerPress={setComputerPress}
        onPress={() => handleUserPress(index)}
      />
    ));
  }

  return (
    <GameBoardContainer>
      <StartButtonWrapper>
        <StatsButton
          isGameStarted={isGameStarted}
          status={gameIndex}
          onPress={start}
        />
      </StartButtonWrapper>
      {renderButtons()}
    </GameBoardContainer>
  );
}
