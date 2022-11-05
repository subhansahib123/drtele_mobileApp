import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  Backdrop,
  BackdropSubheader,
  AppBar,
  IconButton,
} from '@react-native-material/core';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';

export default function BackDrop() {
  const [revealed, setRevealed] = useState(false);

  const {colors} = useSelector(state => {
    return state;
  });

  return (
    <>
      <View style={styles.iconBox}>
        <FontAwesomeIcon
          name="align-left"
          size={30}
          style={{color: colors.accent.white}}
        />
        <FontAwesomeIcon
          name="bell"
          size={30}
          style={{color: colors.accent.white}}
        />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.headerText}>Good Morning</Text>
        <Text style={styles.headerCaption}>Alexa</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  iconBox: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  textBox: {
    marginHorizontal: 35,
    marginTop: 7,
  },
  headerText: {
    marginTop: 2,
    fontSize: 30,
    color: 'white',
    fontWeight: '600',
  },
  headerCaption: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
