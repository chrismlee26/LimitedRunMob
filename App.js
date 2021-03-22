import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Alert, Button, Platform, Dimensions } from 'react-native';


export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    <SafeAreaView style={[styles.container, containerStyle]}>
      <StatusBar style="light" />
      <Text style={{ color: 'white', fontSize: 35, letterSpacing: 5, fontFamily: 'Baskerville' }}>limited run</Text>
      <Text>let's build shit</Text>
      <TouchableHighlight onPress={() => console.log('Image tapped')}>
        <Image
        style={{width: 200, height: 300, borderWidth: 2}}
          source={require("./app/assets/bike1.jpeg")}/>
      </TouchableHighlight>
      <Button 
        color="orange"
        title="Login" 
          onPress={() => Alert.alert("Login", "Welcome Back ", [   
            {text: "Back", onPress: () => console.log('Back')},
            {text: "Login", onPress: () => console.log('Login')}, // console.log -> route to next page  
          ])}
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "#727272" };

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#727272',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0,

  },
});
