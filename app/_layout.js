import {Stack} from 'expo-router';
import React, { useEffect } from 'react';

// import { Stack } from "expo-router";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

const Layout = () => {
    useEffect(() => {
        async function loadFonts() {
          await Font.loadAsync({
            'DMBold': require("../assets/fonts/DMSans-Bold.ttf"),
    'DMMedium': require("../assets/fonts/DMSans-Medium.ttf"),
    'DMRegular': require("../assets/fonts/DMSans-Regular.ttf"),
            // Add other custom fonts if needed
          });
        }
    
        loadFonts();
      }, []);

  return(
    <Stack/>
    )
}

export default Layout;