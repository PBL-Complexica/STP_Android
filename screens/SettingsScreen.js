import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import BackButton from "../components/BackButton";
import { styles } from "../styles/Styles";

export default function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <>
        <BackButton navigation={navigation} />
        <View>
          <Text>Profile Settings Screen</Text>
        </View>
      </>
    </SafeAreaView>
  );
}
