import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import useSettings from './useSettings';

export default function Settings({navigation}) {
  const {colors} = useSelector(state => state);

    const data = useSettings(); 


  return (
    <View
      style={[styles.container,{backgroundColor : colors.accent.shadowColor}]}>
      <View
        style={[styles.boxWrapper1, {backgroundColor: colors.accent.white}]}>
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
            <Text style={[styles.userName, {color: colors.accent.dark}]}>
              Dr John Smith
            </Text>
            <Text style={styles.userNameCaption}>Xyx health Care</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <FontAwesomeIcon
            name="angle-right"
            size={25}
            color={colors.accent.grey}
          />
        </View>
      </View>
      <View style={[styles.boxWrapper2,{backgroundColor : colors.accent.white}]}>
        <View
          style={[
            styles.TopSection,
            {backgroundColor: colors.gradients.lightBlue.second},
          ]}>
          <Text style={[styles.header, {color: colors.accent.white}]}>
            Accounts
          </Text>
        </View>
        {data.map((option,index)=>{
          return <Pressable onPress={()=>navigation.navigate(option?.leftElementProps?.routeName) } key={index} style={styles.optionSection}>
          <View style={{flexDirection : 'row',alignItems : 'center'}}>
            <FontAwesomeIcon name={option.leftElementProps?.iconName} size={17} color = {colors.accent.dark} />
            <Text style={[styles.optionText,{color : colors.accent.dark}]}>
              {option.leftElementProps.text}
            </Text>
          </View>
          <View>
            <FontAwesomeIcon name={option.rightElementProps?.iconName} color= {colors.accent.dark} size={20}/>
          </View>
        </Pressable>
        })}
        

        <View style={[styles.moreOptions,{backgroundColor : colors.accent.lightGrey}]}>
          <Text style={[styles.moreOPtionsText,{color : colors.gradients.lightBlue.second,}]}>
            More Options
          </Text>
        </View>
        <View style={styles.optionSection}>
        <View style={{flexDirection : 'row', alignItems : 'center'}}>
          <FontAwesomeIcon name='newspaper' size={17} color ={colors.accent.dark}/>
          <Text style={[styles.optionText,{color : colors.accent.dark}]}>
            Newsletter
          </Text>
        </View>
        <View>
          <FontAwesomeIcon name='angle-right' size={20} color={colors.accent.dark}/>
        </View>
        </View>
        <View style={styles.optionSection}>
        <View style={{flexDirection : 'row', alignItems : 'center'}}>
          <FontAwesomeIcon name='envelope' size={17} color ={colors.accent.dark}/>
          <Text style={[styles.optionText,{color : colors.accent.dark}]}>
            Text Message
          </Text>
        </View>
        <View>
          <FontAwesomeIcon name='angle-right' size={20} color={colors.accent.dark}/>
        </View>
        </View>
        <View style={styles.optionSection}>
        <View style={{flexDirection : 'row', alignItems : 'center'}}>
          <FontAwesomeIcon name='phone-alt' size={17} color ={colors.accent.dark}/>
          <Text style={[styles.optionText,{color : colors.accent.dark}]}>
            Phone Call
          </Text>
        </View>
        <View>
          <FontAwesomeIcon name='angle-right' size={20} color={colors.accent.dark}/>
        </View>
        </View>
        <View style={styles.optionSection}>
        <View style={{flexDirection : 'row', alignItems : 'center'}}>
          <FontAwesomeIcon name='yen-sign' size={17} color ={colors.accent.dark}/>
          <Text style={[styles.optionText,{color : colors.accent.dark}]}>
            Currency
          </Text>
        </View>
        <View>
          <FontAwesomeIcon name='angle-right' size={20} color={colors.accent.dark}/>
        </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxWrapper1: {
    marginHorizontal: '5%',
    marginTop: '5%',
    paddingHorizontal: '5%',
    paddingVertical: '6%',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContent: {},
  userProfile: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  userName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  userNameCaption: {
    fontSize: 16,
    color: 'grey',
  },
  boxWrapper2: {
    borderRadius: 15,
    marginHorizontal: '5%',
    marginTop: '5%',
    // elevation : 1
  },
  TopSection: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  optionSection : {
    marginHorizontal : '5%',
    marginVertical : '4%',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  header: {
    marginHorizontal: '6%',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: '3%',
  },
  optionText : {
    marginLeft : '8%',
    fontSize : 18,
    fontWeight : 'bold'
  },
  moreOptions : {
    paddingVertical : '4%'
  },
  moreOPtionsText : {
    marginHorizontal : '5%',
    fontSize : 22,
    // fontFamily : 'Roboto-Bold',
    fontWeight : 'bold'
  },
});
