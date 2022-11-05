import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default function StartUpPage(props,{navigation}) {


  const {headingText, captionText, buttonText, editHeadingSize} = props;

  const {width} = Dimensions.get('screen');

  return (
    <View style={[styles.container, {width: width}]}>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0.75}}
        // locations={[.25,.5]}
        style={styles.box}
        colors={['#3462FF', '#466FFF']}>
        <Text
          style={[styles.headingText, {fontSize: editHeadingSize ? 33 : 40}]}>
          {headingText}
        </Text>
        <Text style={styles.captionText}>{captionText}</Text>
        <Text>
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-end',
  },
  box: {
    flexBasis: '50%',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    alignItems: 'center',
    opacity: 0.9,
  },
  headingText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: '900',
    marginTop: 45,
    fontSize: 30,
  },
  captionText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 19,
    paddingHorizontal: 50,
    marginTop: 20,
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 40,
    width: 280,
  },
  buttonText: {
    textAlign: 'center',
    paddingVertical: 20,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1.8,
  },
});
