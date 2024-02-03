import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Headers from './Headers';

const Homescreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate(Headers);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <ImageBackground
            source={{ uri: 'https://img.freepik.com/free-vector/futuristic-background-with-lines_23-2148487905.jpg' }}
            style={styles.imageBackground}
          >
            <View style={styles.headerView}>
              <Text style={styles.title}>Sign In Page</Text>
              <Text style={styles.subtitles}>Enter Your account details to Login</Text>
            </View>

            <View style={styles.formView}>
              <TextInput
                style={styles.inputField}
                placeholder='Username'
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
              <TextInput
                style={styles.inputField}
                placeholder='Password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />

              <Text style={styles.accountText}>
                Don't have an account?{' '}
                <Text style={styles.signupText} onPress={() => navigation.navigate('Welcome')}>
                  SignUp
                </Text>
              </Text>

              <TouchableOpacity style={styles.signInButton} onPress={handleSubmit}>
                <Text style={styles.signInButtonText}>SignIn</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    alignItems: 'center',
  },
  headerView: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    color: 'white',
    fontWeight: '900',
    textAlign: 'center',
    fontSize: 40,
  },
  subtitles: {
    color: '#F5F5F5',
    fontWeight: '900',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
  },
  formView: {
    top:"20%",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  inputField: {
    fontSize: 20,
    margin: 20,
    borderRadius: 8,
    borderWidth: 2,
    padding: 10,
    minWidth: '70%',
    backgroundColor: 'white',
  },
  accountText: {
    fontSize: 16,
    color: '#F5F5F5',
    marginTop: 20,
  },
  signupText: {
    fontWeight: '700',
    color: 'lightblue',
  },
  signInButton: {
    top:"70%",
    minWidth: '80%',
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 10,
  },
  signInButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Homescreen;
