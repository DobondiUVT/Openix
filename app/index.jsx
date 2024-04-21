import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "./components/CustomButton";
import "react-native-gesture-handler";
// import login from "./(auth)/login";
// import * as Google  from "expo-auth-session/providers/google";
// import * as WebBrowser from "expo-web-browser";
// import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// WebBrowser.maybeCompleteAuthSession();

export default function App() {
  //   const [userInfo, setUserInfo] = React.useState();
  //   const [request, response, promptAsync] = Google.useAuthRequest({
  //     androidClientId: "1631064458-5ji83t6f8ibm625e9k4gqr2m8f3s9vsl.apps.googleusercontent.com",
  //   });
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-items-center items-center h-full px-4">
          
          <Image
            source={images.openix}
            className="max-w--[380px] w-full h-[380px]"
            resizeMode="contain"
          />
          
          
          <CustomButton
            title="Continue with Google"
            handlePress={() => router.push("home")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
