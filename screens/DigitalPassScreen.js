import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Barcode from '@kichiyaki/react-native-barcode-generator';

import { styles } from "../styles/Styles";
import { generateSubscriptionOTP } from "../components/Requests";
import { subscriptionDetails } from "../components/UserData";
import { usePreventScreenCapture } from "expo-screen-capture";

function GetBarcode() {
  if (subscriptionDetails.subscrption_otp == null) {
    return (
      <Text style = {styles.code}> No active subscription </Text>
    );
  }
  else {
    return (
      <Barcode
        value={subscriptionDetails.subscrption_otp}
        format="CODE128"
        text={subscriptionDetails.subscrption_otp}
        height={200}
        textStyle={{ fontSize: 24 }}
        lineColor="#000000"
        background="#ededee"
      />
    );
  }
}

export default function DigitalPassScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  // usePreventScreenCapture();

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
          <GetBarcode/>
        </View>

        {/* Additional information */}
        <Text style={styles.textPassType}> {subscriptionDetails.name} </Text>
        <Text style={styles.textValid}> {subscriptionDetails.duration} </Text>

        {/* Refresh code button */}
        {/* <View style={styles.refreshButtonContainer}>
          <TouchableOpacity style={styles.refreshButton} onPress={refreshCode} disabled={refreshing}>
            <Text style={styles.refreshButtonText}>Refresh Code</Text>
          </TouchableOpacity>
        </View> */}

        {/* Vector at the Bottom */}
        <View style={styles.vectorContainerBottom}>
          <Image source={require("../assets/images/vector2.png")} />
        </View>
      </>
    </SafeAreaView>
  );
}
