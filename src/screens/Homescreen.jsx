import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert, ImageBackground } from 'react-native'
import { useState } from 'react';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Welcome from './Welcome';
import Headers from '../components/Headers/Headers';
import { SafeAreaView } from 'react-native-safe-area-context';


const Homescreen = () => {
  const [name, setName]=useState('');
  const [password, setPassword]=useState('');
  const navigation = useNavigation();
 

  
  return (
    
    <SafeAreaView style={styles.container} >
    <ImageBackground source={{uri:'https://img.freepik.com/free-vector/futuristic-background-with-lines_23-2148487905.jpg'}} style={{height:"100%",width:"100%"}}>
    <View style={{alignItems:"center", height:"10%" , top:50}}>
    <Text style={styles.title}>Sign In Page</Text>
    <Text style={styles.subtitles}>Enter Your account details to Login</Text>
    </View>

    <View style={{height:"80%", justifyContent:"center",alignItems:"center", width:"100%"}}>
    <View>

     <TextInput
     style={styles.name}
     placeholder='username'
     onChangeText={(text)=>setName(text)}
     value={name}/>

     <TextInput
     style={styles.name}
     placeholder='password'
     onChangeText={(text)=>setPassword(text)}
     value={password}
     secureTextEntry/>

    </View>
    <Text style={styles.account}>Don't have an account? <Text style={styles.signup} onPress={() =>navigation.navigate(Welcome)}>SignUp</Text></Text>
    </View>
    <View>
    

    <TouchableOpacity
      style = {styles.btn}>
      <Text style={styles.btnname} onPress={()=>navigation.navigate(Headers)} >SignIn</Text>
    </TouchableOpacity>

    </View>  

    </ImageBackground>
 </SafeAreaView>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:"space-evenly"
  },
  title:{
    color:"white",
    justifyContent:"center",
    fontWeight:"900",
    textAlign:"center",
    marginTop:20,
    fontSize:40,
  },
  subtitles:{
    color:"#F5F5F5",
    justifyContent:"center",
    fontWeight:"900",
    textAlign:"center",
    marginTop:20,
    fontSize:20,
  },
  name:{
    fontSize:20,
    margin:20,
    borderRadius:8,
    borderWidth:2,
    padding:10,
    minWidth:"70%",
    backgroundColor:"white",
  },
  btn:{
    minWidth:"80%",
    alignSelf:"center",
    backgroundColor:"black",
    borderRadius:8,
    padding:8,
    
  },
  btnname:{
    color:"white",
    textAlign:"center",
  },
  account:{
    fontSize:16,
    color:"#F5F5F5",
    alignSelf:"center",
    marginTop:20,
  },
  signup:{
    fontSize:18,
    fontWeight:"700",
    color:"lightblue",
    
  }
})