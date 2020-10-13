import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar, View } from 'react-native';

import Routes from './routes';

const App: React.FC = () => (
  <View style={{ flex: 1 }}>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Routes />
  </View>
);

export default App;
