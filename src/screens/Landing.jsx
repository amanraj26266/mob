import { StyleSheet, Text, View,ImageBackground, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Homescreen from './Homescreen';
//const image={uri:'https://gkschools.com/images/Vika-Le.webp'};

const Landing = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{uri:'https://i.pinimg.com/originals/34/99/ea/3499eafb8c1c91e0d8df902ecd1d5fb7.jpg'}} style={styles.img}>
      <View style={styles.head}>
      <Text style={styles.headtxt}>StudyMind</Text>
      <Text style={styles.quote}>
        The successful warrior is the average man,with laser-like focus{'\n'} <Text style={{color:"red",fontSize:25,fontWeight:"500" }}>~ Bruce Lee </Text>
      </Text>
       
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={()=>navigation.navigate(Homescreen)}>
          <Text style={{fontSize:30,fontWeight:"bold",backgroundColor:"white",borderRadius:35, alignSelf:"center",padding:15,minWidth:"80%",textAlign:"center"}}>Lets Begin <AntDesign name="arrowright" size={30} color="red" /> </Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
     
    </SafeAreaView>
  )
}

export default Landing

const styles = StyleSheet.create({
  container:{
    height:"100%",
  },
  head:{
    marginVertical:30,
    justifyContent:"center",
    alignItems:"center"
  },
  headtxt:{
    color:"red",
    top:20,
    fontSize:50,
    fontWeight:"bold",
    alignItems:"center",
    justifyContent:"center",
  },
  quote:{
    color:"#ccff00",
    marginHorizontal:40,
    marginTop:"55%",
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center"
  },
  img:{
    height:"100%",
    width:"100%",
  },
  bottom:{
    marginTop:"50%",
    justifyContent:"center",
  }
})