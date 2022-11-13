import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Button from '../../../common/Button';

export default function BookingSuccess({navigation}) {
  const {colors} = useSelector(state => state);

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View
        style={[styles?.boxWrapper, {backgroundColor: colors?.accent?.white}]}>
        <Text style={[styles?.headerText, {color: colors?.accent?.dark}]}>
          Booking Success
        </Text>
        <Text
          style={[
            styles?.captionText,
            {color: colors?.gradients?.lightBlue?.second},
          ]}>
          Booking ID # 125050
        </Text>
        <Text style={[styles?.bottomText, {color: colors?.accent?.grey}]}>
          Thank you for choosing our service {`\n`} and trusted lawyer to help
          you {`\n`} with your problems
        </Text>
      </View>
      <View style={styles?.buttonSection}>
        <View style={{marginTop: '8%', marginBottom: '4%'}}>
          <Button
            text="Review Booking"
            buttonColor={colors?.accent?.lightGrey}
            buttonTextColor={colors?.gradients?.lightBlue?.second}
          />
        </View>
        <View>
          <Button
            text="Back To Home"
            buttonColor={colors?.gradients?.skyBlue?.second}
            buttonTextColor={colors?.accent?.white}
            handlePress={()=>navigation.navigate('BottomTabs')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  boxWrapper: {
    marginHorizontal: '5%',
    borderRadius: 15,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: '7%',
    marginBottom: '1%',
  },
  captionText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '2%',
  },
  bottomText: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: '7%',
  },
  buttonSection: {
    marginHorizontal: '5%',
  },
  // buttonWrapper : {
  //   paddingVertical: 17,
  //   borderRadius: 30,
  // },
  // buttonText : {
  //   textAlign : 'center',
  //   fontSize : 17,
  //   fontWeight : 'bold'
  // }
});
