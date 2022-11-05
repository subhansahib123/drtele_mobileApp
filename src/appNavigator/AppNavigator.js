import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/// Redux
import {colors} from '../common/Colors';
import {useDispatch} from 'react-redux';
import {setColors} from '../store/features/colors/ColorSlice';
import  FontAwesomeIcon  from 'react-native-vector-icons/FontAwesome5';

/// Pages
import Home from '../screens/Frontend/home/Home';
import BottomTabs from './BottomTabs';
import SignUp from '../screens/auth/signup/SignUp';
import Login from './../screens/auth/login/Login';
import PersonalDetails from '../screens/Frontend/profile/PersonalDetails';
import EducationalDetails from '../screens/Frontend/profile/EducationalDetails';
import ExperienceDetails from '../screens/Frontend/profile/ExperienceDetails';
import ForgotPassword from '../screens/auth/forgotPassword/ForgotPassword';
import ChangePassword from '../screens/auth/changePassword/ChangePassword';
import Settings from './../screens/Frontend/settings/Settings';
import NoPage from '../screens/Frontend/404/NoPage';
import AccountCreated from './../screens/auth/AccountCreated';
import AppReview from './../screens/Frontend/appReview/AppReview';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setColors(colors));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
          />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
          />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle:{fontWeight : 'bold'}
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle:{fontWeight : 'bold'}
          }}
        />
        {/* <Stack.Screen name='ProfileCompletion' component={ProfileCompleteion} options={{
          headerTitleAlign : 'center',
        }}/> */}

        <Stack.Screen
          name="Personal Details"
          component={PersonalDetails}
          options={{
            headerTitleAlign: 'center',
          headerTitleStyle:{fontWeight : 'bold'}
          }}
        />
        <Stack.Screen
          name="Add Education"
          component={EducationalDetails}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle:{fontWeight : 'bold'}
          }}
        />
        <Stack.Screen
          name="Add Experience"
          component={ExperienceDetails}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle:{fontWeight : 'bold'}
          }}
        />

        <Stack.Screen
          name="Forget Password"
          component={ForgotPassword}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle:{fontWeight : 'bold'}
          }}
          
          />
        <Stack.Screen
          name="Change Password"
          component={ChangePassword}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle:{fontWeight : 'bold'}
          }}
          />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle:{fontWeight : 'bold'},
            headerLeft : () => <FontAwesomeIcon name='align-justify' size={25} color = {colors.accent.dark}/>
          }}
        />
        <Stack.Screen
          name="Page Not Found"
          component={NoPage}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle:{fontWeight : 'bold'},
          }}
          />
        <Stack.Screen
        name='Account Created'
          component={AccountCreated}
          options={{
            headerShown : false,
            headerTitleStyle:{fontWeight : 'bold'},
          }}
          />
        <Stack.Screen
        name='App Review'
          component={AppReview}
          options={{
            headerTitleAlign : 'center',
            headerTitleStyle:{fontWeight : 'bold'},
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
