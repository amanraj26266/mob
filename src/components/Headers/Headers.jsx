import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import CourseTemp from '../navigation/CourseTemp';
import ExtraCourses from '../navigation/ExtraCourses';

const Headers = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={24} color="white" style={styles.headIcon} />
        <Entypo name="dots-three-horizontal" size={24} color="white" style={styles.headIcon} />
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
