import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthPage from '../../../common/AuthPage'

export default function Login() {
  return (
    <>
    <AuthPage 
    titleText = 'Login with your'
    subtitleText = 'phone number'
    buttonText = 'Sign In'
    bottomText = "Don't have an account? Sign Up"
    />
    </>
  )
}

const styles = StyleSheet.create({})