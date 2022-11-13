import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Button from '../../../common/Button';

export default function BookingReview({navigation}) {
  const {colors} = useSelector(state => state);

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View
        style={[styles?.boxWrapper, {backgroundColor: colors?.accent?.white}]}>
        <View
          style={[
            styles?.TopSection,
            {backgroundColor: colors?.gradients?.lightBlue?.second},
          ]}>
          <Text style={[styles?.headerText, {color: colors?.accent?.white}]}>
            Date and Time
          </Text>
        </View>
        <View style={styles?.textSection}>
          <View style={styles?.dateWrapper}>
            <Text style={[styles?.topText, {color: colors?.accent?.dark}]}>
              Monday, 07 May, 2021
            </Text>
            <Text style={[styles?.captionText, {color: colors?.accent?.grey}]}>
              12:30 AM
            </Text>
          </View>
          <View
            style={[
              styles?.iconCircle,
              {backgroundColor: colors?.gradients?.lightBlue?.second},
            ]}>
            <FontAwesomeIcon
              name="play"
              size={15}
              color={colors?.accent?.white}
            />
          </View>
        </View>
        <View
          style={[
            styles?.detailsSection,
            {backgroundColor: colors?.accent?.lightGrey},
          ]}>
          <Text
            style={[
              styles?.headerText,
              {color: colors?.gradients?.lightBlue?.second},
            ]}>
            Doctors
          </Text>
        </View>
        <View
          style={[styles.boxWrapper1, {backgroundColor: colors.accent.white}]}>
          <View style={styles.leftContent}>
            <View
              style={[
                styles.userProfile,
                {backgroundColor: colors.accent.shadowColor},
              ]}></View>
            <View
              style={{
                marginLeft: 10,
              }}>
              <Text style={[styles.userName, {color: colors.accent.dark}]}>
                Dr. Aliya Vat
              </Text>
              <Text style={styles.userNameCaption}>Personal Injured</Text>
            </View>
          </View>
          <View
            style={[
              styles?.iconCircle,
              {backgroundColor: colors?.gradients?.lightBlue?.second},
            ]}>
            <FontAwesomeIcon
              name="play"
              size={15}
              color={colors?.accent?.white}
            />
          </View>
        </View>
        <View
          style={[
            styles?.detailsSection,
            {backgroundColor: colors?.accent?.lightGrey},
          ]}>
          <Text
            style={[
              styles?.headerText,
              {color: colors?.gradients?.lightBlue?.second},
            ]}>
            Address
          </Text>
        </View>
        <View style={styles?.textSection}>
          <View style={styles?.dateWrapper}>
            <Text style={[styles?.topText, {color: colors?.accent?.dark}]}>
              Dhaka, Bangladesh
            </Text>
            <Text style={[styles?.captionText, {color: colors?.accent?.grey}]}>
              32km Away
            </Text>
          </View>
          <View
            style={[
              styles?.iconCircle,
              {backgroundColor: colors?.gradients?.lightBlue?.second},
            ]}>
            <FontAwesomeIcon
              name="play"
              size={15}
              color={colors?.accent?.white}
            />
          </View>
        </View>
        <View
          style={[
            styles?.detailsSection,
            {backgroundColor: colors?.accent?.lightGrey},
          ]}>
          <Text
            style={[
              styles?.headerText,
              {color: colors?.gradients?.lightBlue?.second},
            ]}>
            Cost
          </Text>
        </View>
        <View style={styles?.costSection}>
          <Text style={{color: colors?.accent?.dark, fontSize: 15}}>
            Cost $120.00
          </Text>
          <View style={styles?.multipliedValueSection}>
            <Text style={{color: colors?.accent?.dark, fontSize: 15}}>
              Hourly $60 x 2
            </Text>
            <Text
              style={[
                styles?.multipliedValue,
                {color: colors?.gradients?.lightBlue?.second},
              ]}>
              $120.00
            </Text>
          </View>
          <View
            style={[
              styles?.horizontalLine,
              {borderBottomColor: colors?.accent?.lightGrey},
            ]}></View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={[styles?.total, {color: colors?.accent?.dark}]}>
              Grand Total{' '}
            </Text>
            <Text
              style={[
                styles?.totalValue,
                {color: colors?.gradients?.lightGreen?.first},
              ]}>
              $120.00{' '}
            </Text>
          </View>
        </View>
        <View style={styles?.buttonSection}>
          <Button
            text="Confirm"
            buttonColor={colors?.gradients?.lightBlue?.second}
            buttonTextColor={colors?.accent?.white}
            handlePress={()=>navigation.navigate('Booking Success')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxWrapper: {
    marginHorizontal: '5%',
    borderRadius: 15,
    marginTop: '5%',
  },
  TopSection: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingHorizontal: '5%',
    paddingVertical: '3%',
  },
  headerText: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  textSection: {
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '3%',
  },
  dateWrapper: {
    flexDirection: 'column',
  },
  topText: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  captionText: {
    fontSize: 17,
  },
  iconCircle: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsSection: {
    paddingHorizontal: '5%',
    paddingVertical: '3%',
  },
  boxWrapper1: {
    paddingHorizontal: '5%',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '5%',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfile: {
    width: 47,
    height: 47,
    borderRadius: 47 / 2,
  },
  userName: {
    fontSize: 23,
    fontWeight: '600',
  },
  userNameCaption: {
    fontSize: 16,
    color: 'grey',
  },
  costSection: {
    paddingHorizontal: '5%',
  },
  multipliedValueSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  multipliedValue: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    marginVertical: '3%',
  },
  total: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonSection: {
    paddingHorizontal: '5%',
    marginTop: '8%',
    marginBottom: '15%',
  },
});
