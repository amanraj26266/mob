import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DetailHead from '../components/navigation/DetailHead'
import DetailContent from '../components/navigation/DetailContent'

const Detail = () => {
  return (
    <View style={styles.container}>
      <DetailHead/>
      <DetailContent/>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  container:{
    height:"100%",
  }
})