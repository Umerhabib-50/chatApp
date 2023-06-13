import React from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {Icon} from '../common';
import {Text} from '../text/text';

export const Multiselect = () => {
  const arr = [
    {
      id: 1,
      name: 'Antique Vendor',
      isChecked: false,
    },
    {
      id: 2,
      name: 'Electric Supplies ',
      isChecked: false,
    },
    {
      id: 3,
      name: 'Kitchen Items',
      isChecked: false,
    },
    {
      id: 4,
      name: 'Antique Vendor',
      isChecked: false,
    },
    {
      id: 5,
      name: 'Electric Supplies ',
      isChecked: false,
    },
    {
      id: 6,
      name: 'Kitchen Items',
      isChecked: false,
    },
  ];

  const [state, setState] = useState(arr);
  const [filter, setFilter] = useState([]);

  const setStateAndfilter = newState => {
    setState(newState);
    const filterdata = newState.filter(Fitem => {
      return Fitem.isChecked == true;
    });

    setFilter(filterdata);
  };

  const updateCheckbox = (item, newValue, identity) => {
    if (identity === 'checkbox') {
      const newState = state.map(obj => {
        if (obj.id === item.id) {
          return {...obj, isChecked: newValue};
        }
        return obj;
      });

      setStateAndfilter(newState);
    }

    if (identity === 'text') {
      const newState = state.map(obj => {
        if (obj.id === item.id) {
          return {...obj, isChecked: !newValue};
        }
        return obj;
      });

      setStateAndfilter(newState);
    }
  };

  return (
    <View
      style={{
        borderWidth: 1,
        padding: 15,
        borderRadius: 5,
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'pink',
      }}>
      <Text>MultiSelect</Text>
      <Icon name={'BackIcon'} size={20} />
      {state?.map(item => {
        return (
          <>
            <View style={tailwind(' flex-row py-1 items-center')}>
              <CheckBox
                tintColors={{true: '#F15927', false: 'black'}}
                value={item.isChecked}
                onValueChange={newValue => {
                  updateCheckbox(item, newValue, 'checkbox');
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  updateCheckbox(item, item.isChecked, 'text');
                }}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            </View>
          </>
        );
      })}
    </View>
  );
};
