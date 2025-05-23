import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react-native";
import { router } from "expo-router";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <View className="flex-1 bg-white px-6 pt-20">
      {/* Logo + Title */}
      <View className="items-center mb-8">
        <Image
          source={require("../assets/images/cup.png")}
          className="w-20 h-20 mb-4"
          resizeMode="contain"
        />
        <Text className="text-3xl font-bold text-black">Sign In</Text>
        <Text className="text-gray-500 mt-1 text-center">
          Start your coffee journey with us.
        </Text>
      </View>

      {/* Email */}
      <View className="mt-4">
        <Text className="text-base font-semibold text-black mb-2">Email Address</Text>
        <View className="flex-row items-center border border-[#C67C4E] bg-[#FBE9DD] rounded-2xl px-4 py-3">
          <Mail size={20} color="#C67C4E" />
          <TextInput
            placeholder="ntthuyn@gmail.com"
            keyboardType="email-address"
            className="flex-1 ml-2 text-black"
            placeholderTextColor="#A0A0A0"
          />
        </View>
      </View>

      {/* Password */}
      <View className="mt-6">
        <Text className="text-base font-semibold text-black mb-2">Password</Text>
        <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-3">
          <Lock size={20} color="#777" />
          <TextInput
            placeholder="Enter your password..."
            secureTextEntry={!showPassword}
            className="flex-1 ml-2 text-black"
            placeholderTextColor="#A0A0A0"
          />
          <TouchableOpacity onPress={togglePassword}>
            {showPassword ? (
              <EyeOff size={20} color="#777" />
            ) : (
              <Eye size={20} color="#777" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Sign In button */}
      <TouchableOpacity
        onPress={() => router.replace("/(tabs)/home")}
        className="bg-[#C67C4E] mt-8 py-4 rounded-2xl items-center flex-row justify-center"
      >
        <Text className="text-white text-lg font-semibold mr-2">Sign In</Text>
        <Text className="text-white text-lg">→</Text>
      </TouchableOpacity>


      {/* Google Sign In */}
      <TouchableOpacity className="bg-gray-100 rounded-full w-12 h-12 items-center justify-center mt-6 self-center">
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png",
          }}
          className="w-6 h-6"
        />
      </TouchableOpacity>

      {/* Footer Text */}
      <View className="items-center mt-6">
        <Text className="text-black">
          Don’t have an account?{" "}
          <Text
            className="text-[#C67C4E] font-semibold"
            onPress={() => router.push("/signup")}
          >
            Sign Up.
          </Text>
        </Text>
        <TouchableOpacity onPress={() => router.push("/ForgotPassword")}>
          <Text className="text-[#C67C4E] mt-2 underline">Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
