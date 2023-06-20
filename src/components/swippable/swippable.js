import React, {useRef, useState, useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  PanGestureHandler,
  State,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export const SwipableComponent = ({children}) => {
  const [swiped, setSwiped] = useState(false);
  const translateX = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
    },
    onEnd: event => {
      if (Math.abs(event.translationX) > 120) {
        setSwiped(true);
      } else {
        translateX.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const memoizedGestureHandler = useMemo(() => {
    return (
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        {children}
      </PanGestureHandler>
    );
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Animated.View style={[styles.container, animatedStyle]}>
        {memoizedGestureHandler}
        <View style={styles.contentContainer}>{children}</View>
      </Animated.View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});
