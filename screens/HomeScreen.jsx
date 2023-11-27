import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import * as Icon from 'react-native-feather';
import Adverts from '../components/Adverts';
import Brands from '../components/Brands';
import Products from '../components/Products';
import Selling from '../components/Selling';
import International from '../components/InternationalStock';
import LottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {
  
  return (
    <SafeAreaView className="flex-1 relative">
      <StatusBar  // Change the background color if needed
        barStyle="light-content"  // Change the text color (light or dark)
      />
      {/* Header starts here */}
      <View className="flex-row justify-between px-5 mt-8">
        <View>
          <Text className="text-slate-700 text-3xl font-bold">
            Kai&Karo
          </Text>
        </View>
        <View className="flex-row space-x-2">
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Icon.Search size={12} color={'black'} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Icon.Menu size={12} color={'black'} />
            </TouchableOpacity>
          </View>

        </View>
      </View>
      {/* Header ends */}

      {/*  Brands you love */}
      <View className="mt-3">
        <Text className="text-slate-500 font-bold text-xl px-5">Brands you love.</Text>

        <Brands nav={navigation} />

      </View>

      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>


        {/* Cards */}
        <Adverts />

        {/* cards end */}

        {/* Selling */}
        <Selling/>


        {/* International Stock */}
        <International/>

        
        


      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})