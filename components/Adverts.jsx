import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React from 'react'

const data = [
  {
    id:1,
    bg:'bg-slate-500 w-60 h-40 rounded-3xl mr-5',
    image:require('../assets/whiterange.png'),
    content:'30% Offer!!'
  },
  {
    id:2,
    bg:'bg-purple-300 w-60 h-40 rounded-3xl mr-5',
    image:require('../assets/dmax.png'),
    content:'30% Offer!!'
  },
  {
    id:3,
    bg:'bg-green-300 w-60 h-40 rounded-3xl mr-5',
    image:require('../assets/benz.png'),
    content:'Order with us.'
  }
]

const Adverts = () => {
  return (
    <View className="h-60">
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{padding:20}}>
      {data.map((item)=>{
        return(
          <View className={item.bg}>
            <Text className="text-slate-800 font-bold absolute text-2xl" style={{ right:20,top:30 }}>{item.content}</Text>
          <Image 
          style={{ left:0,bottom:-45 ,width:200}}
          source={item.image}
          className="h-40 absolute"
          />
        </View>

        )
      })}
        
  

      </ScrollView>
      </View>
  )
}

export default Adverts

const styles = StyleSheet.create({})