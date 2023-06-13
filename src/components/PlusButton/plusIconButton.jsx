import {View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {COLORS} from '../../constant';
import {Icon} from '../common';

export const PlusIcon = ({onPress}) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: '85%',
        right: '1%',
      }}>
      <IconButton
        icon={() => {
          return <Icon name="PlusIcon" size={32} />;
        }}
        iconColor={COLORS.white}
        containerColor={COLORS.primary}
        size={42}
        onPress={onPress}
      />
    </View>
  );
};
