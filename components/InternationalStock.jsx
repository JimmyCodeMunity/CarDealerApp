import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import Products from './Products'
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const International = () => {
    const navigation = useNavigation()
    return (
        <View className="">
            <View className="justify-between items-center flex-row px-5">
                <View>
                    <Text className="text-slate-500 font-semibold text-xl">International Stock</Text>
                </View>
                <View>
                    <Text className="text-purple-500 font-semibold">View More</Text>
                </View>
            </View>


            <View className="mt-3" style={{ height: height * 0.5 }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ padding: 20 }}
                >
                    {Products.map((car, index) => (
                        <TouchableOpacity
                            className="mx-3 rounded-3xl justify-center items-center bg-slate-300 shadow-lg"
                            key={index}
                            style={{ height: height * 0.3, width: width * 0.5 }}
                            onPress={()=>navigation.navigate("ViewCar",{
                                carname:car.name,
                                carprice:car.price,
                                engine:car.engine,
                                carimage:car.image,
                                description:car.spec,
                                backimage:car.backimage,
                                frontimage:car.frontimage,
                                inimage:car.inimage,
                                dashimage:car.dashimage,
                            })}
                        >
                            <View>
                                <Image
                                    source={car.image}
                                    className="rounded-t-3xl"
                                    style={{ height: height * 0.2, width: width * 0.5 }}
                                />
                            </View>
                            <View className="justify-center items-center" style={{ height: height * 0.1 }}>
                                <Text className="text-slate-800 font-semibold">{car.name}</Text>
                                <Text className="text-slate-500">KES {car.price}</Text>
                                <Text className="text-slate-500">{car.engine}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}

                </ScrollView>
            </View>
        </View>
    )
}

export default International

const styles = StyleSheet.create({})