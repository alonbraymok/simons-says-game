import React, {useState, useRef, useEffect} from 'react';
import {
  GameBoardContainer,
  StartButtonWrapper,
  ButtonWrapper,
} from './game.styled';
import SimonButton from '../../components/simon.button/simon.button';
import StatsButton from '../../components/stats.button/stats.button';
import Sound from 'react-native-sound';
import s from '../../assets/mp3/click.mp3';
import {useSelector, useDispatch} from 'react-redux';
import InputModal from '../../components/input.modal/input.modal';
import {storeData} from '../../services/results';
import {setResults} from '../../store/actions/result';

const COLORS = ['#1736ff', '#ff2519', '#03fc52', '#ffe414'];

function sleep(ms = 0) {
  return new Promise((r) => setTimeout(r, ms));
}

export default function Game({navigation}) {
  const [isUserTurn, setIsUserTurn] = useState(false);
  const [movesArray, setMovesArray] = useState([]);
  const [computerPress, setComputerPress] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameIndex, setGameIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const indexRef = useRef(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const sound = new Sound(s);
    Sound.setCategory('Playback');
    sound.play();
  }, [isUserTurn]);

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
        setShowModal(true);
      }
    }
  }

  async function handleModalSubmit(name) {
    const userResult = {
      name,
      result: gameIndex,
    };
    const results = await storeData({key: 'results', value: userResult});
    dispatch(setResults(results));
    initialAll();
  }

  function initialAll() {
    navigation.push('Details');
    setIsGameStarted(false);
    setIsUserTurn(false);
    indexRef.current = 0;
    setGameIndex(0);
    setMovesArray([]);
    setShowModal(false);
  }

  function getBorderStyle(index) {
    switch (index) {
      case 0:
        return 'borderTopLeftRadius';
      case 1:
        return 'borderTopRightRadius';
      case 2:
        return 'borderBottomLeftRadius';
      default:
        return 'borderBottomRightRadius';
    }
  }

  function renderButtons() {
    return [1, 1, 1, 1].map((_, index) => (
      <SimonButton
        color={COLORS[index]}
        isUserTurn={isUserTurn}
        pressed={computerPress === index}
        border={getBorderStyle(index)}
        onPress={() => handleUserPress(index)}
      />
    ));
  }

  return (
    <GameBoardContainer>
      <ButtonWrapper>
        {renderButtons()}
        <StartButtonWrapper>
          <StatsButton
            isGameStarted={isGameStarted}
            status={gameIndex}
            onPress={start}
          />
        </StartButtonWrapper>
      </ButtonWrapper>
      <InputModal
        isDialogVisible={showModal}
        onClose={() => setShowModal(false)}
        title={`Your score ${gameIndex}`}
        onSubmit={handleModalSubmit}
      />
    </GameBoardContainer>
  );
}
