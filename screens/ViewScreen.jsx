import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import * as Icon from 'react-native-feather'
import { urlFor } from '../sanity';
import Modal from 'react-native-modal';
import { handleCall,handleWhatsapp } from '../components/BookActions';


//dimensions
const { height, width } = Dimensions.get("window");

const ViewScreen = ({ navigation, route }) => {
    const { carname, carprice, engine, carimage, year, brandname, available, power, transmission, horsepower, backimage, frontimage, inimage, dashimage, drive, aspiration, acceleration, fuel } = route.params;
    const [image, setImage] = useState(carimage);
    const [isModalVisible, setIsModalVisible] = useState(false);

    //hide and display modal
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };



    return (
        <SafeAreaView className="flex-1 bg-white">
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="absolute bg-black justify-center items-center rounded-full h-12 w-12" style={{ top: 15, right: 20, zIndex: 3 }}>
                <Icon.XCircle size={24} color={"white"} />
            </TouchableOpacity>
            <ScrollView className="h-full">

                <Image
                    source={{ uri: urlFor(image).url() }}
                    className="w-full rounded-b-3xl"
                    style={{ height: height * 0.45 }}
                />
                <View className="">
                    <ScrollView className="h-full" vertical={true} showsVerticalScrollIndicator={false}>
                        <View className="mt-5">
                            <Text className="text-slate-900 font-bold text-3xl px-4">{carname}</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View className="mx-3 flex-row justify-between m-3">
                                    <TouchableOpacity className="mx-3" onPress={() => setImage(carimage)}>
                                        <Image className="h-20 w-20 rounded-xl"
                                            source={{ uri: urlFor(carimage).url() }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity className="mx-3" onPress={() => setImage(frontimage)}>
                                        <Image className="h-20 w-20 rounded-xl"
                                            source={{ uri: urlFor(frontimage).url() }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity className="mx-3" onPress={() => setImage(backimage)}>
                                        <Image className="h-20 w-20 rounded-xl"
                                            source={{ uri: urlFor(backimage).url() }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity className="mx-3" onPress={() => setImage(inimage)}>
                                        <Image className="h-20 w-20 rounded-xl"
                                            source={{ uri: urlFor(inimage).url() }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity className="mx-3" onPress={() => setImage(dashimage)}>
                                        <Image className="h-20 w-20 rounded-xl"
                                            source={dashimage}
                                        />
                                    </TouchableOpacity>


                                </View>
                            </ScrollView>




                            <View className="px-4">

                                <View className="flex-row justify-between items-center mt-3">
                                    <Text className="text-slate-800 font-bold text-2xl">Kshs.{carprice}</Text>

                                </View>

                                <Text className="text-slate-500 font-semibold text-xl">Specifications</Text>
                                <View className="bg-black p-2 rounded-2xl mt-3">
                                    <View className="flex-row justify-between px-6 py-2 text-white">
                                        <View className="rounded-2xl justify-center items-center">
                                            <Icon.Activity size={15} color="white" />
                                            <Text className="text-slate-200 text-2xl font-bold">{engine}</Text>
                                            <Text className="text-slate-500">Engine</Text>

                                        </View>
                                        <View className="rounded-2xl justify-center items-center">
                                            <Icon.Wind size={15} color="white" />
                                            <Text className="text-slate-200 text-2xl font-bold">{power}nm</Text>
                                            <Text className="text-slate-500">Torque</Text>
                                        </View>
                                        <View className="justify-center items-center">
                                            <Icon.Watch size={15} color="white" />
                                            <Text className="text-slate-200 text-2xl font-bold">{acceleration}s</Text>
                                            <Text className="text-slate-500">Acceleration</Text>
                                        </View>

                                    </View>


                                    <View className="flex-row justify-between px-6 text-white">
                                        <View className="rounded-2xl justify-center items-center">
                                            <Icon.Sliders size={15} color="white" />
                                            <Text className="text-slate-200 text-2xl font-bold">{transmission}</Text>
                                            <Text className="text-slate-500">Transmission</Text>

                                        </View>
                                        <View className="rounded-2xl justify-center items-center">
                                            <Icon.Circle size={15} color="white" />
                                            <Text className="text-slate-200 text-2xl font-bold">{drive}</Text>
                                            <Text className="text-slate-500">Drive</Text>
                                        </View>
                                        <View className="justify-center items-center">
                                            <Icon.Zap size={15} color="white" />
                                            <Text className="text-slate-200 text-2xl font-bold">{horsepower}</Text>
                                            <Text className="text-slate-500">HorsePower</Text>
                                        </View>

                                    </View>
                                </View>





                                <View className="flex-row justify-between items-center mt-3">
                                    <Text className="text-slate-800 font-bold text-xl">Brand:</Text>
                                    <Text className="text-slate-500 font-semibold text-md">{brandname}</Text>

                                </View>
                                <View className="flex-row justify-between items-center my-1">
                                    <Text className="text-slate-800 font-bold text-xl">Aspiration:</Text>
                                    <Text className="text-slate-500 font-semibold text-md">{aspiration}</Text>

                                </View>
                                <View className="flex-row justify-between items-center my-1">
                                    <Text className="text-slate-800 font-bold text-xl">Availability:</Text>
                                    <Text className="text-slate-500 font-semibold text-md">{available}</Text>

                                </View>
                                <View className="flex-row justify-between items-center my-1">
                                    <Text className="text-slate-800 font-bold text-xl">Year of Manufacture:</Text>
                                    <Text className="text-slate-500 font-semibold text-md">{year}</Text>

                                </View>


                                <View className="w-full items-center justify-center my-5">
                                    <TouchableOpacity className="bg-black rounded-2xl justify-center items-center h-12 w-60"
                                        onPress={() => setIsModalVisible(true)}
                                    >
                                        <Text className="text-slate-200 font-bold text-xl">Book Car</Text>
                                    </TouchableOpacity>
                                </View>



                            </View>


                            <View style={{ flex: 1 }}>



                            </View>




                        </View>

                    </ScrollView>
                </View>
            </ScrollView>



            <Modal
                animationType="slide" transparent={true}
                isVisible={isModalVisible}
                onBackdropPress={() => setIsModalVisible(false)}
                style={styles.modalContainer}
            >
                <View
                    style={[
                        styles.bottomSheetContainer2,
                        { height: height * 0.35 },
                    ]}
                >
                    <View className="bg-white w-full">
                        <View className="px-5">
                            <View className="justify-center items-center my-2">
                                <TouchableOpacity
                                onPress={handleCall}
                                className="bg-black h-12 w-80 rounded-lg flex-row justify-center items-center">
                                    <Icon.PhoneCall size={20} color="white" />
                                    <Text className="text-slate-200 px-2">Call</Text>
                                </TouchableOpacity>
                            </View>
                            <View className="justify-center items-center my-2">
                                <TouchableOpacity
                                onPress={handleWhatsapp}
                                className="bg-black h-12 w-80 rounded-lg justify-center items-center flex-row">
                                    <Icon.MessageCircle size={20} color="white" />
                                    <Text className="text-slate-200 px-2">Send Message</Text>
                                </TouchableOpacity>
                            </View>
                            <View className="justify-center items-center my-2">
                                <TouchableOpacity
                                onPress={()=>setIsModalVisible(false)}
                                className="bg-slate-500 h-12 w-80 rounded-lg justify-center items-center flex-row">
                                    
                                    <Text className="text-slate-900 font-semibold text-xl">Cancel</Text>
                                </TouchableOpacity>
                            </View>

                            
                        </View>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    )
}

export default ViewScreen

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: "flex-end",
        margin: 0,
        height: "50%",
    },
    bottomSheetContainer2: {
        backgroundColor: "white",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowRadius: 5,
        elevation: 5,
    },
})