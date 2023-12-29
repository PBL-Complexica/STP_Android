import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

import BackButton from "../components/BackButton";
import { styles } from "../styles/Styles";

export default function Settings({ navigation }) {
  const handleOptionPress = (option, navigation) => {
    // Add navigation logic based on the selected option
    switch (option) {
      case "Your Account":
        navigation.navigate("YourAccount");
        break;
      // Add cases for other options if needed
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <>
        {/* Vector at the Top */}
        <View style={styles.vectorContainerTop}>
          <Image source={require("../assets/images/vector1.png")} />
        </View>

        {/*Main Content*/}
        <View style={styles.contentContainer}>
          {/* Profile Image and UserName */}
          <View style={styles.profileContainer1}>
            <Image
              source={require("../assets/images/img1.png")}
              style={styles.profileImage1}
            />
            <Text style={styles.userName}>(UserName)</Text>
          </View>

          {/* Options List */}
          <View style={styles.optionsContainer}>
            {[
              "Your Account",
              "Notifications",
              "Payment Methods",
              "Subscription Management",
              "Biometrics",
              "Language",
              "2FA Authentication",
            ].map((option, index) => (
              <TouchableOpacity key={index} style={styles.optionItem}
              onPress={() => handleOptionPress(option, navigation)}>
                <Text style={styles.optionText}>{option}</Text>
                <Image
                  source={require("../assets/images/right_arrow.png")}
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
            ))}

            {/* Separator Line */}
            <View style={styles.separatorLine1}></View>

            {/* Additional Options */}
            {["Support & FAQ", "Terms & Privacy"].map((option, index) => (
              <TouchableOpacity key={index} style={styles.optionItem}>
                <Text style={styles.optionText}>{option}</Text>
                <Image
                  source={require("../assets/images/right_arrow.png")}
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Separator Line */}
          <View style={styles.separatorLine2}></View>

          {/* Logout Button */}
          <View style={styles.logOutContainer}>
            <TouchableOpacity
              style={styles.logOutButton}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.logOutButtonText}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Vector at the Bottom */}
        <View style={styles.vectorContainerBottom}>
          <Image source={require("../assets/images/vector2.png")} />
        </View>
      </>
    </SafeAreaView>
  );
}
