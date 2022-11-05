import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import useInfoBox from './useInfoBox';

export default function InfoBox() {

  const DATA = useInfoBox()

  return (
    <>
      <FlatList
        data={DATA}
        numColumns={2}
        listKey={2}
        keyExtractor={item => item.key}
        renderItem={({item}) => {
          return (
            <View>
              <View style={[styles.infoBox, {backgroundColor: item.bgColor}]}>
                <FontAwesomeIcon
                  name={item.iconName}
                  color={item.iconColor}
                  size={70}

                />
                <Text style={[styles.iconText, {color: item.iconColor}]}>
                  {item.captionText}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  infoBox: {
    width: 155,
    height: 165,
    marginTop: 5,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  iconText: {
    fontSize : 18,
    marginTop : 5,
    fontWeight : '600'
  },
});
