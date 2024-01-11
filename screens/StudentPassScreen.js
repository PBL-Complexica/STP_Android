import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import BackButton from "../components/BackButton";
import { styles } from "../styles/Styles";

export default function StudentPassScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container4}>
      <>
        {/* Heading and Subheading */}
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Student Public Transport Pass</Text>
          <Text style={styles.subheadingText}>
            University, you either hate it or love it. Make it more affordable
            and bearable with the Student Pass!
          </Text>
        </View>

        {/* Colored Rectangle */}
        <View style={styles.coloredRectangle}></View>

        {/* Small Rectangles */}
        <View style={styles.smallRectanglesContainer}>
          <View style={styles.smallRectangleBlue}></View>
          <View style={styles.smallRectanglePurple}></View>
        </View>

        {/* Input Fields */}
      </>
    </SafeAreaView>
  );
}
