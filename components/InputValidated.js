import React from 'react';
import { TextInput } from 'react-native-paper';
import InputValidatedStyle from './ComponentsStyles/InputValidatedStyle';

const InputValidated = ({ label, formikProps, formikKey, ...rest }) => {
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
      {...rest}
    />
  );
};


export default InputValidated;
