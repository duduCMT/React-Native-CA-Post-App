import { Slot } from "expo-router";
import { StatusBar, View } from "react-native";
import * as SplashScreen from 'expo-splash-screen';

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto"
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontsError] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);


  if(!fontsLoaded && !fontsLoaded) {
    return null;
  }
  
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Slot />
    </View>
  );
};