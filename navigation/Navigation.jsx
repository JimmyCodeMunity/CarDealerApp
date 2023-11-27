import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import OnBoardingScreen from '../screens/OnBoardingScreen'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import BrandView from '../screens/BrandView'
import SettingScreen from '../screens/SettingScreen'
import SearchScreen from '../screens/SearchScreen'
import ViewScreen from '../screens/ViewScreen'


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="OnBoard" component={OnBoardingScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                <Stack.Screen name="BrandView" component={BrandView} options={{ headerShown: false }} />
                <Stack.Screen name="Settings" component={SettingScreen} options={{ headerShown: false,presentation:'modal' }} />
                <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ViewCar" component={ViewScreen} options={{ headerShown: false,presentation:'modal' }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})