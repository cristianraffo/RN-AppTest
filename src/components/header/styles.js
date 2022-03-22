import {StyleSheet, Dimensions} from 'react-native';
import { colors, fontSize, margin } from '../../constants/theme';

const { width, height } = Dimensions.get('window');


export const styles = StyleSheet.create({
  container: {
    height: height * 0.15,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.secondaryBackground,
  },
  title: {
    fontFamily: 'Rubik-Bold', 
    fontSize: fontSize.title,
    textAlign: 'center',
    margin: margin.small,
    color: colors.secondary,
  },
});
