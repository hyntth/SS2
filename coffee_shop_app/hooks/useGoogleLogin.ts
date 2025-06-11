import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useEffect } from "react";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { router } from "expo-router";

WebBrowser.maybeCompleteAuthSession();

export const useGoogleLogin = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "286391023834-u34godjkdffpm5bokip1dpftuvg5mkpa.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((userCred) => {
          console.log("Đăng nhập Google thành công:", userCred.user.email);
          router.replace("/(tabs)/home"); // Chuyển hướng đến trang home sau khi đăng nhập thành công
          // TODO: Chuyển hướng sang home
        })
        .catch((err) => {
          console.error("Lỗi đăng nhập Google:", err);
        });
    }
  }, [response]);

  return { promptAsync };
};
