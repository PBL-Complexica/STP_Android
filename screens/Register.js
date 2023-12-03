import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { styles } from "../styles/Styles";
import BackButton from "../components/BackButton";

export default function Register({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <><BackButton navigation={navigation} />
            <View>
                <Text>Register Screen</Text>
            </View></>
        </SafeAreaView>
    );
}
