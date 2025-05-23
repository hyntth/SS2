import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, AlertCircle } from "lucide-react-native";
import { router } from "expo-router";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError("ERROR: Password do not match!");
    } else {
      setError("");
      
    }
  };

  return (
    <View className="flex-1 bg-white px-8 pt-16 items-center">
      <View className="items-center mb-8">
        <Image
          source={require("../assets/images/cup.png")}
          className="w-20 h-20 mb-4"
          resizeMode="contain"
        />
        <Text className="text-2xl font-bold text-gray-900">Sign Up For Free</Text>
        <Text className="text-gray-500 text-sm mt-1 text-center">
          Sign up in 1 minute for free!
        </Text>
      </View>

      <View className="mb-6 w-full">
        <Text className="text-sm font-medium text-gray-900 mb-2 text-left">Email Address</Text>
        <View className="flex-row items-center border border-[#E8A872] rounded-lg px-4 py-3 w-full">
          <Mail size={18} color="#E8A872" />
          <TextInput
            placeholder="Enter your email..."
            keyboardType="email-address"
            placeholderTextColor="#A0A0A0"
            value={email}
            onChangeText={setEmail}
            className="flex-1 ml-3 text-gray-900 text-base"
          />
        </View>
      </View>

      {/* Password Input */}
      <View className="mb-6 w-full">
        <Text className="text-sm font-medium text-gray-900 mb-2 text-left">Password</Text>
        <View className="flex-row items-center border border-[#FF6B6B] rounded-lg px-4 py-3 w-full">
          <Lock size={18} color="#777" />
          <TextInput
            placeholder="***************"
            secureTextEntry={!showPassword}
            placeholderTextColor="#A0A0A0"
            value={password}
            onChangeText={setPassword}
            className="flex-1 ml-3 text-gray-900 text-base"
          />
          <TouchableOpacity onPress={togglePassword}>
            {showPassword ? (
              <EyeOff size={18} color="#777" />
            ) : (
              <Eye size={18} color="#777" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      
      <View className="mb-6 w-full">
        <Text className="text-sm font-medium text-gray-900 mb-2 text-left">Password Confirmation</Text>
        <View className="flex-row items-center border border-gray-300 rounded-lg px-4 py-3 w-full">
          <Lock size={18} color="#777" />
          <TextInput
            placeholder="***************"
            secureTextEntry={!showConfirmPassword}
            placeholderTextColor="#A0A0A0"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            className="flex-1 ml-3 text-gray-900 text-base"
          />
          <TouchableOpacity onPress={toggleConfirmPassword}>
            {showConfirmPassword ? (
              <EyeOff size={18} color="#777" />
            ) : (
              <Eye size={18} color="#777" />
            )}
          </TouchableOpacity>
        </View>
      </View>

     
      {error ? (
        <View className="flex-row items-center bg-[#FF6B6B] bg-opacity-10 border border-[#FF6B6B] rounded-lg px-4 py-2 mb-6 w-full">
          <AlertCircle size={18} color="#FF6B6B" />
          <Text className="text-[#FF6B6B] text-sm ml-2">{error}</Text>
        </View>
      ) : null}

      
      <TouchableOpacity
        onPress={handleSignUp}
        className="bg-[#E8A872] py-4 rounded-lg items-center flex-row justify-center w-full"
      >
        <Text className="text-white text-base font-semibold mr-2">Sign Up</Text>
        <Text className="text-white text-base">→</Text>
      </TouchableOpacity>

     
      <View className="items-center mt-6">
        <Text className="text-gray-900 text-sm">
          Already have an account?{" "}
          <Text
            className="text-[#C57C3E] font-semibold"
            onPress={() => router.push("/login")} 
          >
            Sign In.
          </Text>
        </Text>
      </View>
    </View>
  );
}