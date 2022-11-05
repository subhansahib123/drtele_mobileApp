import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StartUpPage from '../../../common/StartUpPage'

export default function StartUp1() {
  return (
    <>
    <StartUpPage 
    headingText = 'Welcome to Dr 24Tele'
    captionText = {`Reference site about Lorem Ipsum, giving information origins as well as a random`}
      buttonText = 'Get Started'
      editHeadingSize = {true}
    />
    </>
  )
}

