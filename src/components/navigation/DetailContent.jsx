import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CourseEnrolled from './CourseEnrolled';


const DetailContent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
       <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.txt}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea et perspiciatis eveniet, nobis accusantium saepe omnis tenetur nemo nihil excepturi in alias fugiat labore iusto quaerat assumenda consequuntur iure est, voluptas odit delectus, hic veniam. Pariatur consectetur aut, natus laudantium, maxime minima ea fuga expedita nobis optio a debitis molestiae labore et eum dolor assumenda explicabo! Adipisci nisi rerum ea mollitia qui expedita magni quae accusantium? Corrupti ratione, ex nemo iste cum ullam corporis officiis qui voluptatem in cupiditate, nobis architecto consectetur placeat. Hic, consectetur quia. Officiis, pariatur impedit. Ratione, repellendus natus ipsam est adipisci consequuntur voluptates earum dolorum cumque repudiandae libero incidunt voluptatum magni dolorem optio odio, reprehenderit nam ipsa veritatis? Quis velit beatae quia tempore praesentium itaque atque, labore maiores architecto non doloribus totam fuga consequuntur saepe corporis officia aliquid, nam dolores provident, quos perspiciatis necessitatibus. Non dolor labore animi, laudantium delectus quia ut optio odit amet omnis numquam libero eum tempore ad officiis saepe ab assumenda accusamus voluptatum deserunt! Adipisci soluta magnam eius asperiores neque autem consequuntur quaerat dolorem necessitatibus pariatur culpa veritatis possimus officia eaque repellendus cum, expedita distinctio, ullam deleniti. Reiciendis pariatur impedit molestias dignissimos ipsam eos. Sunt non aspernatur quasi tempore reiciendis quos ipsa, suscipit cumque obcaecati pariatur blanditiis officia eligendi. Hic veniam est illo, beatae assumenda numquam enim quae expedita magni natus inventore quod officiis amet molestias aliquid unde. Cupiditate quae dolore incidunt, debitis a sint eligendi aperiam, quibusdam amet laborum, sequi iure natus dolorum impedit laudantium eos consectetur illo eius. Illum, illo deleniti! Eos facere dolor architecto at ipsa voluptatum praesentium perspiciatis ipsum! Pariatur porro tenetur omnis consectetur id necessitatibus adipisci, reprehenderit consequuntur exercitationem eius dolorem dignissimos, eveniet ipsa beatae numquam voluptatem ea sequi provident fugit nisi quidem impedit. Necessitatibus, alias? Eligendi qui ad sequi quae ducimus optio provident cum doloribus iste obcaecati incidunt nemo error quaerat esse quas tenetur illum vel distinctio commodi necessitatibus, recusandae delectus aliquid itaque. Animi aliquam eius molestiae voluptatum quasi porro blanditiis doloribus esse eos nemo velit veniam qui quam dignissimos, eaque aspernatur amet eveniet, nesciunt deserunt obcaecati sunt neque vero. Ipsam cumque distinctio enim mollitia totam?</Text>

       </ScrollView>
       <View >
        <TouchableOpacity onPress={()=>navigation.navigate(CourseEnrolled)} style={styles.bottom}>
          <Text style={styles.btntxt}>Enroll Now </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DetailContent

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal:12,
    top:30
  },
  txt:{
    fontSize:20,
  },
  bottom:{
    backgroundColor:"lightblue",
    borderRadius:35, 
    alignSelf:"center",
    marginBottom:40,
    padding:10,
    minWidth:"80%",
    textAlign:"center"
  },
  btntxt:{
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center"
  }
  
})