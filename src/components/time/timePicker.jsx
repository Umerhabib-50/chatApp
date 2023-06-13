import React, {useState} from 'react';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {TextInput} from 'react-native-paper';
import {COLORS} from '../../constant';

export const TimePicker = ({date, setDate, label}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <DatePicker
        modal
        mode="time"
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <TextInput
        label={label}
        disabled
        mode="outlined"
        value={date.toLocaleTimeString()}
        style={{borderColor: COLORS.black}}
      />
    </>
  );
};
