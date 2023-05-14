import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from 'react-native-splash-screen'

const Home = ({navigation}) => {

  useEffect(() => {
    SplashScreen.hide();
  },[])

  
  return (
    <View>
      <View className="w-full h-screen bg-[#94ff2b] flex justify-center items-center">
      <Text className="text-4xl font-bold text-gray-50">MATRIX <Text className="font-bold">SOLVER</Text></Text>
      <Text className="text-base text-gray-80 my-2">Easy matrix solutions</Text>
        <TouchableOpacity className="mt-3"
            activeOpacity={0.8}
            onPress={()=> navigation.navigate('Body')}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 0}} colors={['#94ff2b', '#2dd4dc']} className="py-2 px-5 rounded-2xl">
                <Text className="text-lg font-medium text-gray-50">Continue</Text>
            </LinearGradient>
        </TouchableOpacity>

        
    </View>
    </View>
  )
}

export default Home
