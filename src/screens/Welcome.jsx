import { StyleSheet, Text, View,TextInput, TouchableOpacity,ImageBackground} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [dob,setDob]=useState('');
  const [mobile,setMobile]=useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground source={{uri:'https://wallpaperaccess.com/full/1075090.jpg'}} style={{height:"100%",width:"100%"}}>
    <View style={{alignItems:"center", height:"10%" , top:50}}>
      <Text style={styles.heading}>SignUp Page</Text>
      <Text style={styles.head}>Enter your details to Signup</Text>
    </View>
      <View style={{height:"80%", justifyContent:"center",alignItems:"center", width:"100%"}}>
      <View style={styles.textinput}>
      <AntDesign name="user" size={24} color="black" />
        <TextInput
        style={styles.input}
        placeholder='UserName'
        onChangeText={(text)=>setName(text)}
        value={name}/>
      </View>

      <View style={styles.textinput}>
      <Fontisto name="email" size={24} color="black" />
        <TextInput
        style={styles.input}
        placeholder='Email'
        onChangeText={(text)=>setEmail(text)}
        value={email}/>
      </View>


      <View style={styles.textinput}>
      <MaterialIcons name="date-range" size={24} color="black" />
        <TextInput
        style={styles.input}
        placeholder='Date Of Birth'
        onChangeText={(text)=>setDob(text)}
        value={dob}/>
      </View>

      <View style={styles.textinput}>
      <Entypo name="old-mobile" size={24} color="black" />
        <TextInput
        style={styles.input}
        placeholder='Mobile No.'
        onChangeText={(text)=>setMobile(text)}
        value={mobile}/>
      </View>
      <Text style={{fontSize :18 , color : "#F5F5F5"}}>Already have an account ? <Text style={{color : 'lightblue'}} onPress={()=>navigation.navigate(Homescreen)}>Sign In</Text></Text>
    </View>

    <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Headers")} >
      <Text style={{color : "white" , fontSize : 20 , alignSelf:"center"}} >SignUp</Text>
    </TouchableOpacity>
    </ImageBackground>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"space-evenly",
  },
  heading:{
    color:"white",
    fontWeight:"bold",
    fontSize:30,
    textAlign:"center",
  },
  head:{
    color:"#F5F5F5",
    fontSize:18,
    textAlign:"center",
    marginTop:10,
  },
  textinput:{
    backgroundColor:"white",
    margin:5,
    flexDirection:"row",
    padding:10,
    borderRadius:12,
    marginBottom:8,
    minWidth:"70%",
  },
  input:{
    marginLeft:8,
    width : "85%"
  },
  btn:{
alignSelf:"center",
    padding:10,
    borderRadius:16,
    height : 50,
    width : "80%",
    textAlign:"center",
    color:"black",
    backgroundColor:"black"

  }
  
})