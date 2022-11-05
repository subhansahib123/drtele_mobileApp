import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import {Button} from 'react-native-paper';

export default function EducationalDetails({navigation}) {
  const {colors} = useSelector(state => state);

  return (
    <View
      style={[styles.container, {backgroundColor: colors.accent.shadowColor}]}>
      <View
        style={[styles.fieldsWrapper, {backgroundColor: colors.accent.white}]}>
        <View>
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
            style={{
              backgroundColor: colors.accent.shadowColor,
              marginHorizontal: '5%',
              borderRadius: 20,
              paddingHorizontal: '5%',
              marginBottom: '5%',
            }}>
            <TextInput
              placeholder="Full Name"
              placeholderTextColor={colors.accent.grey}
              style={{color: 'black'}}
            />
          </View>
          <View
            style={{
              backgroundColor: colors.accent.shadowColor,
              marginHorizontal: '5%',
              borderRadius: 20,
              paddingHorizontal: '5%',
              marginBottom: '5%',
            }}>
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor={colors.accent.grey}
              style={{color: 'black'}}
            />
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.buttonWrapper,
            {backgroundColor: colors.gradients.lightBlue.second},
          ]}
          onPress={() => navigation.navigate('Add Experience')}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    height: '90%',
    justifyContent: 'space-between',
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
  buttonWrapper: {
    marginHorizontal: '5%',
    marginVertical: '25%',
    paddingVertical: 15,
    borderRadius: 30,
  },

  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
