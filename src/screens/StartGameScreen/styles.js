import {StyleSheet, Dimensions} from 'react-native';
import { colors, fontSize, margin } from '../../constants/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardTitle: {
    fontSize: fontSize.title,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: margin.medium,
    color: colors.primaryText,
  },
  inputContainer: {
    marginHorizontal: margin.medium,
  },
  label: {
    fontSize: fontSize.text,
    fontWeight: 'bold',
    color: colors.primaryText,
    marginBottom: margin.small,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonsContainer: {
    height: height * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: margin.medium,
  },
  confirmedContainer: {
    height: height * 0.4,
    justifyContent: 'center',
    marginVertical: margin.medium,    
  },
  confirmedText: {
    fontSize: fontSize.large,
    fontWeight: 'bold',
    color: colors.primary,
    justifyContent: 'center',
    alignSelf: 'center',
  },

});
