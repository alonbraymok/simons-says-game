import React, {useState, useRef} from 'react';
import {
  GameBoardContainer,
  StartButtonWrapper,
  ButtonWrapper,
} from './game.styled';
import SimonButton from '../../components/simon.button/simon.button';
import StatsButton from '../../components/stats.button/stats.button';
import {useDispatch, batch} from 'react-redux';
import InputModal from '../../components/input.modal/input.modal';
import {storeData} from '../../services/results';
import {setResults} from '../../store/actions/result';
import {COLORS, DETAILS, RESULTS} from '../../utils/constants';
import {getRandomNumber, sleep, playSound} from '../../utils/utils';
import {getBorderStyle} from '../../utils/style';

export default function Game({navigation}) {
  const [isUserTurn, setIsUserTurn] = useState(false);
  const [movesArray, setMovesArray] = useState([]);
  const [computerPress, setComputerPress] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameIndex, setGameIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const indexRef = useRef(0);
  const dispatch = useDispatch();

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
      playSound();
      await sleep(800);
      setComputerPress(null);
      await sleep(200);
    }
    batch(() => {
      setIsUserTurn(true);
      setComputerPress(null);
    });
  }

  async function handleUserPress(index) {
    if (isUserTurn) {
      playSound();
      if (index === movesArray[indexRef.current]) {
        indexRef.current = indexRef.current + 1;
        if (indexRef.current === movesArray.length) {
          start();
          batch(() => {
            setGameIndex(gameIndex + 1);
            setIsUserTurn(false);
          });
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
    const results = await storeData({key: RESULTS, value: userResult});
    dispatch(setResults(results));
    initialAll();
  }

  function initialAll() {
    navigation.push(DETAILS);
    indexRef.current = 0;
    batch(() => {
      setIsGameStarted(false);
      setIsUserTurn(false);
      setGameIndex(0);
      setMovesArray([]);
      setShowModal(false);
    });
  }

  function handleCancelNodal() {
    setShowModal(false);
    initialAll();
  }

  function renderButtons() {
    return [1, 1, 1, 1].map((_, index) => (
      <SimonButton
        key={index}
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
            onPress={isGameStarted ? null : start}
          />
        </StartButtonWrapper>
      </ButtonWrapper>
      <InputModal
        isDialogVisible={showModal}
        onClose={handleCancelNodal}
        title={`Your score ${gameIndex}`}
        onSubmit={handleModalSubmit}
      />
    </GameBoardContainer>
  );
}
