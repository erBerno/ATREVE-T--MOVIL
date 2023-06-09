import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import RequestCardStyle from './ComponentsStyles/RequestCardStyle';

const RequestCard = ( props ) => (
  <TouchableOpacity onPress={() => {props.onPress()}} style={RequestCardStyle.container}>
    <Text style={RequestCardStyle.title}>{props.title}</Text>
    <Text style={RequestCardStyle.description}>{props.description}</Text>
  </TouchableOpacity>
);


export default RequestCard;
