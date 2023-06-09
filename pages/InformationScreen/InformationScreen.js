import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import InformationScreenStyle from './InformationScreenStyle/InformationScreenStyle';

const InformationScreen = (props) => {
  const { campaign, userId } = props.route.params; // Acceder a la información enviada, incluido el ID

  console.log('INFORMARION USER ID: ', userId);

  const formatDateString = (date) => {
    if (date instanceof Date) {
      return date.toLocaleDateString();
    }
    return "";
  };

  return (
    <SafeAreaView style={InformationScreenStyle.container}>
      <Image
        // source={{ uri: campaign.image }}
        style={InformationScreenStyle.image}
      />
      <View style={InformationScreenStyle.content}>
        <Text style={InformationScreenStyle.title}>{campaign.campaignName}</Text>
        <View style={InformationScreenStyle.dateContainer}>
          <Text style={InformationScreenStyle.dateText}>
            Termina el: {formatDateString(campaign.endDate)}
          </Text>
        </View>
        <Text style={InformationScreenStyle.texts}>Tipo de Beneficiario: {campaign.beneficiaryType}</Text>
        <Text style={InformationScreenStyle.texts}>Descripcion: {campaign.description}</Text>
      </View>

      {campaign.status === 'active' ? (
        <TouchableOpacity
          style={InformationScreenStyle.button}
          onPress={() =>
            props.navigation.navigate("DonationScreen", { campaign: campaign, userId: userId })
          }
        >
          <Text style={InformationScreenStyle.buttonText}>
            Donar
          </Text>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};

export default InformationScreen;
