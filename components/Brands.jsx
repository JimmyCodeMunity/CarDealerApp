import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { getBrands } from '../api'
import { urlFor } from '../sanity'
import LottieView from 'lottie-react-native'



const Brands = () => {
    const [logo,setLogo] = useState([]);
    const navigation = useNavigation();
    const [loading,setLoading] = useState(true);

    

    //fetch brands
   

    const fetchData = async () => {
        try {
          const data = await getBrands();
          //console.log('got data', data);
          setLogo(data);
          setLoading(false)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);
    return (
        <View>
            {loading?(
                <View className="mt-4 mb-4 items-center flex-row justify-between">
                <TouchableOpacity
                className="rounded-full h-16 mx-3 w-16 justify-center items-center border-spacing-1 border border-slate-900"
                
                >
                    <Text className="text-slate-400">Loading..</Text>
                    </TouchableOpacity>
                
                <TouchableOpacity
                className="rounded-full h-16 mx-3 w-16 justify-center items-center border-spacing-1 border border-slate-900"
                
                >
                    <Text className="text-slate-400">Loading..</Text>
                </TouchableOpacity>
                <TouchableOpacity
                className="rounded-full h-16 mx-3 w-16 justify-center items-center border-spacing-1 border border-slate-900"
                
                >
                    <Text className="text-slate-400">Loading..</Text>
                </TouchableOpacity>
                <TouchableOpacity
                className="rounded-full h-16 mx-3 w-16 justify-center items-center border-spacing-1 border border-slate-900"
                
                >
                    <Text className="text-slate-400">Loading..</Text>
                </TouchableOpacity>
                <TouchableOpacity
                className="rounded-full h-16 mx-3 w-16 justify-center items-center border-spacing-1 border border-slate-900"
                
                >
                    <Text className="text-slate-400">Loading..</Text>
                </TouchableOpacity>
            </View>
            ):(
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ padding:15 }}>
                {logo.map((brand,index) => {
                    return (
                        
                        <View className="mt-4 mb-4 justify-center items-center">
                            <TouchableOpacity 
                            key={brand._id}
                            className="rounded-full h-16 mx-3 w-16 justify-center items-center border-spacing-1 border border-slate-900"
                            onPress={()=>navigation.navigate('BrandView',{
                                brand:brand.name,
                                poster:brand.displayimage,
                                logo:brand.image
                            })}
                            >
                                <Image
                                 className="h-full w-full rounded-full"
                                 source={{ uri: urlFor(brand.logoimage).url() }}
                                 />

                            </TouchableOpacity>
                            <Text className="text-slate-400">{brand.name}</Text>
                        </View>
                    )
                })}
            </ScrollView>

            )}
            
        </View>
    )
}

export default Brands

const styles = StyleSheet.create({})