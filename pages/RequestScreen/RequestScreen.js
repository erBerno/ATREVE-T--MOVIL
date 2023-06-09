import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import RequestCard from '../../components/RequestCard';
import RequestScreenStyle from './RequestScreenStyle/RequestScreenStyle';
import Footer from '../../components/Footer';
import  db  from '../../services/FirebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";

const RequestScreen = (props) => {
  const [campaigns, setCampaigns] = useState([]);
  const [type, setType] = useState(true);
  const [userId, setUserId] = useState(null);

  console.log(props.route.params);

  console.log('Campaigns: ', campaigns);

  useEffect(() => {
    const fetchCampaigns = async () => {
      if (props.route.params && props.route.params.user) {
        setUserId(props.route.params.user.id);
        console.log('ID DE USUARIO: ', userId);
      }
      try {
        const q = query(
          collection(db, "campaigns"),
          where("status", "==", type ? 'active' : 'closed')
        );

        const querySnapshot = await getDocs(q);
        const campaignList = [];
        querySnapshot.forEach((doc) => {
          const campaign = doc.data();
          campaign.id = doc.id;
          campaignList.push(campaign);
        });
        setCampaigns(
          querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchCampaigns();
  }, [type]);
  

  return (
    <View style={RequestScreenStyle.container}>
      <Text style={RequestScreenStyle.title}>Peticiones del Asilo</Text>

      <View style={RequestScreenStyle.buttonContainer}>
        <Button
          title="Activas"
          onPress={() => setType(true)}
          color={type ? '#6B7280' : '#97978D'}
        />
        <Button
          title="Cerradas"
          onPress={() => setType(false)}
          color={type ? '#97978D' : '#6B7280'}
        />
      </View>

      
      
      
      <ScrollView style={RequestScreenStyle.scrollContainer}>
        {campaigns.map((campaign, index) => (
          <RequestCard key={index} title={campaign.campaignName} description={campaign.description} onPress={() => {props.navigation.navigate('InformationScreen', {campaign: campaign, userId: userId})}} />
        ))}
      </ScrollView>
      
    
      
      <Footer userId={userId} />
    </View>
  );
};

export default RequestScreen;
