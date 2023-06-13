import React, {useState} from 'react';
import {useRef} from 'react';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {TouchableRipple} from 'react-native-paper';
import {COLORS} from '../../constant';

import {Icon} from '../common';
import {Text} from '../text/text';

export const CustomDate = ({
  date,
  setDate,
  style,
  title,
  mode = 'date',
  defaultValue,
  editDate,
  setEditdate,
}) => {
  const initialRender = useRef(true);
  const [open, setOpen] = useState(false);

  // const [customdate, setcustomedate] = useState(defaultValue);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (defaultValue) {
        setEditdate(date.toLocaleDateString());
      }
    }
  }, [date]);
  return (
    <View style={[{marginVertical: 10, backgroundColor: 'white'}, style]}>
      <TouchableRipple
        onPress={() => {
          setOpen(true);
        }}>
        <>
          <View style={[dateStyle.main]}>
            <Text color={'black'} style={[dateStyle.text, {fontSize: 13}]}>
              {mode == 'time' && date.toLocaleTimeString()}
              {mode == 'date' && defaultValue
                ? editDate
                : date.toLocaleDateString()}
            </Text>

            {mode == 'time' ? (
              <Icon name={'ClockIcon'} size={18} />
            ) : (
              <Icon name={'CalendarIcon'} size={18} />
            )}
          </View>
          <Text color={'black'} style={dateStyle.lable}>
            {title}
          </Text>
        </>
      </TouchableRipple>

      <DatePicker
        mode={mode ? mode : 'date'}
        modal
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
    </View>
  );
};

const dateStyle = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 13,
    paddingVertical: 17,
    position: 'relative',
  },
  text: {
    fontSize: 16,
  },
  lable: {
    fontSize: 12,
    position: 'absolute',
    backgroundColor: COLORS.white,
    top: -8,
    left: 10,
    paddingHorizontal: 5,
  },
});
