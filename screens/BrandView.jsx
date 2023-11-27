import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,TextInput, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import { urlFor } from '../sanity';


const { width, height } = Dimensions.get('window');
const BrandView = ({ route, navigation }) => {
    const { brand, poster, logo } = route.params;
    return (
        <SafeAreaView className="flex-1 relative justify-center">
            <View className="px-5 mt-6">
                <Text className="text-slate-700 font-bold text-3xl">Kai&Karo</Text>
                <View className="h-full w-full">
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        vertical={true}
                        className="">


                            <View className="mt-4 mb-3 justify-between flex-row items-center">
                                <View>
                                <TextInput
                                placeholder='enter name,model,engine type'
                                className="w-80 h-10 border border-slate-600 rounded-xl px-4"
                                />
                                </View>
                                <View>
                                    <TouchableOpacity className="justify-center items-center bg-black rounded-3xl h-8 w-8">
                                        <Icon.Search size={20} color={"white"}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        <View
                            style={{ height: height * 0.25 }}
                            className="bg-black mt-4 w-70 rounded-3xl justify-center items-center">
                            <Image
                                className="h-full w-60"
                                source={{uri: urlFor(poster).url()}}
                            />
                            <View className="absolute" style={{ left: 10, bottom: 10 }}>
                                <Text className="text-white font-semibold text-lg">
                                    {brand}
                                </Text>
                            </View>

                        </View>
                    </ScrollView>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default BrandView

const styles = StyleSheet.create({})