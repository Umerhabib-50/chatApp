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
                    borderRadius: 5,
                    borderWidth: 2,
                    borderColor: 'black',
                    margin: 3,
                  }}>
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    textColor={'black'}
                    placeholder={placeholder}
                  />
                </View>
              </>
            );
          }}
          name={name}
        />
        {errors[name] && (
          <Text
            style={{color: 'red', marginVertical: 3}}
            variant={'labelSmall'}>
            {errors[name].message === '' ? `${label} is required.` : ''}
          </Text>
        )}
      </View>
    </>
  );
};
