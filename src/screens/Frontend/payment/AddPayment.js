import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Button from '../../../common/Button';

export default function AddPayment({navigation}) {
  const {colors} = useSelector(state => state);

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View
        style={[
          styles?.paymentCard,
          {backgroundColor: colors?.gradients?.pink?.second},
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
      <View style={styles?.paymentFields}>
        <TextInput
          placeholder="Account Holder Name"
          style={[styles?.inputField, {backgroundColor: colors?.accent?.white}]}
        />
        <TextInput
          placeholder="Card Number"
          keyboardType="number-pad"
          style={[styles?.inputField, {backgroundColor: colors?.accent?.white}]}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            placeholder="Exp. Date"
            style={[
              styles?.inputField,
              {backgroundColor: colors?.accent?.white, width: '45%'},
            ]}
          />
          <TextInput
            placeholder="CVV code"
            style={[
              styles?.inputField,
              {backgroundColor: colors?.accent?.white, width: '45%'},
            ]}
          />
        </View>
      </View>
      <View style={styles?.buttonSection}>
        <Button
          text="Save Now"
          buttonColor={colors?.gradients?.lightBlue?.second}
          buttonTextColor={colors?.accent?.white}
          handlePress={()=>navigation.navigate('Payment Method')}
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
  paymentFields: {
    marginHorizontal: '5%',
    marginTop: '7%',
  },
  inputField: {
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: '4%',
  },
  buttonSection: {
    marginHorizontal: '5%',
  },
});