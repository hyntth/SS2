import { View, Text, TouchableOpacity } from "react-native";
import { Mail, ShieldCheck, ArrowLeft } from "lucide-react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function ForgotPassword() {
  const [method, setMethod] = useState("email");

  return (
    <View className="flex-1 bg-white px-6 pt-16">
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} className="mb-6">
        <ArrowLeft size={28} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-3xl font-bold text-black mb-2">Forgot Password</Text>
      <Text className="text-base text-gray-500 mb-6">
        Select which methods you'd like to reset.
      </Text>

      {/* Method: Email */}
      <TouchableOpacity
        onPress={() => setMethod("email")}
        className={`flex-row items-center p-4 rounded-2xl mb-4 border 
          ${method === "email" ? "border-[#C67C4E] bg-[#FBE9DD]" : "border-gray-200 bg-gray-100"}`}
      >
        <View className={`w-10 h-10 rounded-full items-center justify-center mr-4 
          ${method === "email" ? "bg-[#C67C4E]" : "bg-white"}`}>
          <Mail size={20} color={method === "email" ? "white" : "#C67C4E"} />
        </View>
        <View>
          <Text className="text-base font-semibold text-black">Email Address</Text>
          <Text className="text-sm text-gray-500">Send via email address securely.</Text>
        </View>
      </TouchableOpacity>

      {/* Method: Google Authenticator */}
      <TouchableOpacity
        onPress={() => setMethod("authenticator")}
        className={`flex-row items-center p-4 rounded-2xl border 
          ${method === "authenticator" ? "border-[#C67C4E] bg-[#FBE9DD]" : "border-gray-200 bg-gray-100"}`}
      >
        <View className={`w-10 h-10 rounded-full items-center justify-center mr-4 
          ${method === "authenticator" ? "bg-[#C67C4E]" : "bg-white"}`}>
          <ShieldCheck size={20} color={method === "authenticator" ? "white" : "#C67C4E"} />
        </View>
        <View>
          <Text className="text-base font-semibold text-black">Google Authenticator</Text>
          <Text className="text-sm text-gray-500">Send via authenticator securely.</Text>
        </View>
      </TouchableOpacity>

      {/* Reset Button */}
      <TouchableOpacity
       
        className="mt-10 bg-[#C67C4E] py-4 rounded-2xl items-center flex-row justify-center"
      >
        <Text className="text-white text-base font-semibold mr-2">Reset Password</Text>
        <Text className="text-white text-base">→</Text>
      </TouchableOpacity>
    </View>
  );
}
