import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

// hook form
import {Controller} from 'react-hook-form';

import {TextInput} from 'react-native-paper';

// import components

// styles
import styles from './input.styles';
import {ddstyles, multiSelect} from './input.styles';
import {Text} from '../text/text';
import {Icon} from '../common';
import {Dropdown} from 'react-native-element-dropdown';
import {COLORS} from '../../constant';
import {MultiSelect} from 'react-native-element-dropdown';
import {useEffect} from 'react';
export const CustomInput = ({
  style,
  control,
  rules,
  disabled,
  name,
  defaultValue = '',
  placeholder,
  errors,
  errorMessage,
  password,
  keyboardType,
  maxNumber,
  iconName,
  mode = 'outlined',
  label,
  outline,
  iconSize = '20',
  onFocus,
  onBlur,
  multiline,
  onPress,
  data,
  type = 'input',
}) => {
  const [showPassIcon, setShowPassIcon] = useState(password ? true : false);

  // this focus state is for dropdown label color condition
  const [isFocus, setIsFocus] = useState(false);

  const [dd_value, setDdvalue] = useState({
    label: defaultValue,
    value: defaultValue,
  });

  const [mdd_value, setmddvalue] = useState(defaultValue);

  // this focus state is for input label color condition
  const [focus, setFocus] = useState(false);

  // const [height, setHeight] = useState(50);

  return (
    <>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: password
              ? {
                  value: 8,
                  message: 'Password must have at least 8 characters',
                }
              : name == 'contact'
              ? {value: 11, message: 'Mobile number must be 11 Digits'}
              : null,
          }}
          render={({field: {onChange, onBlur, value}}) => {
            const renderLabel = () => {
              if (value || isFocus) {
                return (
                  <Text
                    style={[ddstyles.label]}
                    color={isFocus ? COLORS.primary : 'black'}>
                    {label}
                  </Text>
                );
              }
            };

            return (
              <>
                <View style={[styles.textInputView, style]}>
                  {/* { <Text variant="titleMedium">{title}</Text> } */}

                  {type == 'input' && (
                    <TextInput
                      activeOutlineColor={COLORS.primary}
                      outlineColor={errors[name] ? COLORS.error : null}
                      multiline={multiline}
                      onFocus={() => {
                        if (onFocus) {
                          onFocus();
                        }

                        setFocus(true);
                      }}
                      label={
                        // label
                        <Text
                          style={{
                            backgroundColor: COLORS.white,
                          }}
                          color={
                            focus
                              ? COLORS.primary
                              : value
                              ? COLORS.black
                              : COLORS.LightGray
                          }>
                          {label}
                        </Text>
                      }
                      mode={mode}
                      onBlur={() => {
                        onBlur();
                        setFocus(false);
                      }}
                      value={value}
                      disabled={disabled}
                      onChangeText={onChange}
                      placeholder={placeholder}
                      secureTextEntry={showPassIcon}
                      // secureTextEntry={password && showPassIcon ? true : false}
                      keyboardType={keyboardType}
                      textColor={'black'}
                      maxLength={name === 'contact' ? 11 : maxNumber}
                      right={
                        password ? (
                          <TextInput.Icon
                            onPress={() => {
                              setShowPassIcon(!showPassIcon);
                            }}
                            icon={() => (
                              <Icon
                                name={showPassIcon ? 'CloseIcon' : 'OpenIcon'}
                                size={iconSize}
                              />
                            )}
                          />
                        ) : iconName ? (
                          <TextInput.Icon
                            onPress={onPress}
                            icon={() => (
                              <Icon name={iconName} size={iconSize} />
                            )}
                          />
                        ) : null
                      }
                    />
                  )}
                  {type == 'dropdown' && (
                    <View style={[ddstyles.container, style]}>
                      {renderLabel()}
                      <Dropdown
                        style={[
                          ddstyles.dropdown,
                          isFocus && {borderColor: COLORS.primary},
                          errors[name] && {borderColor: COLORS.error},
                        ]}
                        placeholderStyle={ddstyles.placeholderStyle}
                        selectedTextStyle={ddstyles.selectedTextStyle}
                        //   inputSearchStyle={ddstyles.inputSearchStyle}
                        iconStyle={ddstyles.iconStyle}
                        data={data}
                        //   search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus && `${label}`}
                        //   searchPlaceholder="Search..."
                        value={dd_value}
                        onFocus={() => {
                          setIsFocus(true);
                          // setHeight(200);
                        }}
                        onBlur={() => {
                          setIsFocus(false);
                          // setHeight(50);
                        }}
                        onChange={item => {
                          const {value} = item;
                          onChange(value);
                          setDdvalue(item);
                        }}
                        dropdownPosition={label == 'Gender' ? 'top' : 'bottom'}
                      />
                    </View>
                  )}
                  {type == 'multiSelect' && (
                    <MultiSelect
                      dropdownPosition={'bottom'}
                      placeholderStyle={{
                        color:
                          mdd_value.length > 0 ? 'black' : COLORS.LightGray,
                      }}
                      style={[
                        multiSelect.multiSelect,
                        isFocus && {borderColor: COLORS.primary},
                        errors[name] && {borderColor: 'red'},
                      ]}
                      onFocus={() => {
                        setIsFocus(true);
                        // setHeight(200);
                      }}
                      onBlur={() => {
                        setIsFocus(false);
                        // setHeight(50);
                      }}
                      data={data}
                      labelField="label"
                      valueField="value"
                      placeholder={label}
                      value={mdd_value}
                      onChange={item => {
                        onChange(item);
                        setmddvalue(item);
                      }}
                      activeColor={COLORS.primary}
                      itemContainerStyle={{
                        margin: 1,
                      }}
                      itemTextStyle={{color: 'black'}}
                      // containerStyle={{marginVertical: 10}}
                    />
                  )}
                </View>
              </>
            );
          }}
          name={name}
          defaultValue={defaultValue}
        />
        {errors[name] && (
          <Text color="red" variant={'labelSmall'}>
            {errors[name].message === ''
              ? `${label} is required.`
              : password
              ? errors[name].message
              : name == 'contact' && errors[name].message}
          </Text>
        )}
        {/* {password && password.toString().length < 8 && (
          <Text color="red" variant={'labelSmall'}>
            'Password must be at least of 8 characters'
          </Text>
        )} */}
      </View>
    </>
  );
};
