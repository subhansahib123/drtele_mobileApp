import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import FeatherIcons from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default function SearchDoctors() {
  const {colors} = useSelector(state => state);

  const DATA = [
    {
      doctorName: 'Dr. Smith Alexa',
      time: `30 min ago`,
      id: 0,
    },
    {
      doctorName: 'Dr. Smith Alexa',
      time: `30 min ago`,
      id: 1,
    },
    {
      doctorName: 'Dr. Smith Alexa',
      time: `30 min ago`,
      id: 2,
    },
    {
      doctorName: 'Dr. Smith Alexa',
      time: `30 min ago`,
      id: 3,
    },
    {
      doctorName: 'Dr. Smith Alexa',
      time: `30 min ago`,
      id: 4,
    },
    {
      doctorName: 'Dr. Smith Alexa',
      time: `30 min ago`,
      id: 5,
    },
  ];

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View
        style={[styles?.searchBox, {backgroundColor: colors?.accent?.white}]}>
        <FeatherIcons name="search" size={20} color={colors?.accent?.dark} />
        <TextInput
          placeholder="Search"
          style={[styles?.textInput, {color: colors?.accent?.dark}]}
          placeholderTextColor={colors?.accent?.grey}
        />
      </View>
      <View style={styles?.searchResults}>
        <Text style={[styles?.recentSearches, {color: colors?.accent?.grey}]}>
          Recent search
        </Text>
      </View>
      <>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View
                style={[
                  styles.boxWrapper1,
                  {backgroundColor: colors.accent.white},
                ]}>
                <View style={styles.leftContent}>
                  <View
                    style={[
                      styles.userProfile,
                      {backgroundColor: colors.accent.shadowColor},
                    ]}></View>
                  <View
                    style={{
                      marginLeft: 10,
                    }}>
                    <Text
                      style={[styles.userName, {color: colors.accent.dark}]}>
                      {item?.doctorName}
                    </Text>
                    <Text style={styles.userNameCaption}>{item?.time}</Text>
                  </View>
                </View>
                <View style={styles.rightContent}>
                  <View
                    style={[
                      styles?.iconCircle,
                      {backgroundColor: colors?.gradients?.pink?.first},
                    ]}>
                    <EntypoIcon
                      name="cross"
                      size={20}
                      color={colors.accent.white}
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    marginHorizontal: '5%',
    marginTop: '5%',
    borderRadius: 30,
    paddingVertical: '1%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    marginLeft: 10,
  },
  searchResults: {
    marginHorizontal: '5%',
    marginTop: '7%',
  },
  recentSearches: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  boxWrapper1: {
    marginHorizontal: '5%',
    marginTop: '3%',
    paddingHorizontal: '5%',
    paddingVertical: '4%',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfile: {
    width: 37,
    height: 37,
    borderRadius: 37 / 2,
  },
  userName: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  userNameCaption: {
    fontSize: 16,
    color: 'grey',
  },
  iconCircle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
