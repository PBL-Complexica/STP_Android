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
    container2: {
        backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        justifyContent: "center",
        flex:1
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
        width: "40%",
        alignSelf: "center",
        backgroundColor: "#ff4967",
        borderRadius: 25,
        marginTop: 10,
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
    },
    register_signin_img: {
        width: 300,
        height: 200,
        alignSelf: "center",
        resizeMode: "contain",
    },
    register_signin_header:{
        color: colorScheme === "dark" ? "#fff" : "#000",
        paddingHorizontal: "5%",
        fontSize: 30,
        textAlign: "left",
        margin: 10,
        lineHeight: 40,
        fontFamily: "Poppins Bold",
        marginLeft:30,
        marginBottom: 40,
        marginTop: 40,
        },
    input_field: {
        padding:10,
        paddingStart: 20,
        paddingEnd: 20,
        borderWidth: 1.5,
        borderColor: '#49497D',
        borderRadius: 30,
        marginLeft: 50,
        marginRight: 50,
        marginTop:15,
        fontFamily: "Poppins Light",
        fontSize: 15
    },
    signup_button: {
        // color: colorScheme === "dark" ? "#fff" : "#000",
        // paddingTop: 15,
        width: "30%",
        alignSelf: "center",
        backgroundColor: "#ff4967",
        borderRadius: 25,
        marginTop: 60,
    },
    login_button: {
        // color: colorScheme === "dark" ? "#fff" : "#000",
        // paddingTop: 15,
        width: "30%",
        alignSelf: "center",
        backgroundColor: "#ff4967",
        borderRadius: 25,
        marginTop: 60,
    },
    buttonRow: {
        flexDirection: 'row', // Align items in a row
        alignSelf: 'center',  // Center the row within its container
        marginTop: 20,        // Adjust the spacing as needed
      },
      small_text: {
        color: colorScheme === 'dark' ? '#fff' : '#000',
        fontFamily: 'Poppins Light',
        fontSize: 15,
        lineHeight: 20,
      },
      link_text: {
        color: '#FF4967',     // Assuming this is the link color
        fontFamily: 'Poppins Semi-Bold',
        fontSize: 15,
        lineHeight: 20,
        marginStart: 5,
        textDecorationLine: 'none',
      },
      small_text2: {
        color: colorScheme === 'dark' ? '#fff' : '#000',
        fontFamily: 'Poppins Light',
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'right',
        marginEnd: 60,
        marginTop: 10,
      },
}
);

export { styles, colorScheme };
