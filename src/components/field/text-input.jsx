import React from 'react';
import {TextInput, View} from 'react-native';

// hook form
import {Controller} from 'react-hook-form';
import {Text} from 'react-native-paper';

export const CustomInput = ({
  control,
  name,
  errors,
  label,
  errorMessage,
  placeholder,
}) => {
  return (
    <>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => {
            return (
              <>
                <View
                  style={{
                    margin: 3,
                    color: 'white',
                  }}>
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    placeholder={placeholder}
                    placeholderTextColor="white"
                    mode="outlined"
                    style={{
                      borderRadius: 10,
                      color: 'white',
                      borderColor: 'white',
                      borderWidth: 1,
                      paddingLeft: 20,
                    }}
                  />
                </View>
              </>
            );
          }}
          name={name}
        />
        {errors[name] && (
          <Text
            style={{color: '#FFFF00', marginVertical: 3}}
            variant={'labelSmall'}>
            {errors[name].message === '' ? `${label} is required.` : ''}
          </Text>
        )}
      </View>
    </>
  );
};
