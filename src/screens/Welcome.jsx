import { StyleSheet, Text, View,TextInput, TouchableOpacity,ImageBackground} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';

const Welcome = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [dob,setDob]=useState('');
  const [mobile,setMobile]=useState('');
  const [password,setPassword]=useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
       <Formik
       initialValues={{name:'',email:'',dob:'',mobile:'',password:''}}
       onSubmit={(values)=>{
        console.log(values);
        navigation.navigate(Headers);
       }}
       >
    {({ handleChange, handleBlur, handleSubmit, values }) =>(
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
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        value={values.name}/>
      </View>

      <View style={styles.textinput}>
      <Fontisto name="email" size={24} color="black" />
        <TextInput
        style={styles.input}
        placeholder='Email'
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        keyboardType='email-address'/>
      </View>


      <View style={styles.textinput}>
      <MaterialIcons name="date-range" size={24} color="black" />
        <TextInput
        style={styles.input}
        placeholder='Date Of Birth'
        onChangeText={handleChange('dob')}
        onBlur={handleBlur('dob')}
        value={values.dob}/>
      </View>

      <View style={styles.textinput}>
      <Entypo name="old-mobile" size={24} color="black" />
        <TextInput
        style={styles.input}
        placeholder='Mobile No.'
        onChangeText={handleChange('mobile')}
        onBlur={handleBlur('mobile')}
        value={values.mobile}
        keyboardType='numeric'/>
        
      </View>

      <View style={styles.textinput}>
        <MaterialIcons name="password" size={24} color="black" />
        <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        secureTextEntry/>
      </View>

      
      <Text style={{fontSize :18 , color : "#F5F5F5"}}>Already have an account ? <Text style={{color : 'lightblue'}} onPress={()=>navigation.navigate(Homescreen)}>Sign In</Text></Text>
    </View>

    <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
      <Text style={{color : "white" , fontSize : 20 , alignSelf:"center"}} >SignUp</Text>
    </TouchableOpacity>
    </ImageBackground>
    )}
    </Formik>
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