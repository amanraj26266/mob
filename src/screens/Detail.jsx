import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DetailHead from '../components/navigation/DetailHead'
import DetailContent from '../components/navigation/DetailContent'
import { UserType } from '../Context/UserContext'

const Detail = ({route}) => { 
 const { item } = route.params;
 
  return (
    <View style={styles.container}>
      <DetailHead  item={item}/>
      <DetailContent item={item}/>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  container:{
    height:"100%",
  }
})