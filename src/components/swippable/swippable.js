import React, {useRef} from 'react';
import {View, Animated, PanResponder, Text, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export const SwipeableMessage = ({
  children,
  message,
  setShowReply,
  setReplyTo,
  index,
  messages,
  scrollToBottom,
}) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        const {dx, dy} = gestureState;
        return Math.abs(dx) > Math.abs(dy);
      },
      onPanResponderMove: (event, gestureState) => {
        const {dx} = gestureState;
        pan.setValue({x: dx, y: 0});
        if (pan.x._value < -20 || pan.x._value < 30) {
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            useNativeDriver: false,
          }).start();
        }
      },
      onPanResponderRelease: () => {
        if (pan.x._value < -50 || pan.x._value > 100) {
          // console.log('Reply triggered!', pan.x._value);
          // Implement your reply logic here
          setShowReply(true);
          setReplyTo({message: message.message, username: message.username});
        }

        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start(() => {
          if (index > messages.length - 5) {
            // Scroll to the bottom after the animation is finished
            console.log('swippable', index, messages.length - 6);
            scrollToBottom();
          }
        });
      },
    }),
  ).current;

  const panStyle = {
    transform: pan.getTranslateTransform(),
  };

  return (
    <GestureHandlerRootView>
      <Animated.View style={[panStyle]} {...panResponder.panHandlers}>
        {children}
      </Animated.View>
    </GestureHandlerRootView>
  );
};
