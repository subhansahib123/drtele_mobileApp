import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function CallPage({navigation}) {
  const {colors} = useSelector(state => state);

  return (
    <View style={styles?.container}>
      <View style={styles?.callerProfile}>
        <View
          style={[
            styles?.profileCircle,
            {
              backgroundColor: colors?.accent?.lightGrey,
              borderColor: colors?.gradients?.lightBlue?.second,
            },
          ]}>
          <Text style={{color: colors?.accent?.dark}}>119 X 119</Text>
        </View>
      </View>
      <View style={styles?.callerDetails}>
        <Text style={[styles?.userName, {color: colors?.accent?.dark}]}>
          Jhon Smith
        </Text>
        <Text
          style={[
            styles?.timer,
            {color: colors?.gradients?.lightBlue?.second},
          ]}>
          25:14
        </Text>
        <View style={styles?.iconWrapper}>
          <View
            style={[
              styles?.iconCircle,
              {backgroundColor: colors?.gradients?.lightGreen?.first},
            ]}>
            <MaterialIcons
              name="call"
              size={30}
              color={colors?.accent?.white}
              onPress={()=>navigation.navigate('Review')}
            />
          </View>
          <View
            style={[
              styles?.iconCircle,
              {backgroundColor: colors?.gradients?.pink?.first},
            ]}>
            <MaterialIcons
              name="call-end"
              size={30}
              color={colors?.accent?.white}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  callerProfile: {
    flexBasis: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCircle: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    borderWidth: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  callerDetails: {
    flexBasis: '40%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  userName: {
    fontSize: 31,
    fontWeight: 'bold',
  },
  timer: {
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: '1%',
  },
  iconWrapper : {
    flexDirection : 'row',
    marginTop : '5%'
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal : '15%'
  },
});
