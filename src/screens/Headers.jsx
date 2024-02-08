import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import CourseTemp from '../components/navigation/CourseTemp';
import ExtraCourses from '../components/navigation/ExtraCourses';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserType } from '../Context/UserContext';


const Headers = () => {
    const [backgroundColor, setBackgroundColor] = useState('white');
    const navigation=useNavigation();
    const {selectedCourse} = useContext(UserType);
  
    const changeColor = () => {
      setBackgroundColor(prevColor => prevColor === 'white' ? '#b6becf' : 'white');
    };
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.navigate('Landing')}>
            <AntDesign name="arrowleft" size={24} color="white" style={styles.headIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={changeColor}>
            <Entypo name="dots-three-horizontal" size={24} color="white" style={styles.headIcon} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.courseSection}>
        <Text style={styles.courseTitle}>Trending Courses !</Text>
        <CourseTemp />
      </View>

      <View style={styles.extraSection}>
        <Text style={styles.extraTitle}>You might also like it</Text>
        <ExtraCourses />
      </View>
    </SafeAreaView>
  )
};

export default Headers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  headIcon: {
    borderRadius: 8,
    backgroundColor: 'black',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  courseSection: {
    marginTop: 15,
  },
  courseTitle: {
    fontWeight: 'bold',
    fontSize: 35,
    marginHorizontal: 15,
  },
  extraSection: {
    flex: 1, 
    marginTop: 8,
  },
  extraTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    marginHorizontal: 15,
    marginVertical: 10,
  },
});
