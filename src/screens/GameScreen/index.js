import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {styles, colors} from './styles';
import Card from '../../components/card';
import Header from '../../components/header';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({userOptions}) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userOptions),
  );

  return (
    <View style={styles.container}>
      <Header title="Guess the Number" />
      <Card style={styles.cardContainer}>
        <Text style={styles.gameText}>Oponent Guess:</Text>
        <Text style={styles.confirmedText}>{currentGuess}</Text>
        <View style={styles.buttomContainer}>
          <Button title="Smaller" onPress={() => null} color="#019fb6" />
          <Button title="Bigger" onPress={() => null} color="#019fb6" />
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;
