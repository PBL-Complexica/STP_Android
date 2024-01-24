import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { styles } from "../styles/Styles";
import { postSignup } from "../components/Requests";

export default function Register({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleSignUp = () => {
    // Add your logic for handling sign up here
    // You can use the values of username, emailOrPhone, and password
    // to make API calls or perform other necessary actions
    // For now, let's just log the values
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Password:", password);

    postSignup(firstName, lastName, phone, email, password, navigation);

    // Navigate to MainScreen and pass the username as a parameter
    // navigation.navigate("MainScreen");
  };

  return (
    <SafeAreaView style={styles.container2}>
      <>
        {/* <BackButton navigation={navigation} /> */}
        <View>
          <Image
            source={require("../assets/images/signup_image.png")}
            style={styles.register_signin_img}
          />
          <Text style={styles.register_signin_header}>Welcome</Text>
          <TextInput
            style={styles.input_field}
            value={firstName}
            onChangeText={(newFirstName) => setFirstName(newFirstName)}
            placeholder="First Name"
          />
          <TextInput
            style={styles.input_field}
            value={lastName}
            onChangeText={(newLastName) => setLastName(newLastName)}
            placeholder="Last Name"
          />
          <TextInput
            value={email}
            onChangeText={(newEmail) => setEmail(newEmail)}
            style={styles.input_field}
            placeholder="Email Address"
          />
          <TextInput
            value={phone}
            onChangeText={(newPhone) => setPhone(newPhone)}
            style={styles.input_field}
            placeholder="Phone Number"
          />
          <TextInput
            value={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
            style={styles.input_field}
            placeholder="Password"
            secureTextEntry={!passwordVisibility}
          />
          <TouchableOpacity style={styles.signup_button} onPress={handleSignUp}>
            <Text style={styles.white_button_text}>Sign up</Text>
          </TouchableOpacity>

          <View style={styles.buttonRow1}>
            <Text style={styles.small_text}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.link_text}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    </SafeAreaView>
  );
}
