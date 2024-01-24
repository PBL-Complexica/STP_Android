import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { styles } from "../styles/Styles";

export default function PasswordRecoveryScreen({ navigation }) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handlePasswordRecovery = () => {
    // Perform password recovery logic here
    // For now, let's just show the success message
    setShowSuccessMessage(true);
  };

  const handleBackToHomeScreen = () => {
    // Navigate back to the home screen
    navigation.navigate("Home");
  };

  return (
    <>
    <SafeAreaView style={styles.container2}>
      <>
        {!showSuccessMessage ? (
          <>
            <Text style={styles.recoveryHeader}>Forgot your password?</Text>
            <Text style={styles.instructionsText}>
              Please enter your email or phone number to recover your password.
            </Text>

            <TextInput
              // value={emailOrPhone}
              // onChangeText={(newEmailOrPhone) => setEmailOrPhone(newEmailOrPhone)}
              style={styles.recoveryInputField}
              placeholder="Phone or Email"
            />

            <TouchableOpacity style={styles.recoveryButton1} onPress={handlePasswordRecovery}>
              <Text style={styles.white_button_text}>Recover password</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.recoveryHeader}>Forgot your password?</Text>
            <Text style={styles.instructionsText}>
              Please enter your email or phone number to recover your password.
            </Text>

            <TextInput
              // value={emailOrPhone}
              // onChangeText={(newEmailOrPhone) => setEmailOrPhone(newEmailOrPhone)}
              style={styles.recoveryInputField}
              placeholder="Phone or Email"
            />

            <TouchableOpacity style={styles.recoveryButton} onPress={handlePasswordRecovery}>
              <Text style={styles.white_button_text}>Recover password</Text>
            </TouchableOpacity>

            <View style={styles.successMessageContainer}>
              <Text style={styles.successMessageText}>
                Check your email or phone for a password recovery link.
              </Text>
            </View>

            

            <TouchableOpacity onPress={handleBackToHomeScreen}>
              <Text style={styles.backHomeButton}>Back to Home Screen</Text>
            </TouchableOpacity>
          </>
        )}
      </>
    </SafeAreaView>

</>
  );
}
