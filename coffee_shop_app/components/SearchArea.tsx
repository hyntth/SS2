import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

const SearchArea = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery); // Gửi giá trị tìm kiếm lên Home
    }
  };

  const handleClear = () => {
    setSearchQuery(""); // Xóa nội dung tìm kiếm
    onSearch(""); // Quay lại danh sách ban đầu
  };

  return (
    <View className="w-full items-center bg-[#222222] pb-6">
      <View className="flex w-[90%] pt-8">
        <Text className="text-[#A2A2A2] text-sm font-[Sora-Regular]">
          Location
        </Text>
        <Text className="text-white text-base font-[Sora-Regular]">
          Hanu University
        </Text>

        <View className="w-full mt-5 flex-row items-center">
          <View className="flex-row flex-1 items-center h-12 px-4 bg-[#2A2A2A] rounded-l-2xl">
            <AntDesign name="search1" size={20} color="white" />
            <TextInput
              placeholder="Search products..."
              className="flex-1 ml-2 text-white text-base"
              placeholderTextColor="#A0A0A0"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <TouchableOpacity
            className="h-12 w-12 bg-app_orange_color rounded-r-2xl items-center justify-center"
            onPress={handleSearch}
          >
            <AntDesign name="search1" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            className="h-12 w-12 bg-transparent items-center justify-center ml-2"
            onPress={handleClear}
          >
            <Entypo name="sound-mix" size={20} color="#C67C4E" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SearchArea;