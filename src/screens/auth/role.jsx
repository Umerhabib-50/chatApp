import {Image, View} from 'react-native';
import React from 'react';
import {Icon, Text} from '../../components';
import LinearGradient from 'react-native-linear-gradient';

import {RoleStyle} from './role.style';
import {COLORS, ImagesPath} from '../../constant';
import {TouchableRipple} from 'react-native-paper';

export const RoleScreen = ({navigation}) => {
  let roleData = [
    {
      id: '1',
      title: 'Business Owner / Admin / HR',
      desc: 'Rigister ann Start marking your attendance',
      icon: 'OfficeIcon',
      role: ['Admin'],
    },
    {
      id: '2',
      title: 'Employee / Manager',
      desc: 'Register and Start marking your attendance',
      icon: 'EmployeeIcon',
      role: ['Employee', 'Manager'],
    },
  ];
  return (
    <LinearGradient
      colors={[COLORS.gradient1, COLORS.gradient2, COLORS.gradient3]}
      style={RoleStyle.backGround}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      {/* ..........|| LOGO VIEW ||........... */}
      <View style={RoleStyle.logo}>
        <Image style={RoleStyle.logo_image} source={ImagesPath.role_logo} />
        <Text variant="displaySmall" color={COLORS.primary}>
          MAAN HRM
        </Text>
      </View>
      {/* .............|| IMAGE VIEW ||........... */}
      <View style={RoleStyle.images}>
        <Image
          style={RoleStyle.center_image}
          source={ImagesPath.image_center}
        />
      </View>
      {/* .............|| ROLE VIEW ||............ */}
      <View style={RoleStyle.role}>
        <Text
          style={RoleStyle.role_text}
          variant="headlineLarge"
          color={COLORS.light}>
          Select Your Role
        </Text>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {roleData.map(list => {
            const {id, logo, title, desc, role, icon} = list;
            return (
              <View style={{marginBottom: 15, width: '85%'}} key={id}>
                <TouchableRipple
                  onPress={() => {
                    navigation.navigate('login', {role});
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: COLORS.white,
                      borderRadius: 10,
                      paddingVertical: 15,
                      paddingHorizontal: 15,
                      width: '100%',
                      borderColor: 'blue',
                      borderWidth: 1,
                    }}>
                    <View style={{width: '15%'}}>
                      <Icon name={icon} size={29} />
                    </View>
                    <View style={{width: '80%', marginLeft: '3%'}}>
                      <Text>{title}</Text>
                      <Text
                        variant={'labelSmall'}
                        color="gray"
                        style={{marginTop: 5}}>
                        {desc}
                      </Text>
                    </View>
                  </View>
                </TouchableRipple>
              </View>
            );
          })}
        </View>
      </View>
    </LinearGradient>
  );
};
