import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { query, where, getDocs, collection } from "firebase/firestore";
import db from "../../services/FirebaseConfig";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from "react-native-gesture-handler";

const ProfileScreen = (props) => {
    const userId = props.route.params.userId;
    console.log('ID DE USUARIO: ', userId);
    const [donations, setDonations] = useState([]);
    const navigation = useNavigation();


    // console.log('ID DEsdasda+ USUARIO: ', userId);
    
    useEffect(() => {
        const fetchDonations = async () => {
            if (userId) {
                try {
                    console.log(userId.userId);
                    const q = query(collection(db, "donations"), where("user_id", "==", userId));
                    const querySnapshot = await getDocs(q);
                    const donationsData = [];
                    querySnapshot.forEach((doc) => {
                        donationsData.push({id: doc.id, ...doc.data()});
                    });
                    setDonations(donationsData);
                    console.log('DONACIONES: ', donationsData);
                } catch (error) {
                    console.error("Error fetching donations: ", error);
                }
            }
        };
        fetchDonations();
    }, [userId]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('RequestScreen')}>
                    <Icon name="arrow-left" size={24} />
                </TouchableOpacity>
                <Text style={styles.title}>Mis Donaciones</Text>
            </View>


            <ScrollView style={styles.donationsContainer}>
                {donations.map((donation, index) => (
                    <View key={index} style={styles.donationItem}>
                        <Text style={styles.donationText}>Campaña: {donation.campaign_id}</Text>
                        <Text style={styles.donationText}>Cantidad: {donation.quantity}</Text>
                        <Text style={styles.donationText}>Descripcion: {donation.description}</Text>
                        <Text style={styles.donationText}>Fecha de Recojo: {new Date(donation.pickupDateTime?.seconds * 1000).toLocaleDateString()}</Text>
                        <Text style={styles.donationText}>Esatdo: {donation.status}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#FFF",
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    donationsContainer: {
        marginTop: 20,
    },
    donationItem: {
        padding: 16,
        backgroundColor: "#EEE",
        borderRadius: 5,
        marginBottom: 10,
    },
    donationText: {
        fontSize: 14,
        marginBottom: 5,
    },
});

export default ProfileScreen;
