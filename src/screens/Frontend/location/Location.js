import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

/// Icon
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

export default function Location() {
  const {colors} = useSelector(state => state);

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View
        style={[styles?.boxWrapper, {backgroundColor: colors?.accent?.white}]}>
        <View style={styles?.iconBoxWrapper}>
          <View
            style={[
              styles?.iconBox,
              {backgroundColor: colors?.gradients?.pink?.second},
            ]}>
                <FontAwesomeIcon name='send' color={colors?.accent?.white} size={30}/>
            </View>
        </View>
        <Text style={[styles?.headerText,{color : colors?.accent?.dark}]}>Location</Text>
        <Text style={styles?.captionText}>
          Please turn on your location to tracking your activity
        </Text>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles?.buttonWrapper,
              {backgroundColor: colors?.gradients?.lightBlue?.second},
            ]}>
            <Text style={[styles?.buttonText, {color: colors?.accent?.white}]}>
              Allow Location
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
  boxWrapper: {
    marginHorizontal: '5%',
    borderRadius: 15,
    marginTop: '20%',
    paddingHorizontal: '5%',
  },
  iconBoxWrapper : {
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : '10%',
    marginBottom : '6%'
  },
  iconBox: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    justifyContent : 'center',
    alignItems :'center'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: '500',
  },
  captionText: {
    textAlign: 'center',
    fontSize: 17,
    marginBottom: '10%',
    marginTop: '3%',
  },
  buttonWrapper: {
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: '12%',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600',
  },
});
