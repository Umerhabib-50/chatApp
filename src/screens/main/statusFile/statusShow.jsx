import React, {useRef, useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import * as Progress from 'react-native-progress';

export const StatusShow = ({navigation, route}) => {
  const {user, image, statuses} = route.params;
  const flatListRef = useRef(null);
  const {width} = Dimensions.get('window');
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [holdStatus, setHoldStatus] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      if (!holdStatus) {
        if (progress >= 1) {
          if (currentIndex === statuses.length - 1) {
            navigation.navigate('Status');
            setProgress(0);
            setCurrentIndex(0);
          } else {
            setCurrentIndex(prevIndex => prevIndex + 1);
            flatListRef.current.scrollToIndex({index: currentIndex + 1});
          }
        } else {
          setProgress(prevProgress => prevProgress + 0.01);
        }
      }
    }, 10);
    return () => {
      clearInterval(timer);
    };
  }, [holdStatus, progress, currentIndex, navigation, statuses.length]);

  useEffect(() => {
    setProgress(0);
  }, [currentIndex]);
  const handlePressIn = () => {
    setHoldStatus(true);
  };

  const handlePressOut = () => {
    setHoldStatus(false);
  };

  const renderItem = ({item}) => {
    const {text, mediaUrl} = item;

    return (
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: width,
            height: '100%',
          }}>
          <View>
            {mediaUrl && (
              <Image
                style={{width: width, height: '70%', marginTop: '5%'}}
                source={{uri: mediaUrl}}
              />
            )}
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              // height: '20%',
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: text && mediaUrl ? 15 : 25,
                textAlign: 'center',
                marginBottom: 10,
                maxWidth: '90%',
              }}>
              {text}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 1)'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 1)',
          }}>
          <Progress.Bar
            progress={progress}
            height={2}
            width={width}
            color={'#ffffff'}
          />
        </View>

        <View
          style={{
            height: '10%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Status')}>
            <Image
              style={{height: 25, width: 25, marginLeft: '3%'}}
              source={require('../../../assets/backIcon.png')}
            />
          </TouchableOpacity>

          <Image
            style={{height: 40, width: 40, borderRadius: 50}}
            source={
              image ? {uri: image} : require('../../../assets/msgUser.png')
            }
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
            onScroll={event => {
              const contentOffsetX = event.nativeEvent.contentOffset.x;
              const index = Math.round(contentOffsetX / width);
              if (index !== currentIndex) {
                setCurrentIndex(index);
                setProgress(0);
              }
            }}
          />
        </View>
      </View>
    </>
  );
};
