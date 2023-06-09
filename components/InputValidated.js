import React from 'react';
import { TextInput } from 'react-native-paper';
import InputValidatedStyle from './ComponentsStyles/InputValidatedStyle';
import { useTheme } from 'react-native-paper';

const InputValidated = ({ label, formikProps, formikKey, ...rest }) => {
  const theme = useTheme();
  const inputStyles = {
    ...InputValidatedStyle.input,
    ...(formikProps.touched[formikKey] && formikProps.errors[formikKey] ? InputValidatedStyle.errorInput : {}),
  };

  return (
    <TextInput
      style={inputStyles}
      label={label}
      value={formikProps.values[formikKey]}
      onChangeText={formikProps.handleChange(formikKey)}
      onBlur={formikProps.handleBlur(formikKey)}
      error={formikProps.touched[formikKey] && Boolean(formikProps.errors[formikKey])}
      mode="outlined"
      underlineColor='transparent'
      theme={{ ...theme, colors: { ...theme.colors, primary: '#6B7280', text: '#97978D', placeholder: '#97978D' }}}
      {...rest}
    />
  );
};


export default InputValidated;
