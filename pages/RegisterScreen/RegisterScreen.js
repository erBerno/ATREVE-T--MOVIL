import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import RegisterScreenStyles from './RegisterScreenStyle/RegisterScreenStyle';
import InputValidated from '../../components/InputValidated';
import { collection, addDoc } from "firebase/firestore";
import db  from '../../services/FirebaseConfig'


const validationSchema = yup.object().shape({
  username: yup.string().required('Required'),
  password: yup.string().required('Required'),
  fullname: yup.string().required('Required'),
  ci: yup.string().required('Required'),
  location: yup.string().required('Required'),
  phone: yup.string().required('Required'),
  email: yup.string().email('Invalid Email').required('Required'),
});


const RegisterScreen = () => {
  const navigation = useNavigation();

  const handleRegister = async (user) => {
    try {
      const docRef = await addDoc(collection(db, 'users'), user);
  
      console.log('User added with ID: ', docRef.id);
      alert('Registration Successful');
      navigation.navigate('LoginScreen');
    } catch (e) {
      console.error('Error adding document: ', e);
      alert('Registration Failed');
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      fullName: '',
      ci: '',
      location: '',
      phone: '',
      email: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('values: ', values);
      handleRegister(values);
    },
  });

  return (
    <View style={RegisterScreenStyles.container}>
        <Text style={RegisterScreenStyles.title}>Registro</Text>
        <InputValidated
            label='Username'
            formikProps={formik}
            formikKey='username'
        />
        <InputValidated
            label='Contraseña'
            formikProps={formik}
            formikKey='password'
            secureTextEntry
            autoCapitalize='none'
        />
        <InputValidated
            label='Fullname'
            formikProps={formik}
            formikKey='fullName'
        />
        <InputValidated
            label='CI'
            formikProps={formik}
            formikKey='ci'
        />
        <InputValidated
            label='Location'
            formikProps={formik}
            formikKey='location'
        />
        <InputValidated
            label='Phone'
            formikProps={formik}
            formikKey='phone'
        />
        <InputValidated
            label='Email'
            formikProps={formik}
            formikKey='email'
            keyboardType='email-address'
            autoCapitalize='none'
        />


      <Button style={RegisterScreenStyles.button} mode="contained" onPress={formik.handleSubmit}>Registrarse</Button>
    </View>
    );
};

export default RegisterScreen;
