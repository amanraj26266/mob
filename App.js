import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Welcome from './src/screens/Welcome';
import StackNavigation from "./src/components/navigation/StackNavigation"
import Test from './src/screens/Test';
import CourseTemp from './src/components/navigation/CourseTemp';
import Homescreen from './src/screens/Homescreen';


export default function App() {

  return (
    <>
  <StackNavigation/>
  <StatusBar style='dark' />
  </>
  );
}

const styles = StyleSheet.create({

  conatiner:{
    justifyContent:"center",
    alignItems:"center",
    flex:1,
  
  }

});
