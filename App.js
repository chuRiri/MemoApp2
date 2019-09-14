import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const config = {
  apiKey: 'AIzaSyBe1BF7efCY-p4FWGVSvtA4BqfL7bvOL4k',
  authDomain: 'memoapp-16d57.firebaseapp.com',
  databaseURL: 'https://memoapp-16d57.firebaseio.com',
  projectId: 'memoapp-16d57',
  storageBucket: '',
  messagingSenderId: '282840975178',
  appId: '1:282840975178:web:7499d60f8aa964bce7a3b3',
};
firebase.initializeApp(config);

const App = createStackNavigator({
  Login:      { screen: LoginScreen },
  Home:       { screen: MemoListScreen },
  Signup:     { screen: SignupScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit:   { screen: MemoEditScreen },
}, {
  defaultNavigationOptions: {
    headerTitle: 'Memot',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default createAppContainer(App);
