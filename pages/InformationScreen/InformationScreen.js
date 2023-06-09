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
        <Text style={InformationScreenStyle.title}>{campaign.name}</Text>
        <View style={InformationScreenStyle.dateContainer}>
          <Text style={InformationScreenStyle.dateText}>
            Ends: {formatDateString(campaign.endDate.toDate())}
          </Text>
        </View>
        <Text style={InformationScreenStyle.texts}>Beneficiary Type: {campaign.beneficiaryType}</Text>
        <Text style={InformationScreenStyle.texts}>Requirement: {campaign.requirement}</Text>
      </View>

      {campaign.status === 'active' ? (
        <TouchableOpacity
          style={InformationScreenStyle.button}
          onPress={() =>
            props.navigation.navigate("DonationScreen", { campaign: campaign, userId: userId })
          }
        >
          <Text style={InformationScreenStyle.buttonText}>
            Donate
          </Text>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};

export default InformationScreen;
