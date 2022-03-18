import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View} from 'react-native';



import { styles } from "./style";
export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ola João</Text>
      <StatusBar style="auto" />
    </View>
  );
}