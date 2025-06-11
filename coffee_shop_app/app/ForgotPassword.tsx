import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { Mail, ShieldCheck, Lock, ArrowLeft } from "lucide-react-native";
import { router } from "expo-router";
import { resetPassword, checkUserExists } from "../services/authService";

export default function ForgotPassword() {
  const [method, setMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState(1); // 1: Chọn phương thức, 2: Nhập mật khẩu mới

  const handleNext = async () => {
    if (method === "email" && !email) {
      setError("Please enter your email address.");
      return;
    }
    const userExists = await checkUserExists(email);
    if (userExists) {
      setError("");
      setStep(2); // Chuyển sang bước nhập mật khẩu mới
    } else {
      setError("Email not found. Please check and try again.");
    }
  };

  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    const success = await resetPassword(email, newPassword);
    if (success) {
      setError("");
      router.push("/login"); // Quay lại màn hình login sau khi thành công
    } else {
      setError("Failed to reset password. Please try again.");
    }
  };

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

      {step === 1 && (
        <>
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

         

          {method === "email" && (
            <View className="mt-4">
              <Text className="text-base font-semibold text-black mb-2">Email Address</Text>
              <View className="flex-row items-center border border-[#C67C4E] bg-[#FBE9DD] rounded-2xl px-4 py-3">
                <Mail size={20} color="#C67C4E" />
                <TextInput
                  placeholder="Enter your email..."
                  keyboardType="email-address"
                  className="flex-1 ml-2 text-black"
                  placeholderTextColor="#A0A0A0"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
            </View>
          )}

          <TouchableOpacity
            onPress={handleNext}
            className="mt-10 bg-[#C67C4E] py-4 rounded-2xl items-center flex-row justify-center"
          >
            <Text className="text-white text-base font-semibold mr-2">Reset Password</Text>
            <Text className="text-white text-base">→</Text>
          </TouchableOpacity>
        </>
      )}

      {step === 2 && (
        <>
          <View className="mt-4">
            <Text className="text-base font-semibold text-black mb-2">New Password</Text>
            <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-3">
              <Lock size={20} color="#777" />
              <TextInput
                placeholder="Enter new password..."
                secureTextEntry={true}
                className="flex-1 ml-2 text-black"
                placeholderTextColor="#A0A0A0"
                value={newPassword}
                onChangeText={setNewPassword}
              />
            </View>
          </View>

          <View className="mt-6">
            <Text className="text-base font-semibold text-black mb-2">Confirm Password</Text>
            <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-3">
              <Lock size={20} color="#777" />
              <TextInput
                placeholder="Confirm new password..."
                secureTextEntry={true}
                className="flex-1 ml-2 text-black"
                placeholderTextColor="#A0A0A0"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={handleResetPassword}
            className="mt-10 bg-[#C67C4E] py-4 rounded-2xl items-center flex-row justify-center"
          >
            <Text className="text-white text-base font-semibold mr-2">Reset Password</Text>
            <Text className="text-white text-base">→</Text>
          </TouchableOpacity>
        </>
      )}

      {error ? (
        <View className="flex-row items-center bg-red-100 border border-red-500 rounded-lg px-4 py-2 mt-4">
          <Text className="text-red-500 text-sm">{error}</Text>
        </View>
      ) : null}
    </View>
  );
}