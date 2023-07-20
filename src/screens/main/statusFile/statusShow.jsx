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
  const [progresses, setProgresses] = useState(statuses.map(() => 0));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [holdStatus, setHoldStatus] = useState(false);
  const [timeIn, setTimeIn] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      if (!holdStatus) {
        if (progresses[currentIndex] < 1) {
          setProgresses(prevProgresses => {
            const updatedProgresses = [...prevProgresses];
            updatedProgresses[currentIndex] += 0.01;
            return updatedProgresses;
          });
        } else {
          if (currentIndex === statuses.length - 1) {
            navigation.navigate('Status');
            setCurrentIndex(0);
          } else {
            setCurrentIndex(prevIndex => prevIndex + 1);
            flatListRef.current.scrollToIndex({index: currentIndex + 1});
          }
        }
      }
    }, 10);
    return () => {
      clearInterval(timer);
    };
  }, [holdStatus, progresses, currentIndex, navigation, statuses.length]);

  // useEffect(() => {
  //   setProgresses(statuses.map((_, index) => (index < currentIndex ? 1 : 0)));
  // }, [currentIndex, statuses]);

  const handlePressIn = event => {
    setHoldStatus(true);
    const date = new Date();
    const currentTime = date.getTime();
    setTimeIn(currentTime);
  };

  const handlePressOut = event => {
    const {locationX} = event.nativeEvent;
    const date = new Date();
    const currentTime = date.getTime();

    if (currentTime - timeIn < 100) {
      if (locationX < width / 2 && currentIndex > 0) {
        flatListRef.current.scrollToIndex({index: currentIndex - 1});

        setProgresses(prevProgresses => {
          const updatedProgresses = prevProgresses.map((progress, index) => {
            if (index < currentIndex) {
              return 1;
            } else {
              return 0;
            }
          });

          return updatedProgresses;
        });
      }
      if (locationX > width / 2 && currentIndex < statuses.length - 1) {
        flatListRef.current.scrollToIndex({index: currentIndex + 1});
        setProgresses(prevProgresses => {
          const updatedProgresses = prevProgresses.map((progress, index) => {
            if (index < currentIndex) {
              return 1;
            } else {
              return 0;
            }
          });

          return updatedProgresses;
        });
      }
    } else {
      setHoldStatus(false);
    }

    setHoldStatus(false);
  };

  const renderItem = ({item, index}) => {
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

          <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              paddingTop: 5,
              paddingHorizontal: 3,
            }}>
            {statuses.map((_, index) => {
              const progress =
                index < currentIndex
                  ? 1
                  : index > currentIndex
                  ? 0
                  : progresses[index];
              return (
                <Progress.Bar
                  style={{borderColor: 'black', backgroundColor: 'gray'}}
                  key={index}
                  progress={progress}
                  height={3}
                  width={width / statuses.length - 4}
                  color={'#ffffff'}
                  animated={false}
                />
              );
            })}
          </View>
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
            keyExtractor={(_, index) => index.toString()}
            onScroll={event => {
              const contentOffsetX = event.nativeEvent.contentOffset.x;
              const newIndex = Math.round(contentOffsetX / width);

              setProgresses(prevProgresses => {
                const updatedProgresses = prevProgresses.map(
                  (progress, index) => {
                    if (index === currentIndex) {
                      return contentOffsetX > newIndex * width ? 1 : 0;
                    } else if (index < currentIndex) {
                      return 1;
                    } else {
                      return 0;
                    }
                  },
                );

                return updatedProgresses;
              });

              setCurrentIndex(newIndex);
            }}
          />
        </View>
      </View>
    </>
  );
};
