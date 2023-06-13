import {View} from 'react-native';

import {CustomButton, CustomInput, Wrapper} from '../../components';
import {useForm} from 'react-hook-form';
import {AuthStyles} from './auth.styles';

export const ForgotScreen = ({navigation}) => {
  const onSubmit = data => {
    navigation.navigate('login');
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  return (
    <Wrapper
      lefticon={'BackIcon'}
      title={'Forgot Password'}
      title2={'Lorem dolor consectetur.'}
      left_icon_size={25}
      navigation={navigation}>
      <View>
        <CustomInput
          label="Enter OTP"
          keyboardType="numeric"
          control={control}
          errors={errors}
          name="otp"
          errorMessage="OTP is required"
        />
      </View>

      <CustomButton
        style={[AuthStyles.forgot_btn]}
        title="Get OTP"
        onPress={handleSubmit(onSubmit)}
        textColor="white"
      />
    </Wrapper>
  );
};
