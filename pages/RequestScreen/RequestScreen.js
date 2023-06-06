import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import RequestCard from '../../components/RequestCard';
import RequestScreenStyle from './RequestScreenStyle/RequestScreenStyle';

const peticiones = [
  // Simulación de datos
  { id: '1', title: 'Petición 1', description: 'Descripción de la petición 1' },
  { id: '2', title: 'Petición 2', description: 'Descripción de la petición 2' },
  //...
];

const RequestScreen = () => (
  <View style={RequestScreenStyle.container}>
    <Text style={RequestScreenStyle.title}>Peticiones del Asilo</Text>
    <ScrollView style={RequestScreenStyle.scrollContainer}>
      {peticiones.map(({ id, title, description }) => (
        <RequestCard key={id} title={title} description={description} />
      ))}
    </ScrollView>
  </View>
);


export default RequestScreen;
