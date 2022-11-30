import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import {Login} from './src/components';

Amplify.configure(awsconfig);

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
