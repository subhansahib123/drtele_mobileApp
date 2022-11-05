import React from 'react';
import StartUp1 from './StartUp1';
import StartUp2 from './StartUp2';
import StartUp3 from './StartUp3';

// import Swiper from 'react-native-swiper';

import AppIntroSlider from 'react-native-app-intro-slider';

const DATA = [
  {component: StartUp1, id: 0},
  {component: StartUp2, id: 1},
  {component: StartUp3, id: 2},
];

export default function Home({navigation}) {
  return (
    <AppIntroSlider
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return <item.component />;
      }}
      onDone = {()=>{
        navigation.navigate('Personal Details')
      }}
      showSkipButton 
      onSkip={()=>{
        navigation.navigate('App Review')
      }}      
    />
  );
}
