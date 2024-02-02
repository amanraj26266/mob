import { StyleSheet, Text, TouchableOpacity,Image,View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { data2 } from '../../data/Datain'

import { useNavigation } from '@react-navigation/native';


const CourseTemp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     
      
      <FlatList
      data={data2}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=><TouchableOpacity style={styles.imageConatiner}  showsVerticalScrollIndicator={false} onPress={()=> navigation.navigate("DetailHead")}>
      <Image source={{uri : item.Image}} style={styles.image}  />
      <Text style={{alignSelf:"center", fontWeight:"600",}}>{item.title}</Text>
      
      </TouchableOpacity>}
      />
     
    </View>
      
    
      
  )
}

export default CourseTemp

const styles = StyleSheet.create({
  container:{
    
    flexDirection:"row",
  },
  imageConatiner:{
    marginVertical:20,
    marginHorizontal:15,
    height:150,
    width:150,
    borderRadius:20,
  },
  image:{
    height:"100%",
    width:"100%",
    borderRadius:20, 
  },
  txt:{
    fontSize:18,
    fontWeight:"800",
    alignSelf:"center",
  }
})