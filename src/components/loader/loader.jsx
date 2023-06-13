import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Text} from '../text/text';

export const CustomLoader = () => {
  return (
    <SkeletonPlaceholder>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((value, ind) => {
        return (
          <View
            key={ind}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 15,
              borderRadius: 10,
              marginBottom: 15,
              borderColor: '#E3EBF0',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{width: 35, height: 35, borderRadius: 35}} />
              <View style={{marginLeft: 17}}>
                <View
                  style={{
                    width: 70,
                    height: 10,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
                <View
                  style={{
                    width: 120,
                    height: 10,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </View>
            </View>
            <View style={{width: 20, height: 20, borderRadius: 5}} />
          </View>
        );
      })}
    </SkeletonPlaceholder>
  );
};
export const SingleCustomLoader = () => {
  return (
    <SkeletonPlaceholder>
      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13].map((value, ind) => {
        return (
          <View
            key={ind}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderWidth: 1,
              borderLeftWidth: 8,
              paddingHorizontal: 10,
              paddingVertical: 15,
              borderRadius: 10,
              marginBottom: 15,
              borderColor: '#E3EBF0',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {/* <View style={{width: 35, height: 35, borderRadius: 35}} /> */}
              <View style={{marginLeft: 17}}>
                <View
                  style={{
                    width: 70,
                    height: 10,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
                {/* <View
                  style={{
                    width: 120,
                    height: 10,
                    borderRadius: 10,
                    margin: 3,
                  }}
                /> */}
              </View>
            </View>
            <View style={{width: 20, height: 20, borderRadius: 5}} />
          </View>
        );
      })}
    </SkeletonPlaceholder>
  );
};
export const CustomLoaderTwo = ({typeFooter, typeCircle, typeBtn}) => {
  return (
    <View style={{backgroundColor: '#fafafa'}}>
      <SkeletonPlaceholder>
        {[1, 2, 3, 4].map((val, ind) => {
          return (
            <View
              key={ind}
              style={{
                borderWidth: 1,
                paddingHorizontal: 10,
                paddingVertical: 25,
                // width: '100%',
                // height: '66%',
                borderRadius: 10,
                marginBottom: 15,
                borderColor: '#E3EBF0',
              }}>
              {/* HEADER VIEW */}
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{width: 45, height: 45, borderRadius: 35}}></View>
                  <View
                    style={{
                      display: 'flex',
                      marginLeft: '5%',
                    }}>
                    <View
                      style={{
                        width: 120,
                        height: 10,
                        borderRadius: 10,
                        margin: 3,
                      }}></View>
                    <View
                      style={{
                        width: 70,
                        height: 10,
                        borderRadius: 10,
                        margin: 3,
                      }}
                    />
                  </View>
                </View>
                <View style={{width: 60, height: 30, borderRadius: 5}}></View>
              </View>
              {/* BODY VIEW */}
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  marginTop: '6%',
                }}>
                {[1, 2, 3].map((val, ind) => {
                  return (
                    <View
                      key={ind}
                      style={{width: 60, height: 10, borderRadius: 5}}></View>
                  );
                })}
              </View>
              <View
                style={{
                  width: '100%',
                  height: 1,
                  borderRadius: 5,
                  marginTop: '4%',
                }}></View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  marginTop: '4%',
                }}>
                {[1, 2, 3].map((val, ind) => {
                  return (
                    <View
                      key={ind}
                      style={{width: 60, height: 10, borderRadius: 5}}></View>
                  );
                })}
              </View>

              {/* FOOTER VIEW */}
              {typeCircle && (
                <View
                  style={{
                    marginTop: 35,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',
                    width: '100%',
                  }}>
                  <View
                    style={{
                      height: 80,
                      width: 80,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor: '#E3EBF0',
                      borderWidth: 4,
                      borderRadius: 50,
                    }}>
                    <View
                      style={{width: 60, height: 6, borderRadius: 5}}></View>
                    <View
                      style={{
                        width: 40,
                        height: 6,
                        borderRadius: 5,
                        marginTop: 4,
                      }}></View>
                  </View>
                </View>
              )}
              {typeBtn && (
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                    marginTop: '10%',
                  }}>
                  <View
                    style={{width: 110, height: 40, borderRadius: 5}}></View>
                  <View
                    style={{width: 110, height: 40, borderRadius: 5}}></View>
                </View>
              )}
              {typeFooter && (
                <View
                  style={{
                    width: 40,
                    height: 10,
                    borderRadius: 5,
                    marginTop: '9%',
                    marginLeft: '3%',
                  }}></View>
              )}
            </View>
          );
        })}
      </SkeletonPlaceholder>
    </View>
  );
};
