import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView,Linking, Dimensions } from 'react-native'
import React, { useState } from 'react'

export const handleCall = () => {
    const phoneNumber = 112163919;
    const countryCode = "+254";


    // Check if the phone number is valid
    if (phoneNumber) {

      const fullPhoneNumber = `${countryCode}${phoneNumber}`;
      // Construct the phone call URL
      const phoneURL = `tel:${fullPhoneNumber}`;

      // Open the phone app with the specified phone number
      Linking.canOpenURL(phoneURL)
        .then((supported) => {
          if (!supported) {
            console.error("Phone calls are not supported on this device");
          } else {
            return Linking.openURL(phoneURL);
          }
        })
        .catch((error) => console.error(`Error opening phone app: ${error}`));
    } else {
      console.error("Phone number is not available");
    }
  }



  //handle whatsapp
  export const handleWhatsapp = () => {
    const phoneNumber = 112163919;
    const countryCode = "+254";
    if (phoneNumber) {
      const fullPhoneNumber = `${countryCode}${phoneNumber}`;
      const phoneURL = `tel:${fullPhoneNumber}`;
      // Construct the WhatsApp chat URL
      const whatsappURL = `https://wa.me/${fullPhoneNumber}`;

      // Open the WhatsApp chat with the specified phone number
      Linking.canOpenURL(whatsappURL)
        .then((supported) => {
          if (!supported) {
            console.error("WhatsApp is not installed on this device");
          } else {
            return Linking.openURL(whatsappURL);
          }
        })
        .catch((error) => console.error(`Error opening WhatsApp chat: ${error}`));
    } else {
      console.error("Phone number is not available");
    }
  }