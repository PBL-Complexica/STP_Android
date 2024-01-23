import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
  Easing,
} from "react-native";
import { styles } from "../styles/Styles";

export default function LoadingScreen({ navigation }) {

  useEffect(() => {
    // Simulate a delay (replace with actual logic)
    const timeout = setTimeout(() => {
      navigation.navigate("DigitalPassScreen");
    }, 2000); // 2 seconds

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);


  return (
    <SafeAreaView style={styles.container}>
      <>
      {/* Vector at the Top */}
      <View style={styles.vectorContainerTop}>
          <Image source={require("../assets/images/vector1.png")} />
        </View>

        <View style={styles.loadingContainer}>
          {/* Spinner*/}
          <ActivityIndicator size="large" color="#ff4967" />

          {/* Text below the spinner */}
          <Text style={styles.loadingText}>
            Refreshing your digital permit.{"\n"}Please wait.
          </Text>
        </View>

        {/* Vector at the Bottom */}
        <View style={styles.vectorContainerBottom}>
          <Image source={require("../assets/images/vector2.png")} />
        </View>
      </>
    </SafeAreaView>
  );
}
