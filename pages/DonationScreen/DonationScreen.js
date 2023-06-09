import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Switch, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { addDoc, collection } from "firebase/firestore";
import db from "../../services/FirebaseConfig";
import * as Progress from "react-native-progress";

const DonationScreen = (props) => {
  
    const { campaign, userId } = props.route.params;

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
            user_id: userId,  // Aquí usamos el userId
            campaign_id,
            isAnonymous,
            status: "DONADO",
        };
  
        // Sube los datos a Firestore y obtén la referencia de la donación
        const donationRef = await addDoc(
          collection(db, "donations"),
          donationData
        );
  
        // Oculta el indicador de progreso
        setUploading(false);
  
        // Navega a la ventana DonationCompleteScreen
        console.log("Donation registered!");
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.mainView}>
        <Text style={styles.mainTitle}>{campaign.name}</Text>

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Donar dinero?</Text>
          <Switch
            style={styles.switch}
            value={donateItems}
            onValueChange={(value) => setDonateItems(value)}
          />
        </View>

        {donateItems ? (
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Cantidad de DINERO:</Text>
            <TextInput
              style={styles.input}
              value={itemQuantity.toString()}
              onChangeText={(text) => setItemQuantity(text)}
              keyboardType="numeric"
            />
          </View>
        ) : (
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Cantidad de ITEMS:</Text>
            <TextInput
              style={styles.input}
              value={donationAmount.toString()}
              onChangeText={(text) => setDonationAmount(text)}
              keyboardType="numeric"
            />
          </View>
        )}

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Descripción de la donación:</Text>
          <TextInput
            style={styles.input}
            value={donationDescription}
            onChangeText={(text) => setDonationDescription(text)}
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>¿Desea donar de forma anónima?</Text>
          <Switch
            style={styles.switch}
            value={anonymousDonation}
            onValueChange={(value) => setAnonymousDonation(value)}
          />
        </View>

        <View style={styles.datePickerContainer}>
          <Text style={styles.datePickerText}>Fecha para recoleccion: </Text>
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
          style={styles.donationButton}
          onPress={handleDonation}
        >
          <Text style={styles.donationButtonText}>Completar</Text>
        </TouchableOpacity>
      </View>
      {uploading && (
        <View style={styles.uploadContainer}>
          <Progress.Circle size={50} indeterminate={true} color={"white"} />
          <Text style={styles.uploadingText}>Subiendo donación...</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'primary', //replace with your color
    alignItems: 'center',
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black', //replace with your color
    marginTop: 20,
    marginBottom: 20,
  },
  switchContainer: {
    marginBottom: 10,
    width: 200, //replace with your dimension
  },
  switchText: {
    color: 'black', //replace with your color
    marginBottom: 5,
  },
  switch: {
    transform: [{scaleX: 0.75}, {scaleY: 0.75}], //adjust size as per your need
  },
  inputContainer: {
    marginBottom: 10,
    width: 200, //replace with your dimension
  },
  inputLabel: {
    color: 'black', //replace with your color
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white', //replace with your color
    borderRadius: 4, //replace with your radius
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    width: 200, //replace with your dimension
  },
  mapText: {
    color: 'black', //replace with your color
    marginBottom: 10,
    width: 200, //replace with your dimension
  },
  map: {
    width: 200, //replace with your dimension
    height: 150, //replace with your dimension
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200, //replace with your dimension
  },
  datePickerText: {
    color: 'black', //replace with your color
  },
  donationButton: {
    backgroundColor: 'black', //replace with your color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50, //replace with your radius
    width: 100, //replace with your dimension
    height: 50, //replace with your dimension
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  donationButtonText: {
    color: 'white', //replace with your color
    fontSize: 20,
    fontWeight: 'bold',
  },
  uploadContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadingText: {
    color: 'black', //replace with your color
  },
});

export default DonationScreen;
