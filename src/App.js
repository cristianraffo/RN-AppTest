import React, {useState} from 'react';
import {SafeAreaView, Platform} from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import {styles} from './styles';
import useOrientation from './hooks/useOrientation';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const orientation = useOrientation();

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const handleGameOver = numRounds => {
    setGuessRounds(numRounds);
  };

  const handleRestart = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  let content = <StartGameScreen onStartGame={handleStartGame} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userOptions={userNumber} onGameOver={handleGameOver} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        rounds={guessRounds}
        choice={userNumber}
        onRestart={handleRestart}
      />
    );
  }

  return <SafeAreaView style={styles.container}>{content}</SafeAreaView>;
};

export default App;
