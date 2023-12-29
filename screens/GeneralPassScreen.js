import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import BackButton from "../components/BackButton";
import { styles } from "../styles/Styles";

export default function GeneralPassScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <>
        <BackButton navigation={navigation} />
        <View>
          <Text>General Pass Screen</Text>
        </View>
      </>
    </SafeAreaView>
  );
}
