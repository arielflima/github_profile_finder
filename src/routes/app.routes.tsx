import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../pages/Home';
import ProfileFinder from '../pages/ProfileFinder';
import LoadingPage from '../components/LoadingPage';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator initialRouteName="Home">
      <App.Screen
        options={{
          cardStyle: { backgroundColor: '#686d76' },
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <App.Screen
        options={{
          cardStyle: { backgroundColor: '#686d76' },
          headerShown: false,
        }}
        name="ProfileFinder"
        component={ProfileFinder}
      />
      <App.Screen
        options={{
          cardStyle: { backgroundColor: '#686d76' },
          headerShown: false,
        }}
        name="Loading"
        component={LoadingPage}
      />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
