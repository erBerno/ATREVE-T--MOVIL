import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useFormik } from 'formik';
import * as yup from 'yup';
import LoginScreenStyles from './LoginScreenStyles/LoginScreenStyles';
import InputValidated from '../../components/InputValidated';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo-no-background.png'
import  db  from '../../services/FirebaseConfig'
import { collection, getDocs, query, where } from "firebase/firestore";



const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Required'),
  password: yup.string().required('Required'),
});

const LoginScreen = (props) => {
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const usersQuery = query(
        collection(db, "users"),
        where("email", "==", formik.values.email)       
      );
      
      const usersQuerySnapshot = await getDocs(usersQuery);
      if (usersQuerySnapshot.empty) {
        alert("User not found");
        return;
      }
  
      const user = usersQuerySnapshot.docs[0];
      const userData = user.data();
  
      userData.id = user.id;
  
      props.navigation.navigate("RequestScreen", { user: userData });
    } catch (error) {
      alert("An error occurred during login");
    }
  };


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('values: ', values);
      handleLogin();
    },    
  });

  return (
    <View style={LoginScreenStyles.container}>
      <Image source={logo} style={LoginScreenStyles.logo} resizeMode='contain' />
      <Text style={LoginScreenStyles.title}>Inicio de sesión</Text>
      <InputValidated
        label='Email'
        formikProps={formik}
        formikKey='email'
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <InputValidated
        label='Contraseña'
        formikProps={formik}
        formikKey='password'
        secureTextEntry
        autoCapitalize='none'
      />
      <Button style={LoginScreenStyles.button} mode="contained" onPress={formik.handleSubmit}>Iniciar Sesión</Button>
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={LoginScreenStyles.registerText}>No tienes una cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
