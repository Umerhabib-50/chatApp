import React, {useRef, useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';

export const StatusShow = ({navigation, route}) => {
  const {user, image, statuses} = route.params;
  const flatListRef = useRef(null);
  const [imageUri, setImageUri] = useState('');
  const {width} = Dimensions.get('window');

  useEffect(() => {
    const navigateToNextIndex = currentIndex => {
      if (currentIndex === statuses.length - 1) {
        navigation.navigate('Status');
      } else {
        flatListRef.current.scrollToIndex({index: currentIndex + 1});
      }
    };

    let currentIndex = 0;
    const timer = setInterval(() => {
      navigateToNextIndex(currentIndex);
      currentIndex++;
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const renderItem = ({item}) => {
    const {text, mediaUrl} = item;
    setImageUri(mediaUrl);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
          height: '100%',
        }}>
        <View>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 10,
            }}>
            {text}
          </Text>
        </View>
        <View>
          {mediaUrl && (
            <Image
              style={{width: width, height: '70%'}}
              source={{uri: mediaUrl}}
            />
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#9dc183'}}>
      <View style={{height: '10%', flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Status')}>
          <Image
            style={{height: 25, width: 25, marginLeft: '3%'}}
            source={require('../../../assets/backIcon.png')}
          />
        </TouchableOpacity>
        <Image
          style={{height: 40, width: 40, borderRadius: 50}}
          source={{uri: image}}
        />
        <Text style={{marginLeft: '2%', fontSize: 20, color: '#ffffff'}}>
          {user}
        </Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          ref={flatListRef}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          data={statuses}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};
