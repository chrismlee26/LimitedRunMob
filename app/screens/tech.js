import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Alert, Button, Platform, Dimensions, YellowBox } from 'react-native';
import 'react-native-gesture-handler';


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Text style={{ color: 'white', fontSize: 28, letterSpacing: 5, fontFamily: 'Baskerville', left: 125 }}>limited run</Text>
      <View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => console.log('Image tapped')}>
          <Image
            style={{width: 500, height: 300, right: 45 }}
            source={require("../assets/fanblade.jpg")}
            />
        </TouchableOpacity> 
      </View>
      <View>
        <TouchableOpacity
          title="LOGIN"
          color="black"
          style={{ color: 'black', width: 380, height: 60, padding: 10, borderRadius: 4, borderWidth: 1.5, borderColor: 'orange', backgroundColor: 'black', opacity: 0.9, left: 25, position: 'absolute', bottom: -50 }}
          onPress={() => console.log('Buy Button Tapped')}>
        </TouchableOpacity>
        <Text style={{position: 'absolute', left: 40, top: 2, fontSize: 30, color: 'orange', fontFamily: 'Helvetica Neue', textDecorationLine: 'underline'}}>13</Text>
        <Text style={{position: 'absolute', left: 85, top: 10, fontSize: 18, color: 'white', fontFamily: 'Helvetica Neue', fontStyle: 'italic'}}>available</Text>
        <Text style={{position: 'absolute', right: 40, top: 13, fontSize: 15, color: 'white', fontFamily: 'Helvetica Neue'}}>05/21 DELIVERY</Text>
      </View>
      <View>
        <Text style={{position: 'absolute', left: 140, top: 65, fontSize: 22, color: 'white', fontFamily: 'Helvetica'}}>TECH SPECS</Text>
      </View>
      <View>
        <Text style={{position: 'absolute', margin: 30, top: 90, fontSize: 22, color: 'white', fontFamily: 'Baskerville', textAlign: 'left'}}>•Lorem ipsum dolor sit amet. {"\n"} •consectetur adipiscing elit sed do eiusmod tempor incididunt ut. {"\n"} •labore et dolore magna aliqua. {"\n"} •Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </View>
      <View>
        <Text 
          onPress={() => console.log('Concept Tapped')}
          style={{position: 'absolute', left: 38, top: 380, fontSize: 16, color: 'white', fontFamily: 'Helvetica', textDecorationLine: 'underline'}}>Concept
        </Text>
        <Text 
          onPress={() => console.log('Technical Tapped')}
          style={{position: 'absolute', left: 180, top: 380, fontSize: 16, color: 'white', fontFamily: 'Helvetica', textDecorationLine: 'underline'}}>Technical
        </Text>
        <Text 
          onPress={() => console.log('Timeline Tapped')}
          style={{position: 'absolute', left: 325, top: 380, fontSize: 16, color: 'white', fontFamily: 'Helvetica', textDecorationLine: 'underline'}}>Timeline
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => console.log('Footer Tapped')}>
          <Image
            style={{width: 430, height: 100, position: 'absolute', top: 410, left: 0}}
            source={require("../assets/footer.png")}
            />
        </TouchableOpacity> 
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#1f1f1f',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
});
