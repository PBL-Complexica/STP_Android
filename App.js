import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import MainScreen from "./screens/MainScreen";
import GeneralPassScreen from "./screens/GeneralPassScreen";
import StudentPassScreen from "./screens/StudentPassScreen";
import PupilPassScreen from "./screens/PupilPassScreen";
import Settings from "./screens/Settings";
import YourAccount from "./screens/YourAccount";
import DigitalPassScreen from "./screens/DigitalPassScreen";
import LoadingScreen from "./screens/LoadingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins Bold": require("./assets/fonts/poppins_bold.ttf"),
    "Poppins Regular": require("./assets/fonts/poppins_regular.ttf"),
    "Poppins Light": require("./assets/fonts/poppins_light.ttf"),
    "Poppins Semi-Bold": require("./assets/fonts/poppins_semibold.ttf"),
    "Space Mono Bold": require("./assets/fonts/SpaceMono-Bold.ttf"),
    "Space Mono Regular": require("./assets/fonts/SpaceMono-Regular.ttf"),

  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GeneralPassScreen"
          component={GeneralPassScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StudentPassScreen"
          component={StudentPassScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PupilPassScreen"
          component={PupilPassScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="YourAccount"
          component={YourAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DigitalPassScreen"
          component={DigitalPassScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
