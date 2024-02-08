import { StyleSheet, Text, View ,ImageBackground,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { UserType } from '../../Context/UserContext';

const DetailHead = ({item}) => {
  const navigation=useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={{uri: item.Image}} style={styles.image}>

        <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.navigate(Headers)}>
        <AntDesign name="arrowleft" size={30} color="black" style={styles.headIcon} />
        </TouchableOpacity>
        <Text></Text>
      </View>

        </ImageBackground>
        <View style={styles.title}>
        <Text style={styles.txt}>{item.title}</Text>
        <Entypo name="star" size={30} color="gold" style={styles.Icon} />
        </View>
    </SafeAreaView>
  )
}

export default DetailHead

const styles = StyleSheet.create({
  container:{
    top:21,
    height:300,
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
  },
  image:{
    height:"100%",
    width:"100%",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginRight:25,
  },
  headIcon: {
    borderRadius: 40,
    backgroundColor:"#F5F5F5",
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    top:20,
  },
  title:{
    flexDirection:"row",
    width:"90%",
    justifyContent:"space-between",
    margin:5
  },
  txt:{
    marginVertical:8,
    fontSize:20,
    fontWeight:"bold",
  }
})