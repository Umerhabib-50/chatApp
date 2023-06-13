import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import {COLORS} from '../../constant';
import {CustomButton} from '../button/custom-button';
import {Icon} from '../common';
import {CustomInput} from '../field/text-input';
import {Wrapper} from '../screen/wrapper';
import {Text} from '../text/text';
import {CustomDetailsStyle} from './customDetails';
import {getNumbers} from '../../utils/getNumbers';
export const CustomDetails = ({
  heading,
  value,
  onDelete,
  onEdit,
  children,
  labelDate,
  typeInput,
  date,
  input,
  style,
  amount,
  typeDate,
  typeButton,
  slipHandler,
  genderData,
  typeBottom,
  gender,
  text,
}) => {
  const {
    data: {id, role},
  } = getNumbers();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  let length = heading?.length;
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: 2,
        }}>
        {typeInput &&
          input.map((value, ind) => {
            return (
              <View style={{width: '47%'}} key={ind}>
                <View
                  style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 13,
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderRadius: 5,
                    marginTop: '9%',
                    paddingVertical: '9%',
                    borderColor: COLORS.disable,
                    backgroundColor: COLORS.white,
                  }}>
                  <Text
                    style={{
                      position: 'absolute',
                      top: -10,
                      left: 10,
                      backgroundColor: COLORS.white,
                      paddingHorizontal: 5,
                      fontSize: 13,
                    }}>
                    {value.inputLabel}
                  </Text>
                  <Text>{value.inputValue}</Text>
                </View>
              </View>
            );
          })}

        {gender && (
          <View style={{width: '47%'}}>
            <View
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 13,
                flexDirection: 'row',
                borderWidth: 1,
                borderRadius: 5,
                marginTop: '9%',
                backgroundColor: COLORS.white,
                borderColor: COLORS.disable,
              }}>
              <Text
                style={{
                  position: 'absolute',
                  top: -10,
                  left: 10,
                  backgroundColor: COLORS.white,
                  paddingHorizontal: 5,
                  fontSize: 13,
                }}>
                Gender
              </Text>
              <Text>{genderData}</Text>
            </View>
          </View>
        )}

        {typeButton && (
          <View style={{width: '47%', marginTop: '4%'}}>
            <CustomButton
              style={{paddingVertical: '2%'}}
              title="Pay Slip"
              textColor={COLORS.black}
              color={COLORS.gray}
              onPress={slipHandler}
            />
          </View>
        )}

        {typeDate && (
          <View style={{width: '47%'}}>
            <View
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 13,
                flexDirection: 'row',
                borderWidth: 1,
                borderRadius: 5,
                marginTop: '9%',
                backgroundColor: COLORS.white,
                borderColor: COLORS.disable,
              }}>
              <Text
                style={{
                  position: 'absolute',
                  top: -10,
                  left: 10,
                  backgroundColor: COLORS.white,
                  paddingHorizontal: 5,
                  fontSize: 13,
                }}>
                {labelDate}
              </Text>
              <Text>{date}</Text>
              <Icon name={'CalendarIcon'} size={25} />
            </View>
          </View>
        )}
      </View>

      <View
        style={{display: 'flex', justifyContent: 'space-between', flex: 0.9}}>
        <View>
          <View style={[CustomDetailsStyle.card_head]}>
            {text && (
              <Text variant="titleSmall" style={{textAlign: 'center'}}>
                {text}
              </Text>
            )}
            <View
              style={[{borderBottomWidth: 1}, CustomDetailsStyle.join_card]}>
              {heading.map((item, ind) => {
                const {css, h1} = item;

                return (
                  <View
                    key={ind}
                    style={[
                      CustomDetailsStyle.card,
                      {width: `${100 / length - 2}%`},
                    ]}>
                    <Text
                      variant="labelLarge"
                      color={COLORS.black}
                      style={{
                        textAlign:
                          ind == 0
                            ? 'left'
                            : ind == length - 1
                            ? 'right'
                            : 'center',
                      }}>
                      {h1}
                    </Text>
                  </View>
                );
              })}
            </View>

            <View style={[style, CustomDetailsStyle.join_card]}>
              {value.map((data, ind) => {
                const {css, name} = data;

                return (
                  <View
                    key={ind}
                    style={[
                      CustomDetailsStyle.card,
                      {width: `${100 / length - 2}%`},
                    ]}>
                    <Text
                      style={{
                        textAlign:
                          ind == 0
                            ? 'left'
                            : ind == length - 1
                            ? 'right'
                            : 'center',
                      }}
                      variant="titleSmall"
                      color={COLORS.Lavender}>
                      {name}
                    </Text>
                  </View>
                );
              })}
            </View>
            {typeBottom && (
              <View style={CustomDetailsStyle.total}>
                <View>
                  <Text style={{textAlign: 'center'}}>Total</Text>
                </View>
                <View>
                  <Text style={{textAlign: 'center'}}>{amount}</Text>
                </View>
              </View>
            )}
          </View>

          <>{children}</>
        </View>
        {role?.role == 'Admin' && (
          <View style={CustomDetailsStyle.button}>
            <CustomButton
              style={{width: '47%'}}
              title="Delete"
              onPress={onDelete}
            />

            <CustomButton
              style={{width: '47%'}}
              title="Edit"
              textColor={COLORS.black}
              color={COLORS.Lavender}
              onPress={onEdit}
            />
          </View>
        )}
      </View>
    </>
  );
};
