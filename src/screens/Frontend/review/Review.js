import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import RatingStars from '../../../common/RatingStars';
import Button from '../../../common/Button';

export default function Review({navigation}) {
  const {colors} = useSelector(state => state);

  return (
    <View style={styles?.container}>
      <View
        style={[styles?.boxWrapper1, {backgroundColor: colors?.accent?.white}]}>
        <View
          style={[
            styles?.insideBoxWrapper,
            {backgroundColor: colors?.accent?.shadowColor},
          ]}>
          <Text style={[styles?.headerText, {color: colors?.accent?.dark}]}>
            Back Pain
          </Text>
          <Text style={[styles?.captionText, {color: colors?.accent?.grey}]}>
            Wonderful Doctor
          </Text>
        </View>
        <View style={styles?.bottomSection}>
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
                Dr Rafay
              </Text>
              <Text style={styles.userNameCaption}>XYZ Hospital</Text>
            </View>
          </View>
          <View style={styles.rightContent}>
            <View
              style={[
                styles?.userProfile,
                {backgroundColor: colors?.accent?.shadowColor, marginRight: 8},
              ]}>
              <FontAwesomeIcon
                name="phone-alt"
                size={20}
                color={colors?.gradients?.purple?.second}
              />
            </View>
            <View
              style={[
                styles?.userProfile,
                {backgroundColor: colors?.accent?.shadowColor},
              ]}>
              <EntypoIcon
                name="message"
                size={30}
                color={colors?.gradients?.lightGreen?.second}
              />
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles?.doctorSection, {color: colors?.accent?.dark}]}>
        Doctor
      </Text>
      <View
        style={[
          styles?.doctorProfile,
          {backgroundColor: colors?.accent?.white},
        ]}>
        <View
          style={[
            styles?.doctorProfilePicCircle,
            {backgroundColor: colors?.accent?.shadowColor},
          ]}></View>
        <View style={{flexDirection : 'column',marginTop : 5}}>
          <Text style={[styles?.doctorName, {color: colors?.accent?.dark}]}>
            Alisha Mart
          </Text>
          <RatingStars size={15} />
        </View>
      </View>

      <View
        style={[
          styles.reviewSection,
          {backgroundColor: colors?.accent?.white},
        ]}>
        <Text style={[styles.topText, {color: colors?.accent?.dark}]}>
          How was your session?
        </Text>
        <RatingStars size={35} />

        <View style={styles.textAreaWrapper}>
          <TextInput
            placeholder="Enter Your note here"
            multiline={true}
            numberOfLines={4}
            placeholderTextColor={colors?.accent?.lightDark}
            style={[
              styles.textArea,
              {backgroundColor: colors?.accent?.shadowColor, color: 'black'},
            ]}
          />
        </View>
      </View>
      <View style={styles?.buttonSection}>
        <Button
          text="Submit"
          buttonColor={colors?.gradients?.lightBlue?.second}
          buttonTextColor={colors?.accent?.white}
          handlePress={()=>navigation.navigate('BottomTabs')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxWrapper1: {
    marginHorizontal: '5%',
    marginTop: '5%',
    borderRadius: 15,
  },
  insideBoxWrapper: {
    marginHorizontal: '5%',
    marginVertical: '5%',
    borderRadius: 15,
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  headerText: {
    fontSize: 27,
    fontWeight: '600',
  },
  captionText: {
    fontSize: 17,
  },
  bottomSection: {
    marginHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '7%',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContent: {
    flexDirection: 'row',
  },
  userProfile: {
    width: 43,
    height: 43,
    borderRadius: 43 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userNameCaption: {
    fontSize: 16,
    color: 'grey',
  },
  doctorSection: {
    marginHorizontal: '5%',
    fontSize: 23,
    marginTop: '6%',
    fontWeight: '600',
    marginBottom: '3%',
  },
  doctorProfile: {
    marginHorizontal: '5%',
    borderRadius: 15,
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    flexDirection: 'row',
    // alignItems : 'center'
  },
  doctorProfilePicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doctorName: {
    fontSize: 19,
    marginLeft: 10,
  },
  textAreaWrapper: {
    marginVertical: '10%',
    marginHorizontal: '3%',
  },
  textArea: {
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  reviewSection: {
    marginHorizontal: '5%',
    marginTop: '6%',
    borderRadius: 15,
    paddingHorizontal: '2%',
    // minHeight : '80%'
  },
  topText: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
    marginVertical: '5%',
  },
  buttonSection: {
    marginHorizontal: '8%',
    marginTop: '3%',
  },
});
