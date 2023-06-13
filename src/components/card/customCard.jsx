import {Image, View} from 'react-native';
import {useState} from 'react';
import {CustomCardStyle} from './customCard.style';
import {TouchableRipple} from 'react-native-paper';
import {Icon, Text} from '../../components';
import {COLORS, ImagesPath} from '../../constant';

export const CustomCard = ({
  onPress,
  title,
  subTitle,
  imageCard,
  image,
  leftBorderClr,
  icon,
}) => {
  const [show, setShow] = useState(false);
  return (
    <TouchableRipple
      onPress={onPress}
      style={[
        CustomCardStyle.card_con,
        {
          borderLeftColor: leftBorderClr ? leftBorderClr : COLORS.white,
          borderLeftWidth: leftBorderClr ? 5 : 1,
        },
      ]}>
      <>
        <View style={CustomCardStyle.content}>
          {image == 'undefined'
            ? image && (
                <Image
                  style={{height: 45, width: 45}}
                  source={ImagesPath.placeHolder}
                />
              )
            : image && (
                <Image
                  style={{width: 40, height: 40, borderRadius: 50}}
                  source={{
                    uri: `http://192.168.1.89:8000/uploads/images/resized-${image}`,
                  }}
                />
              )}
          {/* } */}
          {icon && <Icon name={icon} size={35} />}

          {title && subTitle ? (
            <View style={CustomCardStyle.title}>
              <Text color={COLORS.black} variant={'titleMedium'}>
                {title}
              </Text>
              <Text>{subTitle}</Text>
            </View>
          ) : (
            <View style={CustomCardStyle.title}>
              <Text color={COLORS.black} variant={'titleMedium'}>
                {title}
              </Text>
            </View>
          )}
        </View>

        <View style={CustomCardStyle.icon}>
          <Icon name={'ArrowIcon'} size={25} />
        </View>
      </>
    </TouchableRipple>
  );
};
