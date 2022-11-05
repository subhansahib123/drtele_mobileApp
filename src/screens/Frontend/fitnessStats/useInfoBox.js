import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';

export default function useInfoBox() {

    const {colors} = useSelector(state => state);

  return [
    {
        iconName: 'address-card',
        iconColor: colors.gradients.lightBlue.second,
        key: 1,
        bgColor: colors.accent.shadowColor,
        captionText : 'Doctor Booking',
      },
      {
        iconName: 'clipboard-list',
        iconColor: colors.gradients.purple.second,
        key: 2,
        bgColor: colors.accent.shadowColor,
        captionText : 'Fitness Plan'
      },
      {
        iconName: 'university',
        iconColor: colors.gradients.yellow.second,
        key: 3,
        bgColor: colors.accent.shadowColor,
        captionText : 'Training Stats'
      },
      {
        iconName: 'hamburger',
        iconColor: colors.gradients.pink.second,
        key: 4,
        bgColor: colors.accent.shadowColor,
        captionText : 'Meal Plan'
      },
      {
        iconName: 'running',
        iconColor: colors.gradients.lightBlue.second,
        key: 5,
        bgColor: colors.accent.shadowColor,
        captionText : 'Running'
      },
      {
        iconName: 'skiing',
        iconColor: colors.gradients.purple.second,
        key: 6,
        bgColor: colors.accent.shadowColor,
        captionText : 'Exercises'
      },
  ]
}

