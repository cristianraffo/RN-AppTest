import React from 'react';
import {Image, View, Text, Button} from 'react-native';
import Card from '../../components/card';
import {styles} from './styles';

const GameOverScreen = ({rounds, choice, onRestart}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/GameOver.png')}
      />
      <Card style={styles.cardContainer}>
        <Text style={styles.rounds}>Attempts: {rounds}</Text>
        <Text style={styles.choice}> {choice} </Text>
      </Card>
      <Button title="Reset" onPress={onRestart} />
    </View>
  );
};

export default GameOverScreen;
