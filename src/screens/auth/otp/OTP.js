import React, {useState, useEffect} from 'react';
import {LogBox} from 'react-native';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

/// Otp
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {getHash, startOtpListener, useOtpVerify} from 'react-native-otp-verify';

export default function OTP({navigation, route}) {
  const [Otp, setOtp] = useState();

  const {confirm, phoneNumber} = route.params;
  const {colors} = useSelector(state => state);

  const {stopListener} = useOtpVerify({numberOfDigits: 6});
  async function confirmCode() {
    try {
      await confirm.confirm(Otp);
      console.log('valid code');
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  useEffect(() => {
    getHash()
      .then(hash => {
        // console.log(hash);
      })
      .catch(console.log);

    startOtpListener(message => {
      // extract the otp using regex e.g. the below regex extracts 4 digit otp from message
      const otp = /(\d{6})/g.exec(message)[1];
      // console.log(otp)
      // console.log(isNaN(otp));
      setOtp(otp);
    });
    return () => stopListener();
  }, []);

  // console.log(otp);

  LogBox.ignoreLogs([
    'Warning:  Non-serializable values were found in the navigation state.',
  ]);

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View style={[styles?.box, {backgroundColor: colors?.accent?.white}]}>
        <Text style={[styles?.headerText, {color: colors?.accent?.dark}]}>
          OTP Verification
        </Text>
        <Text style={[styles?.captionText, {color: colors?.accent?.grey}]}>
          An authentication code has been sent to {phoneNumber}
        </Text>
        <View style={styles?.inputWrapper}>
          <OTPInputView
            style={{width: '80%', height: 70}}
            pinCount={6}
            code={Otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged={val => setOtp(val)}
            keyboardType="number-pad"
            autoFocusOnLoad={true}
            editable
            keyboardAppearance="dark"
            codeInputFieldStyle={[
              styles.underlineStyleBase,
              {color: colors?.accent?.dark,backgroundColor : colors?.accent?.shadowColor},
            ]}
            codeInputHighlightStyle={{
              borderColor: colors?.gradients?.lightBlue?.second,
            }}
            placeholderTextColor={colors?.accent?.dark}
          />
        </View>
        <Text style={[styles?.bottomText, {color: colors?.accent?.dark}]}>
          I didn't receive code.{' '}
          <Text
            style={[
              styles?.resendText,
              {color: colors?.gradients?.lightBlue?.second},
            ]}>
            Resend Code
          </Text>
        </Text>
        <View style={{marginBottom : '10%',marginTop : '5%'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles?.buttonWrapper,
              {backgroundColor: colors?.gradients?.lightBlue?.second},
            ]}
            onPress={() => confirmCode()}>
            <Text style={[styles?.buttonText, {color: colors?.accent?.white}]}>
              Verify Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    marginHorizontal: '4%',
    marginTop: '5%',
    borderRadius: 15,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: '7%',
    marginBottom: '2%',
  },
  captionText: {
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 25,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop : '3%'
  },
  bottomText: {
    textAlign: 'center',
    fontSize: 17,
    marginTop: '5%',
    marginBottom: '3%',
  },
  resendText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    marginHorizontal: '5%',
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    textAlign: 'center',
  },
  underlineStyleBase: {
    width: 40,
    height: 55,
    borderRadius : 10,
    borderWidth: 0,
  },
});
