import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import BackButton from "../components/BackButton";
import { styles } from "../styles/Styles";

export default function DigitalPassScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  const refreshCode = () => {
    setRefreshing(true);

    // Perform code refresh logic here (e.g., fetching a new QR code)
    // Replace the setTimeout with your actual code refresh logic
    setTimeout(() => {
      setRefreshing(false);
      navigation.navigate("LoadingScreen");
    }, 2000); // Simulating a delay of 2 seconds for code refresh
  };

  return (
    <SafeAreaView style={styles.container}>
      <>
        {/* Vector at the Top */}
        <View style={styles.vectorContainerTop}>
          <Image source={require("../assets/images/vector1.png")} />
        </View>

        <View style={styles.codeHeadeContainer}>
          {/* Header */}
          <Text style={styles.codeHeader}>Your Digital Pass</Text>
          {/* Barcode icon */}
          {/* <Image
            source={require("../assets/images/barcode_icon.png")}
            style={styles.barcodeIcon}
          /> */}
        </View>
        <Text style={styles.codeSubHeader}>
          Scan this QR code when boarding.
        </Text>

        {/* Gray box with rounded corners */}
        <View style={styles.grayBox}>
          {/* Code */}
          <Text style={styles.code}>YourQRCodeHere</Text>
        </View>

        {/* Additional information */}
        <Text style={styles.textPassType}>Monthly Pass</Text>
        <Text style={styles.textValid}>Valid until 13.02.2024</Text>

        {/* Refresh code button */}
        <View style={styles.refreshButtonContainer}>
          <TouchableOpacity style={styles.refreshButton} onPress={refreshCode} disabled={refreshing}>
            <Text style={styles.refreshButtonText}>Refresh Code</Text>
          </TouchableOpacity>
        </View>

        {/* Vector at the Bottom */}
        <View style={styles.vectorContainerBottom}>
          <Image source={require("../assets/images/vector2.png")} />
        </View>
      </>
    </SafeAreaView>
  );
}
