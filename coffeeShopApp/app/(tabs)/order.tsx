import { Text, View, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import Toast from 'react-native-root-toast';
import PageHeader from '@/components/PageHeader';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ProductList from '@/components/CartProductList';

const Order = () => {
  // Mock static product data
  const products = [
    {
      name: "Cappuccino",
      price: 4.99,
    },
    {
      name: "Latte",
      price: 3.99,
    },
  ];

  // Mock static cart items
  const cartItems = {
    "Cappuccino": 2,
    "Latte": 1,
  };

  // Mock total price
  const totalPrice = 13.97; // 2 * 4.99 + 1 * 3.99

  const orderNow = () => {
    Toast.show('Order placed successfully!', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
    });
    router.push('/thankyou');
  };

  return (
    <GestureHandlerRootView className='bg-[#F9F9F9] w-full h-full'>
      <StatusBar backgroundColor="white" />
      <PageHeader title="Order" showHeaderRight={false} bgColor='#F9F9F9' />
      <View className='h-full flex-col justify-between'>
        <View className='h-[75%]'>
          <ProductList
            products={products}
            quantities={cartItems}
            setQuantities={() => {}} // Mock empty function
            totalPrice={totalPrice}
          />
        </View>
        <View className='bg-white rounded-tl-3xl rounded-tr-3xl px-7 pt-3 pb-6'>
          <View className='flex-row justify-between items-center'>
            <View className='flex-row items-center'>
              <Ionicons name="wallet-outline" size={24} color="#C67C4E" />
              <View>
                <Text className="text-[#242424] text-base font-[Sora-SemiBold] pb-1 ml-3">
                  Cash/Wallet
                </Text>
                <Text className="text-app_orange_color text-sm font-[Sora-SemiBold] ml-3">
                  $ {totalPrice === 0 ? 0 : totalPrice + 1}
                </Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
          </View>
          <TouchableOpacity
            className={`${totalPrice === 0 ? 'bg-[#EDEDED]' : 'bg-app_orange_color'} w-full rounded-2xl items-center justify-center mt-6 py-3`}
            disabled={totalPrice === 0}
            onPress={orderNow}
          >
            <Text className="text-xl color-white font-[Sora-Regular]">Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default Order;