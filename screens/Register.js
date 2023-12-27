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
import BackButton from "../components/BackButton";

export default function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleSignUp = () => {
    // Add your logic for handling sign up here
    // You can use the values of username, emailOrPhone, and password
    // to make API calls or perform other necessary actions
    // For now, let's just log the values
    console.log("Username:", username);
    console.log("Email or Phone:", emailOrPhone);
    console.log("Password:", password);
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
            value={username}
            onChangeText={(newUsername) => setUsername(newUsername)}
            placeholder="Username"
          />
          <TextInput
            value={emailOrPhone}
            onChangeText={(newEmailOrPhone) =>
              setEmailOrPhone(newEmailOrPhone)
            }
            style={styles.input_field}
            placeholder="Phone or Email"
          />
          <TextInput
            value={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
            style={styles.input_field}
            placeholder="Password"
            secureTextEntry={!passwordVisibility}
          />
          <TouchableOpacity
            style={styles.signup_button}
            onPress={handleSignUp}
          > 
          <Text style={styles.white_button_text}>Sign up</Text>
          </TouchableOpacity>

          <View style={styles.buttonRow}>
            <Text style={styles.small_text}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.link_text}>Log in</Text>
            </TouchableOpacity>
          </View>
          </View>
      </>
    </SafeAreaView>
  );
}

