import React, {useEffect, useRef} from 'react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Image, View} from 'react-native';
import {IconButton, TouchableRipple} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  CustomButton,
  CustomDate,
  CustomInput,
  CustomModal,
  Icon,
  Text,
  Wrapper,
} from '../../components';
import {COLORS, ImagesPath} from '../../constant';
import {userRegister} from '../../redux/actions/auth';
import {AuthStyles} from './auth.styles';
import {AddEmployeeStyle} from '../EM/employees/addEmpStyle/addEmployee.style';
import {launchImageLibrary} from 'react-native-image-picker';
import {profileImage} from '../../redux/actions/main';

export const RegisterScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);
  const userReg = useSelector(state => state?.userRegister);
  const imgData = useSelector(state => state?.profileImage?.profileImage);

  const {error, loading} = userReg;
  const [visible, setVisible] = useState(false);
  const initialRender = useRef(true);
  const [successMsg, setSuccessMsg] = useState({success: false, message: ''});
  let emp_strength = [
    {label: '10', value: '10'},
    {label: '20', value: '20'},
    {label: '30', value: '30'},
    {label: '40', value: '40'},
    {label: '50', value: '50'},
    {label: '60', value: '60'},
    {label: '70', value: '70'},
    {label: '80', value: '80'},
    {label: '90', value: '90'},
    {label: '100', value: '100'},
  ];
  const onSubmit = data => {
    let add_emp = {
      ...data,
      image: `${imgData?.data}`,
    };
    // console.log('DATA FROM IMAGE PATH', add_emp);
    dispatch(userRegister(add_emp));
  };
  const handleShow = () => {
    setVisible(!visible);
  };
  //============== PROFILE ADMIN ========
  const selectImage = async () => {
    try {
      const response = await launchImageLibrary({});
      if (response.assets && response.assets.length > 0) {
        const formData = new FormData();
        formData.append('image', {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
        });
        setSelectedImage(response.assets[0]);

        // dispatch(profileImage(formData));
      }
    } catch (error) {
      console.log('error from select img', error);
    }
  };
  // const selectImage = async () => {
  //   const generatePromise = async () => {
  //     return new Promise((resolve, reject) => {
  //       launchImageLibrary({}, response => {
  //         if (response.assets && response.assets.length > 0) {
  //           const formData = new FormData();
  //           formData.append('image', {
  //             uri: response.assets[0].uri,
  //             type: response.assets[0].type,
  //             name: response.assets[0].fileName,
  //           });
  //           setSelectedImage(response.assets[0]);

  //           resolve(formData);
  //         }
  //       });
  //     });
  //   };
  //   try {
  //     const newFormdata = await generatePromise();

  //     dispatch(profileImage(newFormdata));
  //   } catch (error) {
  //     console.log('error from select img', error);
  //   }
  // };
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (userReg?.userRegister) {
        setSuccessMsg({
          success: userReg?.userRegister?.success,
          message: userReg?.userRegister?.message,
        });
        setVisible(true);
      }
      if (error) {
        setVisible(true);
      }
    }
  }, [userReg, error]);
  return (
    <>
      <Wrapper
        navigation={navigation}
        lefticon="BackIcon"
        left_icon_size={23}
        title="Sign Up"
        title2="Sign Up now to begin ">
        <View style={AddEmployeeStyle.add_employee}>
          <IconButton
            icon={() => {
              return <Icon name="PlusIcon" size={20} />;
            }}
            iconColor={COLORS.white}
            containerColor={COLORS.primary}
            size={3}
            style={{
              position: 'absolute',
              top: '55%',
              left: '17%',
              zIndex: 2000,
            }}
            onPress={selectImage}
          />
          <View
            style={[
              {borderWidth: selectedImage ? 0 : 2},
              AddEmployeeStyle.img_employee,
            ]}>
            {selectedImage ? (
              <Image
                name="image"
                source={selectedImage}
                style={AddEmployeeStyle.image}
              />
            ) : (
              <>
                <Text>Select</Text>
                <Text>Image</Text>
              </>
            )}
            {/* <Image source={ImagesPath.profile} /> */}
          </View>
          <View style={AddEmployeeStyle.employee_input_main}>
            <CustomInput
              control={control}
              errors={errors}
              name="companyName"
              errorMessage="Name is required"
              label="Company Name"
            />
            <CustomInput
              control={control}
              errors={errors}
              name="fullName"
              errorMessage="Employee name is required"
              label="Owner/Admin name"
            />
          </View>
        </View>

        <CustomInput
          control={control}
          errors={errors}
          name="email"
          errorMessage="Email is required"
          label="Email Address"
        />
        <CustomInput
          control={control}
          errors={errors}
          name="contact"
          errorMessage="Number is required"
          label="Phone Number"
          keyboardType="numeric"
        />
        <CustomInput
          password
          control={control}
          errors={errors}
          label="Password"
          name="password"
          errorMessage="Password is required"
        />
        <CustomInput
          type="dropdown"
          data={emp_strength}
          control={control}
          errors={errors}
          label="Employee Strength"
          name="employeeStrength"
          errorMessage="employeeStrength is required"
        />
        <CustomButton
          style={{marginTop: 13}}
          onPress={handleSubmit(onSubmit)}
          title={loading ? '' : 'Sign Up'}
          loading={loading ? loading : null}
        />
        <View style={AuthStyles.endText}>
          <Text color={COLORS.lightprimary}>Don't have an account? </Text>
          <TouchableRipple
            onPress={() => {
              navigation.navigate('login');
            }}>
            <Text color={COLORS.primary}>SIGN IN</Text>
          </TouchableRipple>
        </View>
      </Wrapper>
      <CustomModal
        modalVisible={visible}
        setModalVisible={handleShow}
        closeicon="BlackCrossIcon"
        error={error}
        errormessage={error && error?.message}
        success={successMsg?.success}
        successmessage={successMsg?.message}
        navigateTo={'role'}
      />
    </>
  );
};
