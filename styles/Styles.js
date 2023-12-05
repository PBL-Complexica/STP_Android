import React from "react";
import { StyleSheet, Appearance, Platform, StatusBar, Dimensions } from "react-native";

const colorScheme = Appearance.getColorScheme(); 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // backgroundColor: "dodgerblue",
        // alignItems: "center",
        justifyContent: "center",
    },
    welcome_image: {
        flex: 0,
        width: 300,
        height: 300,
        alignSelf: "center",
        resizeMode: 'contain',
    },
    red_button: {
        // color: colorScheme === "dark" ? "#fff" : "#000",
        // paddingTop: 15,
        width: "50%",
        alignSelf: "center",
        backgroundColor: "#ff4967",
        borderRadius: 20,
    },
    empty_button: {
        width: "50%",
        alignSelf: "center",
        // backgroundColor: "#ff4967",
        borderRadius: 20,
    },
    white_button_text: {
        color: "white",
        fontSize: 15,
        textAlign: "center",
        padding: 10,
        fontFamily: "Poppins Semi-Bold",
    },
    black_button_text: {
        color: "black",
        fontSize: 15,
        textAlign: "center",
        padding: 10,
        fontFamily: "Poppins Semi-Bold",
    },
    back_button: {
        flex: 1,
        color: colorScheme === "dark" ? "#fff" : "#000",
        fontSize: 50,
        paddingLeft: 10,
        paddingTop: 10,
        fontFamily: "Space Mono Bold",
    },
    welcome_text: {
        color: colorScheme === "dark" ? "#fff" : "#000",
        paddingHorizontal: "5%",
        fontSize: 30,
        textAlign: "center",
        margin: 10,
        lineHeight: 40,
        fontFamily: "Poppins Bold",
        alignSelf: "center",
    },
    default_text: {
        color: colorScheme === "dark" ? "#fff" : "#000",
        paddingHorizontal: "5%",
        alignSelf: "center",
        fontFamily: "Poppins Light",
        fontSize: 15,
        lineHeight: 20,
    }
});

export { styles, colorScheme };
