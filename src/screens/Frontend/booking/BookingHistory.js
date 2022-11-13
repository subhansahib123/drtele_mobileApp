import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import RatingStars from '../../../common/RatingStars';

export default function BookingHistory({navigation}) {
  const {colors} = useSelector(state => state);

  const {width, height} = Dimensions.get('screen');
  const ITEM_LENGTH = width * 0.3;
  // const ITEM_HEIGHT = height * .4
  const DATA = [
    {text: 'Active', id: 0},
    {text: 'Completed', id: 1},
    {text: 'Cancelled', id: 2},
    {text: 'Archived', id: 3},
  ];
  const historyData = [
    {
      text: 'Eye Specialist',
      time: '20 April, 2021 , 12:30 PM',
      status: 'active',
      doctorName: 'Dr. Jhon Smith',
      circleColor: colors?.gradients?.pink?.first,
      id: 0,
    },
    {
      text: 'Dental Specialist',
      time: '20 April, 2021 , 12:30 PM',
      status: 'active',
      doctorName: 'Dr. Jhon Smith',
      circleColor: colors?.gradients?.lightBlue?.second,
      id: 1,
    },
    {
      text: 'ENT Specialist',
      time: '20 April, 2021 , 12:30 PM',
      status: 'active',
      doctorName: 'Dr. Jhon Smith',
      circleColor: colors?.gradients?.skyBlue?.first,
      id: 2,
    },
  ];

  return (
    <View style={styles?.container}>
      <View style={styles?.categoriesSection}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View
                style={[
                  styles?.pill,
                  {
                    backgroundColor: colors?.accent?.white,
                    width: ITEM_LENGTH,
                    height: 40,
                  },
                ]}>
                <Text style={[styles?.pillText, {color: colors?.accent?.dark}]}>
                  {item.text}
                </Text>
              </View>
            );
          }}
        />
      </View>

      <View>
        <FlatList
          data={historyData}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View
                style={[
                  styles?.historySection,
                  {backgroundColor: colors?.accent?.white},
                ]}>
                <View
                  style={[
                    styles?.insideBoxWrapper,
                    {backgroundColor: colors?.accent?.shadowColor},
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
                            {backgroundColor: item?.circleColor},
                          ]}>
                          <Text style={{fontSize : 17,marginBottom : -8}}>11</Text>
                          <Text style={{fontSize : 17}}>May</Text>
                        </View>
                        <View
                          style={{
                            marginLeft: 10,
                          }}>
                          <Text
                            style={[
                              styles.userName,
                              {color: colors.accent.dark},
                            ]}>
                            {item?.text}
                          </Text>
                          <Text style={styles.userNameCaption}>
                            {item?.time}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.rightContent}>
                        <View
                          style={[
                            styles?.statusPill,
                            {backgroundColor: colors?.accent?.lightGrey},
                          ]}>
                          <Text
                            style={{
                              color: colors?.gradients?.lightGreen?.first,
                            }}>
                            {item.status}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
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
                      <Text
                        style={[styles.userName, {color: colors.accent.dark}]}>
                        Dr Rafay
                      </Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <RatingStars size={15} />
                        <Text
                          style={{color: colors?.accent?.dark, marginLeft: 5}}>
                          4.9
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.rightContent}>
                    <View
                      style={[
                        styles?.userProfile,
                        {
                          backgroundColor: colors?.accent?.shadowColor,
                          marginRight: 8,
                        },
                      ]}>
                      <FontAwesomeIcon
                        name="phone-alt"
                        size={20}
                        color={colors?.gradients?.purple?.second}
                        onPress={()=>navigation.navigate('Call Page')}
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
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoriesSection: {
    marginTop: '5%',
    marginBottom: '5%',
  },
  pill: {
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  pillText: {},
  historySection: {
    marginHorizontal: '5%',
    borderRadius: 15,
    marginBottom : '5%'
  },
  insideBoxWrapper: {
    marginHorizontal: '4%',
    marginVertical: '5%',
    borderRadius: 15,
    paddingHorizontal: '5%',
  },
  boxUpperSection: {
    marginVertical: '8%',
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
    fontSize: 19,
    fontWeight: 'bold',
  },
  userNameCaption: {
    fontSize: 14,
    color: 'grey',
  },
  statusPill: {
    marginTop: -23,
    marginLeft: -20,
    borderRadius: 30,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    marginHorizontal: '3%',
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
    fontSize: 14,
    color: 'grey',
  },
});
