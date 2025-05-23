import { Text, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import Toast from 'react-native-root-toast';
import PageHeader from '@/components/PageHeader';
import DescriptionSection from '@/components/DescriptionSection';
import SizesSection from '@/components/SizesSection';
import DetailsHeader from '@/components/DetailsHeader';

const DetailsPage = () => {
  // Mock static product data
  const product = {
    name: "Cappuccino",
    image: require("../assets/images/caffe_mocha.png"), 
    type: "Coffee",
    description: "A rich and creamy cappuccino made with espresso and steamed milk.",
    price: "4.99",
    rating: "4.5",
  };

  const buyNow = () => {
    Toast.show(`${product.name} added to cart`, {
      duration: Toast.durations.SHORT,
    });
    router.back();
  };

  return (
    <GestureHandlerRootView className='bg-[#F9F9F9] w-full h-full'>
      <StatusBar backgroundColor="white" />
      <PageHeader title="Detail" showHeaderRight={true} bgColor='#F9F9F9' />
      
      <View className='h-full flex-col justify-between'>
        <ScrollView>
          <View className='mx-5 items-center'>
            <DetailsHeader
              image={product.image} // Updated to pass image instead of image_url
              name={product.name}
              type={product.type}
              rating={Number(product.rating)}
            />
            <DescriptionSection description={product.description} />
            <SizesSection />
          </View>
        </ScrollView>
        
        <View className='flex-row justify-between bg-white rounded-tl-3xl rounded-tr-3xl px-6 pt-3 pb-6'>
          <View>
            <Text className="text-[#A2A2A2] text-base font-[Sora-Regular] pb-3">Price</Text>
            <Text className="text-app_orange_color text-2xl font-[Sora-SemiBold]">$ {product.price}</Text>
          </View>
          <TouchableOpacity
            className="bg-app_orange_color w-[70%] rounded-3xl items-center justify-center"
            onPress={buyNow}
          >
            <Text className="text-xl color-white font-[Sora-Regular]">Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default DetailsPage;