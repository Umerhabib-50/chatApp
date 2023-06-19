import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {CustomButton, CustomInput} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {userRegister} from '../../redux';
export const RegisterScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const dispatch = useDispatch();
  const registerData = useSelector(state => state?.userRegister?.userRegister);
  const onSubmit = data => {
    dispatch(userRegister(data));
    navigation.navigate(registerData?.status == true ? 'login' : 'register');
  };
  return (
    <View style={styles.input_main}>
      <View style={styles.form}>
        <View>
          <Text style={styles.text}>Register Form</Text>
        </View>
        <View style={{marginBottom: '4%'}}>
          <CustomInput
            placeholder="Name"
            control={control}
            errors={errors}
            label="UserName"
            name="username"
            errorMessage="Enter Name"
          />
        </View>
        <View style={{marginBottom: '4%'}}>
          <CustomInput
            placeholder="Password"
            control={control}
            errors={errors}
            label="password"
            name="password"
            errorMessage="Enter password"
          />
        </View>
        <CustomButton title={'Register'} onPress={handleSubmit(onSubmit)} />
        {registerData?.status == false && (
          <View>
            <Text
              style={{
                color: '#FFFF00',
                textAlign: 'center',
                marginTop: '5%',
                fontWeight: 'bold',
              }}>
              {registerData?.msg}
            </Text>
          </View>
        )}

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                marginTop: '5%',
                fontWeight: 'bold',
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input_main: {
    display: 'flex',
    padding: '3%',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#006257',
  },
  form: {
    padding: 29,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: '10%',
  },
});
