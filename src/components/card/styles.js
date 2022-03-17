import {StyleSheet} from 'react-native';
import { colors, margin } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    flexGrow: 0.4,
    justifyContent: 'center',
    marginTop: margin.medium,
    marginHorizontal: 50,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: colors.primaryBackground    
  },
});
