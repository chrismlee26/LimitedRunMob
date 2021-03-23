import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/login';
import Home from '../screens/home';
import Tech from '../screens/tech';
// import Timeline from './app/screens/timeline'

const screens = {
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  },
  Tech: {
    screen: Tech
  },
  // Timeline: {
  //   screen: Timeline
  // }

}

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);
