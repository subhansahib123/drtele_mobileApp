import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import BackDrop from '../../../common/BackDrop'
import InfoBox from './InfoBox'

export default function Fitness() {

  const {colors} = useSelector((state)=>{
    return state
})

  return (
    <View style={styles.container}>
    <View style={[styles.Box1,{backgroundColor : colors.primary.dark}]}>
      <BackDrop />
    </View>
    <View style={styles.Box2}>
      <InfoBox />
    </View>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
    },
    Box1: {
      flexBasis: '23%',
      zIndex: -1,
    },
    Box2: {
      flexBasis: '82%',
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      position: 'relative',
      top: -12,
      padding : 20
    },
})