import {FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontisoIcon from 'react-native-vector-icons/Fontisto';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

import {Dimensions} from 'react-native';
import Button from '../../../common/Button';

export default function Category({navigation}) {
  const {colors} = useSelector(state => state);

  const {width, height} = Dimensions.get('screen');

  const ITEM_LENGTH1 = width * 0.4; // Item is a square. Therefore, its height and width are of the same length.
  const ITEM_LENGTH2 = width * 0.4; // Item is a square. Therefore, its height and width are of the same length.
  const HEIGHT2 = height * 0.24;

  const categoriesData = [
    {
      iconName: 'home-plus',
      bgColor: colors?.gradients?.yellow?.second,
      text: 'Pharmacist',
      id: 0,
    },
    {
      iconName: 'cards-heart',
      bgColor: colors?.gradients?.lightGreen?.second,
      text: 'Heart',
      id: 1,
    },
    {
      iconName: 'home-plus',
      bgColor: colors?.gradients?.pink?.second,
      text: 'Dental',
      id: 2,
    },
  ];
  const hospitalData = [
    {
      hospitalName: 'XYZ Health Care',
      speciality: 'Hospital',
      id: 0,
    },
    {
      hospitalName: 'ABC Care ',
      speciality: 'Specialist',
      id: 1,
    },
    {
      hospitalName: 'John Care',
      speciality: 'Eye Specialist',
      id: 2,
    },
  ];

  return (
    <View style={styles?.container}>
      <View style={styles?.topSection}>
        <FlatList
          data={categoriesData}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View
                style={[
                  styles?.boxWrapper,
                  {backgroundColor: colors?.accent?.white, width: ITEM_LENGTH1},
                ]}>
                <View
                  style={[styles?.iconCircle, {backgroundColor: item.bgColor}]}>
                  <MaterialCommunityIcon
                    name={item.iconName}
                    size={40}
                    color={colors?.accent?.white}
                  />
                </View>
                <Text
                  style={[styles?.captionText, {color: colors?.accent?.dark}]}>
                  {item.text}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <View style={styles?.popularHospital}>
        <Text style={[styles?.hospitalText, {color: colors?.accent?.dark}]}>
          Popular Hospital
        </Text>
        <Text style={{color: colors?.accent?.grey, fontSize: 17}}>See all</Text>
      </View>
      <View style={styles?.hospitalSection}>
        <FlatList
          data={hospitalData}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <Pressable onPress={()=>navigation.navigate('Hospital Details')}
                style={[
                  styles?.hospitalProfileBox,
                  {
                    backgroundColor: colors?.accent?.white,
                    width: ITEM_LENGTH2,
                    height: HEIGHT2,
                  },
                ]}>
                <View style={styles?.boxTopSection}>
                  <FontisoIcon
                    name="heart-alt"
                    size={10}
                    color={colors?.accent?.dark}
                  />
                  <Text>
                    4.9
                    <FontisoIcon
                      name="star"
                      color={colors?.gradients?.yellow?.second}
                    />
                  </Text>
                </View>
                <View
                  style={[
                    styles?.hospitalProfileCircle,
                    {backgroundColor: colors?.accent?.shadowColor},
                  ]}>
                  <Text>75 X 75</Text>
                </View>
                <View style={styles?.hospitalDetails}>
                  <Text
                    style={[
                      styles?.hospitalName,
                      {color: colors?.accent?.dark},
                    ]}>
                    {item.hospitalName}
                  </Text>
                  <Text
                    style={[
                      styles?.speciality,
                      {color: colors?.gradients?.lightBlue?.second},
                    ]}>
                    {item.speciality}
                  </Text>
                </View>
                <View style={styles?.buttonSection}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      styles?.buttonWrapper,
                      {backgroundColor: colors?.accent?.shadowColor},
                    ]}>
                    <Text
                      style={[
                        styles?.buttonText,
                        {color: colors?.gradients?.lightGreen?.second},
                      ]}>
                      Book Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
      <View style={styles?.popularHospital}>
        <Text style={[styles?.hospitalText, {color: colors?.accent?.dark}]}>
          Feature Doctors
        </Text>
        <Text style={{color: colors?.accent?.grey, fontSize: 17}}>See all</Text>
      </View>
      <Pressable onPress={()=>navigation.navigate('Doctor Details')}
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
                  Dr. Alexa Smith
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
        <View style={styles?.actionButtons}>
          {/* <Button text='Video Appointment' buttonColor = {colors?.gradients?.skyBlue?.second} buttonTextColor = {colors?.accent?.white}/>
            <Button text='Book Now' buttonColor = {colors?.accent?.shadowColor} buttonTextColor = {colors?.gradients?.lightBlue?.second}/>
        */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles?.actionButtonWrapper,
              {backgroundColor: colors?.gradients?.skyBlue?.second},
            ]}>
            <Text
              style={[
                styles?.actionButtonText,
                {color: colors?.accent?.white},
              ]}>
              Video Appointment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles?.actionButtonWrapper,
              {backgroundColor: colors?.accent?.shadowColor},
            ]}>
            <Text
              style={[
                styles?.actionButtonText,
                {color: colors?.gradients?.lightBlue?.second},
              ]}>
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    marginTop: '7%',
  },
  boxWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginLeft: 15,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%',
  },
  captionText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: '15%',
  },
  popularHospital: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  hospitalText: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  hospitalSection: {
    marginTop: '5%',
  },
  hospitalProfileBox: {
    borderRadius: 10,
    // marginRight : 5,
    marginLeft: 15,
  },
  boxTopSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '5%',
    marginTop: '3%',
  },
  hospitalProfileCircle: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5%',
  },
  hospitalDetails: {},
  hospitalName: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  speciality: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
  },
  buttonSection: {
    marginVertical: '5%',
    marginHorizontal: '5%',
  },
  buttonWrapper: {
    paddingVertical: 6,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
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
    fontSize: 25,
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
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom : '7%'
  },
  actionButtonWrapper: {
    paddingVertical: 10,
    borderRadius: 20,
    flexBasis: '45%',
  },
  actionButtonText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
  },
});
