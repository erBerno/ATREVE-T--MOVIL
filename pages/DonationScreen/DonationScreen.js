import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Switch, Alert } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { addDoc, collection } from "firebase/firestore";
import db from "../../services/FirebaseConfig";
import * as Progress from "react-native-progress";
import DonationScreenStyle from "./DonationScreenStyle/DonationScreenStyle";
import { useNavigation } from "@react-navigation/native";

const DonationScreen = (props) => {
  
    const { campaign, userId } = props.route.params;
    const navigation = useNavigation();

    const [itemQuantity, setItemQuantity] = useState(0);
    const [donationAmount, setDonationAmount] = useState(0);
    const [donationDescription, setDonationDescription] = useState("");
    const [anonymousDonation, setAnonymousDonation] = useState(false);
    const [donateItems, setDonateItems] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    

    const handleDateChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShowDatePicker(Platform.OS === "ios");
      setDate(currentDate);
      console.log(currentDate);
    };
  

    const handleDonation = async () => {
      try {
        console.log("Registering donation....");
        const quantity = donateItems
            ? parseInt(itemQuantity)
            : parseInt(donationAmount);
        const description = donationDescription;
        const pickupDateTime = date;
        const campaign_id = parseInt(campaign.id);
        const isAnonymous = anonymousDonation ? 'yes' : 'no';
  
        // Crea un objeto con los datos de la donación
        const donationData = {
            quantity,
            description,
            pickupDateTime,
            user_id: userId,  
            campaign_id,
            isAnonymous,
            status: "DONADO",
        };
  
        
        const donationRef = await addDoc(
          collection(db, "donations"),
          donationData
        );
  
        
        setUploading(false);

        console.log("UserId before navigation: ", userId);
  
        Alert.alert(
            "¡Donación completada!",
            "Tu donación se ha registrado con éxito.",
        [
            {
                text: "OK",

                
                onPress: () => navigation.navigate('ProfileScreen', {userId: userId}) 
            }
        ]
        );
        
        console.log("Donation registered!");
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <SafeAreaView style={DonationScreenStyle.safeAreaView}>
      <View style={DonationScreenStyle.mainView}>
        <Text style={DonationScreenStyle.mainTitle}>{campaign.campaignName}</Text>

        <View style={DonationScreenStyle.switchContainer}>
          <Text style={DonationScreenStyle.switchText}>Donar dinero?</Text>
          <Switch
            style={DonationScreenStyle.switch}
            value={donateItems}
            onValueChange={(value) => setDonateItems(value)}
          />
        </View>

        {donateItems ? (
          <View style={DonationScreenStyle.inputContainer}>
            <Text style={DonationScreenStyle.inputLabel}>Cantidad de DINERO:</Text>
            <TextInput
              style={DonationScreenStyle.input}
              value={itemQuantity.toString()}
              onChangeText={(text) => setItemQuantity(text)}
              keyboardType="numeric"
            />
          </View>
        ) : (
          <View style={DonationScreenStyle.inputContainer}>
            <Text style={DonationScreenStyle.inputLabel}>Cantidad de ITEMS:</Text>
            <TextInput
              style={DonationScreenStyle.input}
              value={donationAmount.toString()}
              onChangeText={(text) => setDonationAmount(text)}
              keyboardType="numeric"
            />
          </View>
        )}

        <View style={DonationScreenStyle.inputContainer}>
          <Text style={DonationScreenStyle.inputLabel}>Descripción de la donación:</Text>
          <TextInput
            style={DonationScreenStyle.input}
            value={donationDescription}
            onChangeText={(text) => setDonationDescription(text)}
          />
        </View>

        <View style={DonationScreenStyle.switchContainer}>
          <Text style={DonationScreenStyle.switchText}>¿Desea donar de forma anónima?</Text>
          <Switch
            style={DonationScreenStyle.switch}
            value={anonymousDonation}
            onValueChange={(value) => setAnonymousDonation(value)}
          />
        </View>

        <View style={DonationScreenStyle.datePickerContainer}>
          <Text style={DonationScreenStyle.datePickerText}>Fecha para recoleccion: </Text>
            <View>
              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <Text>Seleccione una fecha...</Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
              )}
            </View>
        </View>

        <TouchableOpacity
          style={DonationScreenStyle.donationButton}
          onPress={handleDonation}
        >
          <Text style={DonationScreenStyle.donationButtonText}>Completar</Text>
        </TouchableOpacity>
      </View>
      {uploading && (
        <View style={DonationScreenStyle.uploadContainer}>
          <Progress.Circle size={50} indeterminate={true} color={"white"} />
          <Text style={DonationScreenStyle.uploadingText}>Subiendo donación...</Text>
        </View>
      )}
    </SafeAreaView>
  );
};



export default DonationScreen;
