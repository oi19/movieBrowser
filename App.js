import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppNav from './navigation/navigation';
import { Provider } from 'react-redux'
import { store } from './redux/configration';



const App = () => {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
};


export default App;
