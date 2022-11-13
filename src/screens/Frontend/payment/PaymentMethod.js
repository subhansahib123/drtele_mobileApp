import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

/// Icon
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

import {RadioButton} from 'react-native-paper';
import Button from '../../../common/Button';

export default function PaymentMethod({navigation}) {
  const [checked, setChecked] = useState('');
  const {colors} = useSelector(state => state);

  const DATA = [
    {
      id: '0',
      currentBalance: '$5,642',
      bgColor: colors?.gradients?.lightBlue?.second,
    },
    {
      id: '1',
      currentBalance: '$9,662',
      bgColor: colors?.gradients?.skyBlue?.second,
    },
  ];

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View
        style={[
          styles?.paymentCard,
          {backgroundColor: colors?.gradients?.lightBlue?.second},
        ]}>
        <View style={styles?.upperlineWrapper}>
          <View style={styles?.balanceWrapper}>
            <Text style={{color: colors?.accent?.lightGrey}}>
              Current Balance
            </Text>
            <Text style={[styles?.balance, {color: colors?.accent?.white}]}>
              $5,642
            </Text>
          </View>

          <Text
            style={[styles?.upperRightText, {color: colors?.accent?.white}]}>
            VISA
          </Text>
        </View>
        <View style={styles?.lowerLineWrapper}>
          <Text style={{color: colors?.accent?.white, fontSize: 15}}>
            0000 1234 5678 XXXX
          </Text>
          <Text style={{color: colors?.accent?.white, fontSize: 15}}>
            10/21
          </Text>
        </View>
      </View>
      {/* <ScrollView></ScrollView>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        // windowSize={21}
        renderItem={({item}) => {
          return (
          
          );
        }}
      /> */}
      <View
        style={[styles.boxWrapper, {backgroundColor: colors?.accent?.white}]}>
        <Text style={[styles?.leftText, {color: colors?.accent?.dark}]}>
          Visa **********250
        </Text>
        <Text
          style={{
            color: colors?.gradients?.pink?.second,
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Change
        </Text>
      </View>
      <View
        style={[
          styles?.boxWrapper,
          {backgroundColor: colors?.accent?.white, alignItems: 'center'},
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: -6,
          }}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color={colors?.gradients?.lightBlue?.second}
          />
          <Text style={[styles?.leftText, {color: colors?.accent?.dark}]}>
            Credit / Debit / ATM Card
          </Text>
        </View>
        <FontAwesomeIcon
          name="angle-right"
          size={20}
          color={colors?.accent?.dark}
        />
      </View>
      <View
        style={[
          styles?.boxWrapper,
          {backgroundColor: colors?.accent?.white, alignItems: 'center'},
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: -6,
          }}>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
            color={colors?.gradients?.lightBlue?.second}
          />
          <Text style={[styles?.leftText, {color: colors?.accent?.dark}]}>
            Cash on Payment
          </Text>
        </View>
      </View>
      <View
        style={[
          styles?.boxWrapper,
          {backgroundColor: colors?.accent?.white, alignItems: 'center'},
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: -8,
          }}>
          <View
            style={[
              styles?.iconBox,
              {backgroundColor: colors?.gradients?.lightBlue?.second},
            ]}>
            <FontAwesomeIcon
              name="wallet"
              size={20}
              color={colors?.accent?.white}
            />
          </View>
          <Text
            style={[
              styles?.leftText,
              {color: colors?.accent?.dark, marginLeft: 10},
            ]}>
            Add a new card
          </Text>
        </View>
        <FontAwesomeIcon
          name="angle-right"
          size={20}
          color={colors?.accent?.dark}
        />
      </View>
      <View style={styles?.buttonSection}>
        <Button
          text="Process to Checkout"
          buttonColor={colors?.gradients?.lightBlue?.second}
          buttonTextColor={colors?.accent?.white}
          handlePress={()=>navigation.navigate('Booking Review')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paymentCard: {
    marginHorizontal: '5%',
    marginTop: '6%',
    borderRadius: 15,
  },
  upperlineWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
  },
  balanceWrapper: {
    flexDirection: 'column',
    marginTop: '10%',
    marginBottom: '20%',
  },
  balance: {
    fontSize: 30,
    fontWeight: '500',
  },
  upperRightText: {
    marginTop: '4%',
    fontSize: 22,
    fontWeight: 'bold',
  },
  lowerLineWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
    marginBottom: '7%',
  },
  boxWrapper: {
    marginTop: '4%',
    marginHorizontal: '5%',
    borderRadius: 30,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  leftText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSection: {
    marginHorizontal: '5%',
    marginTop: '4%',
  },
});
