import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fa } from '../data/Datain'


const Test = () => {
  return (
    <SafeAreaView style={styles.container}>
     <FlatList 
     data={fa}
     renderItem={({item}) => <Text>{item.title}</Text>}
     keyExtractor={item => item.id}
     horizontal
     />
    </SafeAreaView>
  )
}

export default Test

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  }
})