import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'

const SettingScreen = ({navigation}) => {
    return (
        <SafeAreaView className="flex-1">
            <View className="mt-6 px-4">
                <View className="flex-row justify-between items-center">
                <View className="flex-row space-x-2 items-center">
                    <Icon.Settings size={23} color="black" className="space-x-2" />
                    <Text className="text-3xl">Settings</Text>
                </View>
                <View>
                    <TouchableOpacity className="bg-black h-12 w-12 rounded-full items-center justify-center" onPress={()=>navigation.goBack()}>
                        <Icon.XCircle color="white" size={23}/>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SettingScreen

const styles = StyleSheet.create({})