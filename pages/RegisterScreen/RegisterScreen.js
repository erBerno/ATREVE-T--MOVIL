import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useFormik } from 'formik';
import * as yup from 'yup';
import RegisterScreenStyles from './RegisterScreenStyle/RegisterScreenStyle';
import InputValidated from '../../components/InputValidated';


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
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      fullname: '',
      ci: '',
      location: '',
      phone: '',
      email: '',
    },
    validationSchema,
    onSubmit: values => console.log(values),
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
        />
        <InputValidated
            label='Fullname'
            formikProps={formik}
            formikKey='fullname'
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
        />


      <Button style={RegisterScreenStyles.button} mode="contained" onPress={formik.handleSubmit}>Registrarse</Button>
    </View>
    );
};

export default RegisterScreen;
