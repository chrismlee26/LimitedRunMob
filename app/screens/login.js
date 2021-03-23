import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Alert, Button, Platform, Dimensions, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';


export default function Login({ navigation }) {
  
  const pressHandler = () => {
    navigation.navigate('Home');
    
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar style="dark" />
      <ImageBackground
        source={require('../assets/login-background.jpeg')}
        style={{width: 100 + '%', height: 110 + '%', resizeMode: 'cover', position: 'absolute', opacity: 0.6 }}
      />
      <Text style={{ color: 'white', fontSize: 45, letterSpacing: 5, fontFamily: 'Baskerville', alignItems: 'center', justifyContent: 'center' }}>limited run</Text>
      <View>
        <TouchableOpacity
          title="LOGIN"
          color="black"
          onPress={pressHandler}
          style={{ color: 'black', width: 100, height: 50, padding: 10, borderRadius: 10, backgroundColor: 'white', opacity: 0.4 }}
        />
        <Text style={{position: 'absolute', left: 25, top: 10, fontSize: 25, fontFamily: 'Baskerville'}}>login</Text>
      </View>
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
