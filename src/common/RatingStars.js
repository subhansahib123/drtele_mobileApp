import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Rating} from 'react-native-ratings';
import { useSelector } from 'react-redux';

export default function RatingStars(props) {

  const {size} = props

  const {colors} = useSelector(state => state)

  return (
    <>
      <Rating
        // showRating
        onFinishRating={this.ratingCompleted}
        type='custom'
        jumpValue={1}
        fractions={2}
        imageSize={size}
        startingValue={4.5}
        // tintColor =  {colors?.accent?.shadowColor}
        // ratingBackgroundColor = {colors?.accent?.shadowColor}
      />
    </>
  );
}

const styles = StyleSheet.create({});
