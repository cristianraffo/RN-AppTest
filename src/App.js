import React, {useState} from 'react';
import {SafeAreaView, Platform} from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import {styles} from './styles';

const App = () => {
  const [userNumber, setUserNumber] = useState();

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={handleStartGame} />;

  if (userNumber) {
    content = <GameScreen userOptions={userNumber} />;
  }

  return <SafeAreaView style={styles.container}>{content}</SafeAreaView>;
};

export default App;
