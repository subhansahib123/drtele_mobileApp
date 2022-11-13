import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

/// Icons
import FontisoIcon from 'react-native-vector-icons/Fontisto';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

import Button from '../../../common/Button';

import DetailTabs from '../../../common/DetailTabs';

export default function DoctorDetails({navigation}) {
  const {colors} = useSelector(state => state);

  const Details = [
    {
      bgColor: colors?.gradients?.lightGreen?.first,
      number: 500,
      text: 'Patients',
    },
    {
      bgColor: colors?.gradients?.lightBlue?.second,
      number: 50,
      text: 'Surgery',
    },
    {
      bgColor: colors?.gradients?.pink?.first,
      number:  `10 Year`,
      text: 'Experience',
    },
  ];

  return (
    <ScrollView
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View
        style={[
          styles?.doctorProfileBox,
          {backgroundColor: colors?.accent?.white},
        ]}>
        <View style={styles?.boxUpperSection}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.leftContent}>
              <View
                style={[
                  styles.userProfile,
                  {backgroundColor: colors.accent.shadowColor},
                ]}>
                <Text>60 X 60</Text>
              </View>
              <View
                style={{
                  marginLeft: 10,
                }}>
                <Text style={[styles.userName, {color: colors.accent.dark}]}>
                XYZ Health care
                </Text>
                <Text style={styles.userNameCaption}>Dental Specialist</Text>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontisoIcon
                    name="star"
                    size={13}
                    color={colors?.gradients?.yellow?.second}
                  />

                  <Text style={{marginHorizontal: '3%'}}>4.8</Text>
                  <Text>(200 Review )</Text>
                </View>
              </View>
            </View>
            <View style={styles.rightContent}>
              <View
                style={[
                  styles?.badgeIconCircle,
                  {backgroundColor: colors?.gradients?.yellow?.second},
                ]}>
                <FontAwesomeIcon
                  name="medal"
                  size={20}
                  color={colors?.accent?.white}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: colors?.accent?.lightGrey,
              borderBottomWidth: 1,
              marginTop: '3%',
            }}></View>
        </View>
        <View style={styles?.experienceDetals}>
          {Details.map((data, index) => {
            return (
              <View
                key={index}
                style={[styles?.boxWrapper, {backgroundColor: data.bgColor}]}>
                <Text style={[styles?.number, {color: colors?.accent?.white}]}>
                  {data.number}
                </Text>
                <Text style={[styles?.text, {color: colors?.accent?.white}]}>
                  {data.text}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={styles?.buttonSection}>
          <Button
            text="Find doctors"
            buttonColor={colors?.accent?.shadowColor}
            buttonTextColor={colors?.gradients?.lightBlue?.second}
            handlePress={()=>navigation.navigate('Search Doctors')}
          />
        </View>
      </View>
      <View style={styles?.tabSection}>
        <DetailTabs firstRouteName = 'About Hospital' secondRouteName = 'Doctors' thirdRouteName = 'Review'/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  doctorProfileBox: {
    marginHorizontal: '5%',
    borderRadius: 15,
    paddingHorizontal: '3%',
    marginTop: '5%',
  },
  boxUpperSection: {
    marginVertical: '5%',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContent: {},
  userProfile: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  userNameCaption: {
    fontSize: 16,
    color: 'grey',
  },
  badgeIconCircle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  experienceDetals: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boxWrapper: {
    flexBasis: '30%',
    borderRadius: 10,
    paddingVertical: '6%',
  },
  number: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonSection: {
    marginVertical: '7%',
  },
  tabSection : {
    marginHorizontal : '5%',
    marginTop : '5%',
    // flexBasis : '50%'
  },
});
