import {View, ScrollView, RefreshControl} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Header} from '../common';
import {COLORS} from '../../constant';
import {CustomLoader} from '../loader/loader';
import {useDispatch} from 'react-redux';

export const Wrapper = ({
  navigation,
  header_text,
  icon_bg_clr,
  righticon,
  lefticon,
  right_icon_size,
  left_icon_size,
  children,
  title,
  title2,
  onRighticonpress,
  onleftIconpress,
  drawer,
  loading,
  action,
  loadingtype,
  imageCard,
  FlatList,
  image,
  // myRoute,
  // startRunHandler,
  // liveTrack,
  // loading,
}) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(action());
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View
        style={{
          paddingHorizontal: 25,
          paddingVertical: 30,
        }}>
        <Header
          icon_bg_clr={icon_bg_clr}
          righticon={righticon}
          lefticon={lefticon}
          imageCard={imageCard}
          right_icon_size={right_icon_size}
          left_icon_size={left_icon_size}
          title={title}
          title2={title2}
          navigation={navigation}
          header_text={header_text}
          onRighticonpress={onRighticonpress}
          onleftIconpress={onleftIconpress}
          drawer={drawer}
          image={image}
          // myRoute={myRoute}
          // startRunHandler={startRunHandler}
          // liveTrack={liveTrack}
        />
      </View>

      {/* <LoadingWrapper loading={loading}>{children}</LoadingWrapper> */}
      <View
        style={{
          flex: 1,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          padding: 16,
          backgroundColor: COLORS.backGround,
        }}>
        {loading ? (
          <>
            <CustomLoader />
          </>
        ) : (
          <>
            {FlatList ? (
              <>{children}</>
            ) : (
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{flex: 1}}
                contentContainerStyle={{
                  flexGrow: 1,
                  padding: '1%',
                }}
                refreshControl={
                  action && (
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  )
                }>
                {children}
              </ScrollView>
            )}
          </>
        )}
      </View>
    </View>
  );
};
