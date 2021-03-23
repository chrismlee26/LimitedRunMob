import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Alert, Button, Platform, Dimensions } from 'react-native';
import 'react-native-gesture-handler';


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Text style={{ color: 'white', fontSize: 28, letterSpacing: 5, fontFamily: 'Baskerville', bottom: 175 }}>limited run</Text>
      <TouchableHighlight onPress={() => console.log('Image tapped')}>
        <Image
        style={{width: 500, height: 400, bottom: 170}}
          source={require("../assets/bike1.jpeg")}
          />
      </TouchableHighlight>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#1f1f1f',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
});
