import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {CustomButton, CustomInput} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {userLoginAction} from '../../redux';
import {Button} from 'react-native-paper';

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
    <View style={styles.mainView}>
      <View style={styles.header}>
        <Text style={styles.text}>Login</Text>
      </View>
      <View style={{padding: '4%'}}>
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
        {show && (
          <View>
            <Text
              style={{
                color: 'red',
                textAlign: 'center',
                marginBottom: '2%',
                fontWeight: 'bold',
              }}>
              {data?.msg}
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
              {isloading?.loading ? 'Loading...' : 'Login'}
            </Text>
          </Button>
        </View>
      </View>

      <View style={styles.bottom}>
        <View>
          <Text style={{color: '#000000'}}>New Here ? </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('register');
              reset();
              setShow(false);
            }}>
            <Text style={{color: '#000000', fontWeight: 'bold'}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

    // <View style={styles.input_main}>
    //   <View style={styles.form}>
    //     <View>
    //       <Text style={styles.text}>Login Form</Text>
    //     </View>
    //     <View style={{marginBottom: '4%'}}>
    //       <CustomInput
    //         control={control}
    //         errors={errors}
    //         label="Name"
    //         name="username"
    //         errorMessage="Name is required"
    //         placeholder="Name"
    //       />
    //     </View>
    //     <View style={{marginBottom: '4%'}}>
    //       <CustomInput
    //         control={control}
    //         errors={errors}
    //         label="Password"
    //         name="password"
    //         errorMessage="password is required"
    //         placeholder="Password"
    //       />
    //     </View>
    //     <View
    //       style={{
    //         display: 'flex',
    //         justifyContent: 'center',
    //         flexDirection: 'row',
    //       }}>
    //       <CustomButton
    //         title={isloading?.loading ? 'Loading...' : 'Login'}
    //         onPress={handleSubmit(onSubmit)}
    //       />
    //     </View>

    //     {show && (
    //       <View>
    //         <Text
    //           style={{
    //             color: '#FFFF00',
    //             textAlign: 'center',
    //             marginTop: '5%',
    //             fontWeight: 'bold',
    //           }}>
    //           {data?.msg}
    //         </Text>
    //       </View>
    //     )}

    //     <View style={styles.bottom}>
    //       <View>
    //         <Text style={{color: '#FFFFFF'}}>New Here ? </Text>
    //       </View>
    //       <View>
    //         <TouchableOpacity
    //           onPress={() => {
    //             navigation.navigate('register');
    //             reset();
    //             setShow(false);
    //           }}>
    //           <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
    //             Register
    //           </Text>
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#128c7e',
    justifyContent: 'center',
    height: '10%',
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
