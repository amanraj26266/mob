import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import React from 'react';
import { list } from '../../data/Datain';

const ExtraCourses = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.Extracontainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}{'\n\n'}</Text>
              <Text style={styles.subtitle}>TotalItem: {item.totalItem}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ExtraCourses;

const styles = StyleSheet.create({
  container: {
     flex:1,
  },
  Extracontainer: {
    backgroundColor: 'gray',
    height: 110,
    marginHorizontal: 15,
    marginVertical: 4,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '92%',
    alignSelf: 'center',
  },
  image: {
    height: 110,
    width: 120,
    padding:8,
    borderRadius: 16,
  },
  textContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 20, 
    flex: 1, 
  },
  title: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  subtitle: {
    color: '#ffff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
});
