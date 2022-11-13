import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default function FirstRoute() {
  const {colors} = useSelector(state => state);

  const academicDetails = [
    {
      headerText: 'PHD/SFC/DFC',
      instituteDetails: 'New York University of Medicine',
      tokenDetail: 'NY, DC 1207',
      iconCircleColor: colors?.gradients?.pink?.first,
      iconName : 'user-md'
    },
    {
        headerText: 'MBBS/PHD/SFC',
        instituteDetails: 'New York University of Medicine',
      tokenDetail: 'NY, DC 1207',
      iconCircleColor: colors?.gradients?.lightBlue?.second,
      iconName : 'medkit'
    },
    {
      headerText: 'Fellowship in ENT',
      instituteDetails: 'Envato University',
      tokenDetail: 'NY, DC 1207',
      iconCircleColor: colors?.gradients?.purple?.first,
      iconName : 'stethoscope'
    },
  ];

  return (
    <View style={[styles?.container, {backgroundColor: colors?.accent?.white}]}>
      <View style={styles?.boxWrapper}>
        <Text style={{color: colors?.accent?.dark, fontSize: 15}}>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage
        </Text>
        <View style={styles?.academicDetails}>
          {academicDetails.map((data, index) => {
            return (
              <View key={index} style={styles.leftContent}>
                <View
                  style={[
                    styles.userProfile,
                    {backgroundColor: data.iconCircleColor},
                  ]}>
                    <FontAwesomeIcon name={data.iconName} size={20} color ={colors?.accent?.white}/>
                  </View>
                <View
                  style={{
                    marginLeft: 15,
                  }}>
                  <Text style={[styles.userName, {color: colors.accent.dark}]}>
                    {data.headerText}
                  </Text>
                  <Text style={styles.userNameCaption}>
                    {data.instituteDetails}
                  </Text>

                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text>{data.tokenDetail}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  boxWrapper: {
    marginHorizontal: '4%',
    marginTop: '3%',
  },
  academicDetails: {
    marginTop: '4%',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '4%',
  },
  userProfile: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  userNameCaption: {
    fontSize: 14,
    color: 'grey',
  },
});
