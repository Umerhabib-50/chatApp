// import React, {useEffect, useState} from 'react';
// import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
// import {SettingStyle} from './css/settingStyle';
// import {CustomModal} from '../../components';
// import {useDispatch, useSelector} from 'react-redux';
// import {getRoomAction} from '../../redux';

// export const SettingScreen = ({navigation, route}) => {
//   const {username, roomId} = route?.params;
//   let array = [
//     {
//       image: require('../../assets/bell.png'),
//       title: 'Mute notifications',
//       title2: 'Encryption',
//       subTitle: 'Always',
//     },
//     {
//       image: require('../../assets/music.png'),
//       title: 'Custom notifications',
//       title2: 'Disappearing messages',
//       subTitle: null,
//     },
//     {
//       image: require('../../assets/gallery.png'),
//       title: 'Media visibility',
//       title2: 'Group settings',
//       subTitle: null,
//     },
//   ];

//   const getRoomData = useSelector(state => state?.getRoom?.getRoom);
//   const findArray = getRoomData?.find(data => data?._id == roomId);
//   const image = findArray?.image;
//   const roomname = findArray?.name;
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getRoomAction());
//   }, []);

//   return (
//     <ScrollView style={{backgroundColor: '#128c7e', height: '100%'}}>
//       <View style={{height: '100%'}}>
//         <View style={SettingStyle.tabBar}>
//           <TouchableOpacity
//             onPress={() =>
//               navigation.navigate('chats', {username, roomname, roomId, image})
//             }>
//             <Image
//               source={require('../../assets/backIcon.png')}
//               style={{width: 30, height: 30}}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             {findArray?.image ? (
//               <Image
//                 source={{uri: findArray?.image}}
//                 style={SettingStyle.roomImage}
//               />
//             ) : (
//               <Image
//                 source={require('../../assets/group.png')}
//                 style={SettingStyle.roomImage}
//               />
//             )}
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate('subChange', {
//                 roomId,
//                 roomname,
//               });
//             }}>
//             <Image
//               source={require('../../assets/option.png')}
//               style={{width: 30, height: 30}}
//             />
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             height: '30%',
//             justifyContent: 'center',
//           }}>
//           <View>
//             <Text style={SettingStyle.roomName}>{findArray?.name}</Text>
//           </View>
//           <View style={SettingStyle.menuIcon}>
//             <TouchableOpacity>
//               <Image
//                 source={require('../../assets/call.png')}
//                 style={SettingStyle.menuImage}
//               />
//               <Text style={SettingStyle.menuText}>Audio</Text>
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={require('../../assets/videoCem.png')}
//                 style={SettingStyle.menuImage}
//               />
//               <Text style={SettingStyle.menuText}>Video</Text>
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image
//                 source={require('../../assets/search.png')}
//                 style={SettingStyle.menuImage}
//               />
//               <Text style={SettingStyle.menuText}>Search</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={{backgroundColor: '#004940', padding: 15}}>
//           <Text style={{color: '#fff', fontWeight: '500'}}>
//             Add room discription
//           </Text>
//           <Text style={{color: '#dddddd', marginTop: '2%'}}>
//             Created on 03/07/2023
//           </Text>
//         </View>
//         <View
//           style={{
//             marginTop: '2%',
//             backgroundColor: '#004940',
//             paddingHorizontal: 9,
//           }}>
//           {array?.map((item, ind) => {
//             const {image, title, subTitle} = item;
//             return (
//               <View
//                 key={ind}
//                 style={{
//                   display: 'flex',
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                   paddingVertical: 8,
//                 }}>
//                 <View
//                   style={{
//                     display: 'flex',
//                     flexDirection: 'row',
//                   }}>
//                   <Image source={image} style={{width: 25, height: 25}} />
//                   <View>
//                     <Text
//                       style={{
//                         marginLeft: 19,
//                         color: '#fff',
//                         fontWeight: '500',
//                       }}>
//                       {title}
//                     </Text>
//                     <Text
//                       style={{
//                         marginLeft: 19,
//                         color: '#dddddd',
//                         marginTop: '2%',
//                       }}>
//                       {subTitle}
//                     </Text>
//                   </View>
//                 </View>
//               </View>
//             );
//           })}
//         </View>
//         <View
//           style={{
//             marginTop: '2%',
//             backgroundColor: 'red',
//             paddingHorizontal: 9,
//           }}>
//           {array?.map((item, ind) => {
//             const {image, title2} = item;
//             return (
//               <View key={ind}>
//                 <View
//                   style={{
//                     marginTop: '2%',
//                     backgroundColor: '#004940',
//                     display: 'flex',
//                     flexDirection: 'row',
//                   }}>
//                   <Image source={image} style={{width: 25, height: 25}} />

//                   <Text
//                     style={{
//                       marginLeft: 19,
//                       color: '#fff',
//                       fontWeight: '500',
//                     }}>
//                     {title2}
//                   </Text>
//                 </View>
//               </View>
//             );
//           })}
//         </View>
//       </View>
//     </ScrollView>
//   );
// };
import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getRoomAction} from '../../redux';
import {SettingStyle} from './css/settingStyle';
import {CustomModal} from '../../components';

export const SettingScreen = ({navigation, route}) => {
  const {username, roomId} = route?.params;
  const array = [
    {
      image: require('../../assets/bell.png'),
      title: 'Mute notifications',
      title2: 'notifications tone',
      subTitle: 'Always',
    },
    {
      image: require('../../assets/music.png'),
      title: 'Custom notifications',
      title2: 'Disappearing messages',
      subTitle: null,
    },
    {
      image: require('../../assets/gallery.png'),
      title: 'Media visibility',
      title2: 'Group settings',
      subTitle: null,
    },
  ];

  const getRoomData = useSelector(state => state?.getRoom?.getRoom);
  const findArray = getRoomData?.find(data => data?._id === roomId);
  const image = findArray?.image;
  const roomname = findArray?.name;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoomAction());
  }, []);

  return (
    <ScrollView style={SettingStyle.container}>
      <View style={SettingStyle.tabBar}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('chats', {username, roomname, roomId, image})
          }>
          <Image
            source={require('../../assets/backIconB.png')}
            style={SettingStyle.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          {findArray?.image ? (
            <Image
              source={{uri: findArray?.image}}
              style={SettingStyle.roomImage}
            />
          ) : (
            <Image
              source={require('../../assets/group.png')}
              style={SettingStyle.roomImage}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('subChange', {roomId, roomname})}>
          <Image
            source={require('../../assets/OptionB.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>

      <View style={SettingStyle.roomInfoContainer}>
        <Text style={SettingStyle.roomName}>{findArray?.name}</Text>

        <View style={SettingStyle.menuIcon}>
          <TouchableOpacity style={SettingStyle.menuItem}>
            <Image
              source={require('../../assets/callB.png')}
              style={SettingStyle.menuImage}
            />
            <Text style={SettingStyle.menuText}>Audio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={SettingStyle.menuItem}>
            <Image
              source={require('../../assets/videoB.png')}
              style={SettingStyle.menuImage}
            />
            <Text style={SettingStyle.menuText}>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={SettingStyle.menuItem}>
            <Image
              source={require('../../assets/searchB.png')}
              style={SettingStyle.menuImage}
            />
            <Text style={SettingStyle.menuText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={SettingStyle.section}>
        <Text style={SettingStyle.sectionTitle}>Add room description</Text>
        <Text style={SettingStyle.sectionSubtitle}>Created on 03/07/2023</Text>
      </View>

      <View style={SettingStyle.section}>
        {array?.map((item, ind) => {
          const {image, title, subTitle} = item;
          return (
            <View key={ind} style={SettingStyle.row}>
              <Image source={image} style={SettingStyle.rowImage} />
              <View style={SettingStyle.rowContent}>
                <Text style={SettingStyle.rowTitle}>{title}</Text>
                {/* {subTitle && (
                  <Text style={SettingStyle.rowSubtitle}>{subTitle}</Text>
                )} */}
              </View>
            </View>
          );
        })}
      </View>

      <View style={SettingStyle.section}>
        {array?.map((item, ind) => {
          const {image, title2} = item;
          return (
            <View key={ind} style={SettingStyle.row}>
              <Image source={image} style={SettingStyle.rowImage} />
              <Text style={[{marginLeft: '6%'}, SettingStyle.rowTitle]}>
                {title2}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={SettingStyle.section}>
        {array?.map((item, ind) => {
          const {image, title2} = item;
          return (
            <View key={ind} style={SettingStyle.row}>
              <Image source={image} style={SettingStyle.rowImage} />
              <Text style={[{marginLeft: '6%'}, SettingStyle.rowTitle]}>
                {title2}
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
