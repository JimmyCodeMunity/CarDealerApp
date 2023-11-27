import { StyleSheet, Text, View, Image,SafeAreaView, TouchableOpacity, TextInput,KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const RegisterScreen = ({ navigation }) => {
    return (
        <SafeAreaView className="flex-1 justify-center items-center bg-slate-100">
            {/* <Image source={require('../assets/logbg.jpg')} className="flex-1 w-full h-full absolute" blurRadius={11}/> */}

            <KeyboardAvoidingView behavior='padding' className="justify-center items-center">
                
                <View className="w-full">
                    <Image source={require('../assets/logolight.png')} className="px-5 h-24 w-32" />
                </View>
                <Text className="text-slate-500 font-bold text-3xl mb-3">Kai & Karo</Text>
                <Text className="text-xl text-black font-bold">Create Account</Text>

                <TextInput placeholder="Username"
                    placeholderTextColor={'gray'}
                    className="px-5 border border-black rounded-3xl h-10 w-80 mt-6"
                />
                <TextInput placeholder="enter email"
                    placeholderTextColor={'gray'}
                    className="px-5 border border-black rounded-3xl h-10 w-80 mt-6"
                />
                <TextInput placeholder="enter Phone"
                keyboardType="numeric"
                    placeholderTextColor={'gray'}
                    className="px-5 border border-black rounded-3xl h-10 w-80 mt-6"
                />
                <TextInput secureTextEntry
                    placeholder="enter password"
                    placeholderTextColor={'gray'}
                    className="px-5 border border-black rounded-3xl h-10 w-80 mt-6"
                />
                
                <TouchableOpacity className="bg-black h-12 mb-5 w-40 rounded-xl justify-center items-center mt-5" onPress={() => navigation.navigate('Home')}>
                    <Text className="font-bold text-white text-xl">Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Text className="text-slate-400 space-y-4" >Back to Login</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})