import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function Button(props) {
  const {text, buttonColor, buttonTextColor,handlePress} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles?.buttonWrapper, {backgroundColor: buttonColor}]}
      onPress={handlePress}
      >
      <Text style={[styles?.buttonText, {color: buttonTextColor}]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
