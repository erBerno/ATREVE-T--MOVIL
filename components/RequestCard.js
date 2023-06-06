import React from 'react';
import { View, Text } from 'react-native';
import RequestCardStyle from './ComponentsStyles/RequestCardStyle';

const RequestCard = ({ title, description }) => (
  <View style={RequestCardStyle.container}>
    <Text style={RequestCardStyle.title}>{title}</Text>
    <Text style={RequestCardStyle.description}>{description}</Text>
  </View>
);


export default RequestCard;
