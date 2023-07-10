import React, {useEffect} from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {CustomButton, CustomInput} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {userRegister} from '../../redux';
import {Button} from 'react-native-paper';
export const RegisterScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();
  const dispatch = useDispatch();
  const registerData = useSelector(state => state?.userRegister?.userRegister);
  const errorMsg = registerData?.msg;
  const isLoading = useSelector(state => state?.userRegister);
  const onSubmit = data => {
    dispatch(userRegister(data));
  };
  // useEffect(() => {
  //   if (errorMsg) {
  //     navigation.navigate('login');
  //   }
  // }, [errorMsg]);

  return (
    <View style={styles.mainView}>
      <View style={styles.header}>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('login'), reset();
            }}>
            <Image
              style={{width: 25, height: 25}}
              source={require('../../assets/backIcon.png')}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Register</Text>
        </View>
      </View>
      <View style={{padding: '4%'}}>
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
        {errorMsg && (
          <View>
            <Text
              style={{
                color: 'red',
                textAlign: 'center',
                marginBottom: '3%',
                fontWeight: 'bold',
              }}>
              {errorMsg}
            </Text>
          </View>
        )}
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Button
            style={{
              backgroundColor: '#128c7e',
              borderRadius: 0,
              borderWidth: 0.5,
              width: '50%',
              paddingVertical: '1%',
            }}
            onPress={handleSubmit(onSubmit)}>
            <Text variant={'titleMedium'} style={{color: '#ffffff'}}>
              {isLoading?.loading ? 'Loading...' : 'Register'}
            </Text>
          </Button>
        </View>
      </View>

      <View style={styles.bottom}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('login'), reset();
            }}>
            <Text
              style={{
                color: '#000000',
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
    //   <View style={styles.input_main}>
    //     <View style={styles.form}>
    //       <View>
    //         <Text style={styles.text}>Register Form</Text>
    //       </View>
    //       <View style={{marginBottom: '4%'}}>
    //         <CustomInput
    //           placeholder="Name"
    //           control={control}
    //           errors={errors}
    //           label="UserName"
    //           name="username"
    //           errorMessage="Enter Name"
    //         />
    //       </View>
    //       <View style={{marginBottom: '4%'}}>
    //         <CustomInput
    //           placeholder="Password"
    //           control={control}
    //           errors={errors}
    //           label="password"
    //           name="password"
    //           errorMessage="Enter password"
    //         />
    //       </View>
    //       <View
    //         style={{
    //           display: 'flex',
    //           justifyContent: 'center',
    //           flexDirection: 'row',
    //         }}>
    //         <CustomButton
    //           title={isLoading?.loading ? 'Loading...' : 'Register'}
    //           onPress={handleSubmit(onSubmit)}
    //         />
    //       </View>
    //       {registerData?.status == false && (
    //         <View>
    //           <Text
    //             style={{
    //               color: '#FFFF00',
    //               textAlign: 'center',
    //               marginTop: '5%',
    //               fontWeight: 'bold',
    //             }}>
    //             {registerData?.msg}
    //           </Text>
    //         </View>
    //       )}

    //       <View>
    //         <TouchableOpacity
    //           onPress={() => {
    //             navigation.navigate('login'), reset();
    //           }}>
    //           <Text
    //             style={{
    //               color: 'white',
    //               textAlign: 'center',
    //               marginTop: '5%',
    //               fontWeight: 'bold',
    //             }}>
    //             Sign In
    //           </Text>
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //   </View>
  );
};

const styles = StyleSheet.create({
  input_main: {
    display: 'flex',
    padding: '3%',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#128c7e',
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
  ///////////////////
  mainView: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#128c7e',
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 23,
    marginLeft: '5%',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: '6%',
  },
});
