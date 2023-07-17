import React, {useRef, useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ProgressBar,
  ScrollView,
} from 'react-native';
import * as Progress from 'react-native-progress';
export const StatusShow = ({navigation, route}) => {
  const {user, image, statuses} = route.params;
  const flatListRef = useRef(null);
  const [imageUri, setImageUri] = useState('');
  const {width} = Dimensions.get('window');
  const [showText, setShowText] = useState(false);
  const [progress, setProgress] = useState(0);
  const [index, setIndex] = useState('');
  console.log('index check', index);
  const handleToggleText = () => {
    setShowText(!showText);
  };
  useEffect(() => {
    const durationInSeconds = 5;
    const interval = 200; // Update the progress every 100 milliseconds
    const totalIntervals = (durationInSeconds * 1000) / interval;
    let currentInterval = 0;

    const timer = setInterval(() => {
      if (currentInterval >= totalIntervals) {
        clearInterval(timer);
      } else {
        const newProgress = (currentInterval + 1) / totalIntervals;
        setProgress(newProgress);
        currentInterval++;
      }
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, []);
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
      setProgress(0);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const renderItem = ({item, ind}) => {
    console.log('index', ind);
    setIndex(ind);
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
            height: '20%',
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: text && mediaUrl ? 15 : 25,
                textAlign: 'center',
                marginBottom: 10,
                maxWidth: '90%',
              }}>
              {showText ? text : text?.slice(0, 100)}
            </Text>
          </ScrollView>
        </View>
        <View>
          {text?.length >= 70 && (
            <TouchableOpacity onPress={() => handleToggleText()}>
              <Text style={{color: '#128c7e'}}>
                {showText ? 'Hide' : '...Read More'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: '#9dc183'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#9dc183',
          }}>
          <Progress.Bar progress={progress} width={width} color={'#ffffff'} />
        </View>
        <View
          style={{height: '10%', flexDirection: 'row', alignItems: 'center'}}>
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
    </>
  );
};
