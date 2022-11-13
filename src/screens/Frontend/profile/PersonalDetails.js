import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import {Button, Checkbox} from 'react-native-paper';
import { Link } from '@react-navigation/native';

export default function PersonalDetails({navigation}) {
  const [checked, setChecked] = useState(false);
  const {colors} = useSelector(state => state);

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.accent.shadowColor}]}>
      <View
        style={[styles.fieldsWrapper, {backgroundColor: colors.accent.white}]}>
        <View
          style={[
            styles.iconCircle,
            {backgroundColor: colors.accent.shadowColor},
          ]}>
          <View style={styles.icon}>
            <FontAwesomeIcon
              name="camera"
              color={colors.accent.grey}
              size={30}
              // onPress={ () =>alert('hello') }
            />
          </View>
        </View>
        <View
          style={[
            styles.inputFieldWrapper,
            {
              backgroundColor: colors.accent.shadowColor,
            },
          ]}>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor={colors.accent.grey}
            style={{color: 'black'}}
          />
        </View>
        <View
          style={[
            styles.inputFieldWrapper,
            {
              backgroundColor: colors.accent.shadowColor,
            },
          ]}>
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor={colors.accent.grey}
            style={{color: 'black'}}
            keyboardType='number-pad'
          />
        </View>
        <View
          style={[
            styles.inputFieldWrapper,
            {
              backgroundColor: colors.accent.shadowColor,
            },
          ]}>
          <TextInput
            placeholder="D.O.B"
            placeholderTextColor={colors.accent.grey}
            style={{color: 'black'}}
          />
        </View>
        <View
          style={[
            styles.inputFieldWrapper,
            {
              backgroundColor: colors.accent.shadowColor,
            },
          ]}>
          <TextInput
            placeholder="Gender"
            placeholderTextColor={colors.accent.grey}
            style={{color: 'black'}}
          />
        </View>
        <View
          style={[
            styles.inputFieldWrapper,
            {
              backgroundColor: colors.accent.shadowColor,
            },
          ]}>
          <TextInput
            placeholder="Confirm Your address"
            placeholderTextColor={colors.accent.grey}
            style={{color: 'black'}}
          />
        </View>
        <View
          style={{
            marginHorizontal: '5%',
            flexDirection: 'row',
            maxWidth: '80%',
            marginTop: '15%',
          }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color={colors.gradients.lightBlue.first}
          />
          <Text
            style={{
              color: 'black',
              fontWeight: '600',
              fontSize: 14,
            }}>
            By creating an account you agree to our Terms of Service and Privacy
            Policy
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.buttonWrapper,
            {backgroundColor: colors.gradients.lightBlue.second},
          ]}
          onPress={() => navigation.navigate('Add Education')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: '8%',
              fontSize: 17,
              color : colors.accent.dark
            }}>
            Already have an account?{' '}
            <Link to={{screen: 'Login'}}
              style={{
                color: colors.gradients.lightBlue.first,
                fontSize: 19,
                fontWeight: '600',
              }}>
              Sign in!
            </Link>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  fieldsWrapper: {
    marginHorizontal: '5%',
    marginTop: '5%',
    borderRadius: 15,
    elevation: 4,
  },
  iconCircle: {
    width: 110,
    height: 110,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 110 / 2,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 110,
  },
  inputFieldWrapper: {
    marginHorizontal: '5%',
    borderRadius: 30,
    paddingHorizontal: '5%',
    marginBottom: '5%',
  },
  buttonWrapper: {
    marginHorizontal: '5%',
    marginTop: '8%',
    paddingVertical: 15,
    borderRadius: 30,
  },

  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight : 'bold',
    fontSize : 15
  },
});
