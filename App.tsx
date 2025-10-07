/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import DashboardScreen from './src/screens/DashboardScreen';
import { StatusBar } from 'react-native';

function App() {

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <DashboardScreen />
    </>
  );
}

export default App;
