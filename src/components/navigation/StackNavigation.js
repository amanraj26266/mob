import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../../screens/Welcome';
import Headers from '../../screens/Headers';
import Homescreen from '../../screens/Homescreen';
import Landing from '../../screens/Landing';
import Detail from '../../screens/Detail';
import CourseEnrolled from './CourseEnrolled';
const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}} />
        <Stack.Screen name="Homescreen" component={Homescreen} options={{headerShown: false}} />
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name="Headers" component={Headers} options={{headerShown: false}} />
        <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}} />
        <Stack.Screen name="CourseEnrolled" component={CourseEnrolled} options={{headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})