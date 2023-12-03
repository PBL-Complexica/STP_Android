import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "../styles/Styles";

export default function BackButton({ navigation }) {
    return (
        <Text
            style={styles.back_button} 
            onPress={() => navigation.goBack()}>
                &lt;
        </Text>
    );
}
