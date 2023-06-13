// import {View} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {
//   CustomButton,
//   CustomInput,
//   CustomModal,
//   Switchbtn,
//   Text,
//   Wrapper,
// } from '../../components';
// import {useForm} from 'react-hook-form';
// import {AuthStyles} from './auth.styles';
// import {COLORS} from '../../constant';
// import {useDispatch, useSelector} from 'react-redux';
// import {userLoginAction} from '../../redux/actions/auth';
// import {useRef} from 'react';
// import {TouchableRipple} from 'react-native-paper';

// export const LoginScreen = ({navigation, route}) => {
//   const {role} = route.params;
//   const initialRender = useRef(true);
//   // api data
//   const userData = useSelector(state => state?.userLogin);
//   const {loading, error, userInfo} = userData;

//   const dispatch = useDispatch();

//   // react hook form
//   const {
//     control,
//     handleSubmit,
//     formState: {errors},
//   } = useForm();

//   const [visible, setvisible] = useState(false);

//   useEffect(() => {
//     if (initialRender.current) {
//       initialRender.current = false;
//     } else {
//       if (error) {
//         setvisible(true);
//       } else {
//         setvisible(false);
//       }
//     }
//   }, [error]);

//   const onSubmit = data => {
//     const {email} = data;

//     const sendData = {...data, email: email.toLowerCase().trim()};
//     // debugger;
//     dispatch(userLoginAction(sendData, role));
//     // axios
//     //   .post('http://192.168.1.141:8000/api/v1/user/login', sendData)
//     //   .then(response => {
//     // debugger;
//     //     console.log(response.data);
//     // debugger;
//     //   })
//     //   .catch(e => {
//     // debugger;
//     //     console.log(e);
//     //   });
//   };

//   const handleshow = () => {
//     setvisible(!visible);
//   };
//   // const [isEnabled, setIsEnabled] = useState(false);
//   // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
//   return (
//     <>
//       <Wrapper
//         navigation={navigation}
//         header_text={'Sign in now to begin an amazing journey'}
//         title={'Sign In '}
//         left_icon_size={23}
//         lefticon="BackIcon">
//         <View>
//           <CustomInput
//             maxLength={14}
//             control={control}
//             errors={errors}
//             name="email"
//             errorMessage="Email is required"
//             label="Email"
//           />
//           <CustomInput
//             password
//             control={control}
//             errors={errors}
//             label="Password"
//             name="password"
//             errorMessage="Password is required"
//           />
//         </View>
//         <View style={AuthStyles.forgetsave}>
//           <View
//             style={{
//               display: 'flex',
//               flexDirection: 'row',
//             }}>
//             <Switchbtn />
//             <Text style={{marginTop: 3}} color={COLORS.lightinfo}>
//               Save me
//             </Text>
//           </View>
//           <TouchableRipple
//             onPress={() => {
//               navigation.navigate('forgot');
//             }}>
//             <Text style={{marginTop: 3}} color={COLORS.lightinfo}>
//               Forgot Password?
//             </Text>
//           </TouchableRipple>
//         </View>
//         <CustomButton
//           title={loading ? '' : 'Save'}
//           loading={loading ? loading : null}
//           onPress={handleSubmit(onSubmit)}
//         />

//         <View style={AuthStyles.endText}>
//           <Text color={COLORS.lightprimary}>Don't have an account? </Text>
//           <TouchableRipple
//             onPress={() => {
//               navigation.navigate('register');
//             }}>
//             <Text color={COLORS.primary}>SIGN UP</Text>
//           </TouchableRipple>
//         </View>
//       </Wrapper>

//       {visible && (
//         <CustomModal
//           modalVisible={visible}
//           setModalVisible={handleshow}
//           closeicon="BlackCrossIcon"
//           error={error}
//           errormessage={error && error.message}
//         />
//       )}
//     </>
//   );
// };

import React from 'react';
import {Text, View} from 'react-native';

export const loginScreen = () => {
  return (
    <View>
      <Text>loginScreen</Text>
    </View>
  );
};
