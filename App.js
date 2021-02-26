/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Root, StyleProvider } from 'native-base'
import LoginForm from './src/Login/LoginForm';

const App  = () => {
  return (
    <>
    <Root>
        <View style={styles.container}>
          <View style={styles.contentForm} >
            <LoginForm/>
          </View>
        </View>
    </Root>    
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  contentForm: {
    flex:1,
    marginHorizontal: 0,
  },
})
export default App;
