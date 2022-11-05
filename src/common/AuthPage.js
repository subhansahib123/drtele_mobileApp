import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {useSelector} from 'react-redux';

export default function AuthPage(props,{navigation}) {
  const {titleText, subtitleText, buttonText, bottomText} = props;

  const {colors} = useSelector(state => state);

  return (
    <View
      style={[styles.container, {backgroundColor: colors.accent.shadowColor}]}>
      <View style={styles.cardWrapper}>
        <View style={{ paddingTop: '10%'}}>
          <Text style={styles.titleStyle}>{titleText}</Text>
          <Text style={styles.subtitleStyle}>{subtitleText}</Text>
        </View>

        <View style={styles.buttonsWrapper}>
          <View
            style={{
              marginRight: 5,
            }}>
            <TouchableOpacity activeOpacity={0.8}>
              <Button
                mode="outlined"
                textColor={colors.gradients.lightBlue.first}
                onPress={() => {
                  alert('Working');
                }}>
                Patient
              </Button>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity activeOpacity={0.8}>
              <Button
                mode="outlined"
                textColor={colors.gradients.lightBlue.first}>
                Doctor
              </Button>
            </TouchableOpacity>
          </View>
        </View>

        {/* <Card.Content style={styles.inputWrapper}> */}
          <View style={styles.inputWrapper}>
            <View
              style={[
                styles.inputBox,
                {
                  backgroundColor: colors.accent.shadowColor,
                },
              ]}>
              <TextInput
                placeholder="Enter Your Phone Number"
                keyboardType="numeric"
                style={styles.input}
                placeholderTextColor="grey"
                // onChangeText={}
              />
            </View>

            <View
              style={{
                marginVertical : '10%',
              }}>
              <TouchableOpacity activeOpacity={0.8} >
                <Button
                  mode="contained"
                  
                  buttonColor={colors.gradients.lightBlue.second}
                  textColor={colors.accent.white}
                  contentStyle={{
                    height: 45,
                  }}>
                  {buttonText}
                </Button>
              </TouchableOpacity>
            </View>
          </View>
        {/* </Card.Content> */}
      </View>

      <Text style={[styles.bottomText,{color : colors?.accent?.dark}]}>{bottomText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
    marginVertical: '4%',
  },
  cardWrapper : {
    elevation: 4,
    borderRadius: 15,
    backgroundColor : 'white'
  },
  titleStyle: {
    color: 'black',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitleStyle: {
    color: 'grey',
    fontSize: 17,
    textAlign: 'center',
  },
  buttonsWrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '7%',
  },
  inputWrapper: {
    paddingTop: '15%',
    paddingHorizontal : '5%'
  },
  inputBox: {
    borderRadius: 25,
  },
  input: {
    padding: 12,
    color: 'black',
  },
  bottomText: {
    // color: 'black',
    textAlign: 'center',
    paddingTop: '7%',
    fontSize: 16,
  },
});
