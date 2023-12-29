import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import BackButton from "../components/BackButton";
import { styles } from "../styles/Styles";

export default function PupilPassScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <>
        <BackButton navigation={navigation} />
        <View>
          <Text>Pupil Pass Screen</Text>
        </View>
      </>
    </SafeAreaView>
  );
}
