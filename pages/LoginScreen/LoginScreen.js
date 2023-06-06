import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useFormik } from 'formik';
import * as yup from 'yup';
import LoginScreenStyles from './LoginScreenStyles/LoginScreenStyles';
import InputValidated from '../../components/InputValidated';
import { useNavigation } from '@react-navigation/native';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Required'),
  password: yup.string().required('Required'),
});

const LoginScreen = () => {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => console.log(values),
  });

  return (
    <View style={LoginScreenStyles.container}>
      <Text style={LoginScreenStyles.projectTitle}>Proyecto Asilos</Text>
      <Text style={LoginScreenStyles.title}>Inicio de sesión</Text>
      <InputValidated
        label='Email'
        formikProps={formik}
        formikKey='email'
      />
      <InputValidated
        label='Contraseña'
        formikProps={formik}
        formikKey='password'
        secureTextEntry
      />
      <Button style={LoginScreenStyles.button} mode="contained" onPress={formik.handleSubmit}>Iniciar Sesión</Button>
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={LoginScreenStyles.registerText}>No tienes una cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
};


export default LoginScreen;
