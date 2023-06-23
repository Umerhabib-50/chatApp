import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {CustomButton, CustomInput} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {userLoginAction} from '../../redux';

export const LoginScreen = ({navigation}) => {
  const data = useSelector(state => state?.userLogin?.userInfo);
  const isloading = useSelector(state => state?.userLogin);
  const [show, setShow] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();
  const initialRender = useRef(true);
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(userLoginAction(data));
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (data?.msg) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  }, [data?.msg]);

  return (
    <View style={styles.input_main}>
      <View style={styles.form}>
        <View>
          <Text style={styles.text}>Login Form</Text>
        </View>
        <View style={{marginBottom: '4%'}}>
          <CustomInput
            control={control}
            errors={errors}
            label="Name"
            name="username"
            errorMessage="Name is required"
            placeholder="Name"
          />
        </View>
        <View style={{marginBottom: '4%'}}>
          <CustomInput
            control={control}
            errors={errors}
            label="Password"
            name="password"
            errorMessage="password is required"
            placeholder="Password"
          />
        </View>
        <CustomButton
          title={isloading?.loading ? 'Loading...' : 'Login'}
          onPress={handleSubmit(onSubmit)}
        />
        {show && (
          <View>
            <Text
              style={{
                color: '#FFFF00',
                textAlign: 'center',
                marginTop: '5%',
                fontWeight: 'bold',
              }}>
              {data?.msg}
            </Text>
          </View>
        )}

        <View style={styles.bottom}>
          <View>
            <Text style={{color: '#FFFFFF'}}>New Here ? </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('register');
                reset();
                setShow(false);
              }}>
              <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
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
  bottom: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '6%',
  },
});
