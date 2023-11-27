import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, SafeAreaView, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import Products from './Products'
import { useNavigation } from '@react-navigation/native';
import { getCarInfo } from '../api';
import { urlFor } from '../sanity';
import LottieView from 'lottie-react-native';

const { height, width } = Dimensions.get('window');

const Selling = () => {
    const [cars, setCar] = useState([])
    const navigation = useNavigation()
    const [loading,setLoading] = useState(true)

    //use effect
    useEffect(() => {
        fetchCars();
    }, [])

    //get car information
    const fetchCars = async () => {
        try {
            const data = await getCarInfo();
            setCar(data);
            setLoading(false)

            // const transmission = data.map(item=>item.fuel[0].name)
            // console.log(transmission)



        } catch (error) {
            console.log(error)

        }

    }
    return (
        <View className="">
            <View className="justify-between items-center flex-row px-5">
                <View>
                    <Text className="text-slate-500 font-semibold text-xl">Vehicles in Kenya</Text>
                </View>
                <View>
                    <Text className="text-purple-500 font-semibold">View More</Text>
                </View>
            </View>

            {loading ? (
                <View className="h-full w-full bg-white">
                    <LottieView
                        className="justify-center items-center h-32" style={{ width: '80%', }}
                        source={require("../assets/car.json")}
                        autoPlay
                        loop={true}
                        onAnimationFinish={() => {
                            console.log("Animation finished");
                        }}
                    />
                </View>
            ) : (
                <View className="mt-3" style={{ height: height * 0.37 }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ padding: 20 }}
                >
                    {cars.map((car, index) => (
                        <TouchableOpacity
                            className="mx-3 rounded-3xl justify-center items-center bg-slate-300 shadow-lg"
                            key={index}
                            style={{ height: height * 0.3, width: width * 0.5 }}
                            onPress={() => navigation.navigate("ViewCar", {
                                carname: car.name,
                                carprice: car.price,
                                engine: car.engine,
                                carimage: car.mainImage,
                                desc: car.description,
                                backimage: car.backImage,
                                frontimage: car.frontImage,
                                inimage: car.insideImage,
                                dashimage: car.dashImage,
                                year: car.year,
                                brandname: car.brand[0].name,
                                power: car.torque,
                                transmission: car.transmission[0].name,
                                available: car.availability[0].name,
                                drive: car.drive,
                                aspiration: car.aspiration,
                                acceleration: car.acceleration,
                                fuel: car.fuel[0].name,
                                horsepower: car.horsepower,
                            })}
                        >
                            <View>
                                <Image
                                    source={{ uri: urlFor(car.mainImage).url() }}
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

            )}


            
        </View>
    )
}

export default Selling