import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { styles, generateStyles } from "../styles/Styles";

export default function MainScreen({ navigation, route }) {
  // Extract userName from the route params
  const { userName } = route.params;

  // Array representing subscription boxes
  const subscriptionBoxes = [
    { id: 1, header: "General Pass", subheader: "Starting from 234 MDL" },
    { id: 2, header: "Student Pass", subheader: "Starting from 164 MDL" },
    { id: 3, header: "Pupil Pass", subheader: "Starting from 117 MDL" },
  ];
  // State to track selected box
  const [selectedBox, setSelectedBox] = useState(null);

  // Function to handle box selection
  const handleBoxSelect = (boxId) => {
    setSelectedBox(boxId);
  };

  const handlePurchase = () => {
    // Navigate to the appropriate screen based on the selected box
    switch (selectedBox) {
      case 1:
        navigation.navigate("GeneralPassScreen", { userName });
        break;
      case 2:
        navigation.navigate("StudentPassScreen", { userName });
        break;
      case 3:
        navigation.navigate("PupilPassScreen", { userName });
        break;
      default:
        // Handle default case or show an error message
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.profileContainer}>
            <Text style={styles.headerText}>What's up, {userName}</Text>
            <Text style={styles.subheaderText}>
              Where are you heading today?
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Settings")}
            style={styles.profileImageContainer}
          >
            <Image
              source={require("../assets/images/img1.png")}
              style={styles.profileImageMain}
            />
          </TouchableOpacity>
        </View>

        {/* Subscription Box */}
        <TouchableOpacity
          style={styles.subscriptionBox}
          onPress={() => navigation.navigate("DigitalPassScreen")}
        >
          <View style={styles.subscriptionTextContainer}>
            <Text style={styles.subscriptionHeaderText}>
              General Subscription Active
            </Text>
            <Text style={styles.subscriptionSubheaderText}>29 days left</Text>
          </View>
          <Image
            source={require("../assets/images/person2.png")}
            style={styles.personImage}
          />
        </TouchableOpacity>

        {/* Available Subscriptions Section */}
        <View style={styles.availableSubscriptions}>
          <Text style={styles.availableSubscriptionsHeader}>
            Available Subscriptions
          </Text>
          <Text style={styles.subscriptionsSubheader}>
            Manage your Public Transport Passes
          </Text>

          {/* Subscription Boxes */}
          <View style={styles.subscriptionBoxContainer}>
            {subscriptionBoxes.map((box) => (
              <TouchableOpacity
                key={box.id}
                style={[
                  styles.subscriptionBoxOption,
                  {
                    backgroundColor:
                      selectedBox === box.id ? "#FF4967" : "#F5F5F5",
                  },
                ]}
                onPress={() => handleBoxSelect(box.id)}
              >
                {/* Background Square */}
                <View style={styles.backgroundSquare}></View>
                {/* Image */}
                <Image
                  source={require("../assets/images/img1.png")}
                  style={styles.subscriptionBoxImage}
                />

                {/* Texts */}
                <View style={styles.subscriptionBoxTextContainer}>
                  <Text
                    style={
                      generateStyles(selectedBox === box.id)
                        .subscriptionBoxHeader
                    }
                  >
                    {box.header}
                  </Text>
                  <Text
                    style={
                      generateStyles(selectedBox === box.id)
                        .subscriptionBoxSubheader
                    }
                  >
                    {box.subheader}
                  </Text>
                </View>

                {selectedBox === box.id && (
                  <View style={styles.selectionCircle}>
                    {(box.id === 2 || box.id === 3) && ( // Check if the box is Student Pass or Pupil Pass
                      <Image
                        source={require("../assets/images/lock.png")}
                        style={styles.lockImage}
                      />
                    )}
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Purchase Button */}
        <TouchableOpacity
          style={styles.purchaseButton}
          onPress={() => {
            handlePurchase();
          }}
        >
          <Text style={styles.white_button_text}>Purchase</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.empty_button}
          // onPress={() => navigation.navigate("")}
        >
          <Text style={styles.black_button_text}>Special Passes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
