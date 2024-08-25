import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Use this library for icons
import NewsPage from './screens/NewsPage';
import AboutUs from './screens/AboutUs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './screens/HomeScreen';
import ImageNews from './screens/ImageNews';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="HomeScreen">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={'#1E201E'} size={30} />
            ),
            tabBarBadge: 5,
          }}
        />
        <Tab.Screen
          name="NewsPage"
          component={NewsPage}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="newspaper"
                color={'#1E201E'}
                size={30}
              />
            ),
          }}
        />

        <Tab.Screen
          name="ImageNews"
          component={ImageNews}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="view-dashboard"
                color={'#1E201E'}
                size={30}
              />
            ),
          }}
        />

        <Tab.Screen
          name="AboutUs"
          component={AboutUs}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="comment-alert"
                color={'#1E201E'}
                size={30}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


const stylemytabbar=StyleSheet.create({
tabnav :{
  backgroundColor : 'blue'
}
})
export default App;
