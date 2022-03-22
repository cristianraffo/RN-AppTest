import React, {useState, useRef, useEffect, useCallback} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {styles, colors} from './styles';
import Card from '../../components/card';
import Header from '../../components/header';
import useOrientation from '../../hooks/useOrientation';

const GameScreen = ({userOptions, onGameOver}) => {
  const orientation = useOrientation();
  const generateRandomBetween = useCallback(
    (min, max, exclude) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      const rndNum = Math.floor(Math.random() * (max - min)) + min;
      if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
      } else return rndNum;
    },
    [currentHigh, currentLow, currentGuess, userOptions],
  );

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userOptions),
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userOptions) onGameOver(rounds);
  }, [currentGuess, userOptions, onGameOver]);

  const handleNextGuess = direction => {
    if (
      (direction === 'lower' && currentGuess < userOptions) ||
      (direction === 'greater' && currentGuess > userOptions)
    ) {
      Alert.alert('Dont lie', 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setRounds(current => current + 1);
  };

  return (
    <View style={styles.container}>
      <Header title="Guess the Number" />
      <Card style={orientation?.isPortrait ? styles.cardContainer : styles.cardContainerLandscape}>
        <Text style={styles.gameText}>Oponent Guess:</Text>
        <Text style={styles.confirmedText}>{currentGuess}</Text>
        <View style={styles.buttomContainer}>
          <Button
            title="Smaller"
            onPress={() => handleNextGuess('lower')}
            color="#019fb6"
          />
          <Button
            title="Bigger"
            onPress={() => handleNextGuess('greater')}
            color="#019fb6"
          />
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;
