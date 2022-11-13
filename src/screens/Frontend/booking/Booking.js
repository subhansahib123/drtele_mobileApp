import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';

import CalendarStrip from 'react-native-calendar-strip';

import Button from '../../../common/Button';

export default function Booking({navigation}) {
  const {colors} = useSelector(state => state);
  const [slected, setSelected] = useState(true);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <CalendarStrip
        scrollable
        style={styles?.calendarStyle}
        calendarColor={colors?.gradients?.pink?.first}
        calendarHeaderStyle={[
          styles?.calendarHdStyle,
          {color: colors?.accent?.white},
        ]}
        dateNumberStyle={[styles?.dateNumStyle, {color: colors?.accent?.white}]}
        dateNameStyle={[styles?.dateNmStyle, {color: colors?.accent?.white}]}
        iconContainer={{flex: 0.1}}
        onDateSelected={val => setSelected(!slected)}
      />

      {slected ? (
        ''
      ) : (
        <>
          <View
            style={[
              styles?.boxWrappper,
              {backgroundColor: colors?.accent?.white},
            ]}>
            <Text style={[styles?.headerText, {color: colors?.accent?.dark}]}>
              Schedule
            </Text>
            <View style={styles?.scheduleSection}>
              <View style={styles?.row}>
                <Text style={[styles?.leftText, {color: colors?.accent?.dark}]}>
                  Time
                </Text>
                <Text
                  style={[
                    styles?.rightText,
                    {color: colors?.gradients?.lightBlue?.second},
                  ]}>
                  12:00 a.m - 5:00 p.m
                </Text>
              </View>
              <View style={styles?.row}>
                <Text style={[styles?.leftText, {color: colors?.accent?.dark}]}>
                  Consultations
                </Text>
                <Text
                  style={[
                    styles?.rightText,
                    {color: colors?.gradients?.lightBlue?.second},
                  ]}>
                  10
                </Text>
              </View>
              <View style={styles?.row}>
                <Text style={[styles?.leftText, {color: colors?.accent?.dark}]}>
                  Per Consultation
                </Text>
                <Text
                  style={[
                    styles?.rightText,
                    {color: colors?.gradients?.lightBlue?.second},
                  ]}>
                  200$
                </Text>
              </View>
            </View>
          </View>
          <View style={styles?.buttonSection}>
            <Button
              text="Confirm Booking"
              buttonColor={colors?.gradients?.lightBlue?.second}
              buttonTextColor={colors?.accent?.white}
              handlePress={()=>navigation.navigate('Add Payment Method')}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  calendarStyle: {
    height: '25%',
    marginHorizontal: '5%',
    borderRadius: 15,
    marginTop: '5%',
  },
  calendarHdStyle: {
    fontSize: 20,
    marginTop: 17,
  },
  dateNumStyle: {
    fontSize: 19,
  },
  dateNmStyle: {
    fontSize: 13,
  },
  boxWrappper: {
    marginHorizontal: '5%',
    marginTop: '10%',
    borderRadius: 15,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    marginVertical: '5%',
  },
  scheduleSection: {
    marginTop: '5%',
    paddingHorizontal: '7%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '5%',
  },
  leftText: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  rightText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonSection: {
    marginHorizontal: '5%',
    marginTop: '7%',
  },
});
