import {useSelector} from 'react-redux';

export default function useSettings() {
  const {colors} = useSelector(state => state);

  return [
    {
      leftElementProps: {
        iconName: 'lock',
        text: 'Change Password',
        routeName : 'Change Password'
      },
      rightElementProps: {
        iconName: 'angle-right',
      },
    },
    {
      
      leftElementProps: {
        iconName: 'bell',
        text: 'My Appointments',
        routeName : 'Change Password'
      },
      rightElementProps: {
        iconName: 'angle-right',
      },
    },
    {
      leftElementProps: {
        iconName: 'address-book',
        text: 'Document Management',
        routeName : 'Page Not Found'
      },
      rightElementProps: {
        iconName: 'angle-right',
      },
    },
    {
      leftElementProps: {
        iconName: 'credit-card',
        text: 'My Wallet',
        routeName : 'Change Password'
      },
      rightElementProps: {
        iconName: 'angle-right',
      },
    },
    {
      leftElementProps: {
        iconName: 'sign-out-alt',
        text: 'Sign Out',
        routeName : 'Change Password'
      },
      rightElementProps: {
        // iconName: 'angle-right',
      },
    },
  ];
}

