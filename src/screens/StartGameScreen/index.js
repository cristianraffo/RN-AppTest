import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import Header from '../../components/header';
import Card from '../../components/card';
import Input from '../../components/input';

import {styles} from './styles';
import {colors} from '../../constants/theme';

const isIOS = Platform.OS == 'ios';

const StartGameScreen = ({onStartGame}) => {
  const [inputValue, setInputValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');

  const handleOnChange = text => {
    setInputValue(text.replace(/[^0-9]/g, ''));
  };

  const handleResetInput = () => {
    setInputValue('');
    setConfirmed(false);
  };

  const handleConfirmInput = () => {
    const chosenNumber = parseInt(inputValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setInputValue('');
  };

  const confirmedOutput = confirmed ? (
    <Card style={styles.confirmedContainer}>
      <Text style={styles.cardTitle}>Your number</Text>
      <Text style={styles.confirmedText}>{selectedNumber}</Text>
      <View style={styles.buttonsContainer}>
        <Button
          title="Start Game"
          onPress={() => onStartGame(selectedNumber)}
          color={colors.primary}
        />
      </View>
    </Card>
  ) : null;

  return (
    <ScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={isIOS ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.container}>
            <Header title="Guess the Number" />
            <Card>
              <Text style={styles.cardTitle}>Start game</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Choose a number</Text>
                <Input
                  blurOnSubmit
                  autoCapitalization="none"
                  autoCorrect={false}
                  keyboardType="numeric"
                  placeholder="11"
                  placeholderTextColor={colors.placeholderColor}
                  maxLength={2}
                  handleOnChange={value => handleOnChange(value)}
                  value={inputValue}
                />
              </View>
              <View style={styles.buttonsContainer}>
                <Button
                  title="clear"
                  onPress={() => handleResetInput()}
                  color={colors.primary}
                />
                <Button
                  title="confirm"
                  onPress={() => handleConfirmInput()}
                  color={colors.primary}
                />
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default StartGameScreen;
