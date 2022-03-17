import {StyleSheet} from 'react-native';
import { colors, fontSize, margin } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 0.2,
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
