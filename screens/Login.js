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
import { postLogin } from "../components/Requests";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleLogIn = () => {
    // Add your logic for handling sign up here
    // You can use the values of username, emailOrPhone, and password
    // to make API calls or perform other necessary actions
    // For now, let's just log the values
    console.log("Email or Phone:", emailOrPhone);
    console.log("Password:", password);
    postLogin(emailOrPhone, password, navigation);
    // Navigate to MainScreen and pass the username as a parameter
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
            value={emailOrPhone}
            onChangeText={(newEmailOrPhone) => setEmailOrPhone(newEmailOrPhone)}
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
          {/* <Text style={styles.small_text2}>Forgot password</Text> */}
          <TouchableOpacity onPress={() => navigation.navigate("PasswordRecoveryScreen")}>
            <Text style={styles.small_text2}>Forgot password</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.login_button} onPress={handleLogIn}>
            <Text style={styles.white_button_text}>Log in</Text>
          </TouchableOpacity>

          <View style={styles.buttonRow1}>
            <Text style={styles.small_text}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.link_text}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    </SafeAreaView>
  );
}
