import React, { useEffect } from "react";
import {
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/Styles";
import { getRefresh, getSubscriptionData } from "../components/Requests";

export default function HomeScreen({ navigation }) {
  const [hasAccess, setHasAccess] = React.useState(true);

  useEffect(() => {
    getRefresh(navigation, setHasAccess);
    getSubscriptionData();
  }, []);


  if (!hasAccess) {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            source={require("../assets/images/welcome_image.png")}
            style={styles.welcome_image}
          />
          <Text style={styles.welcome_text}>Make things easier with STP.</Text>
          <Text style={styles.default_text}>
            STP is a free public transport subscription manager.
          </Text>
          <View style={{ padding: 50 }}>
            <TouchableOpacity
              style={styles.red_button}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.white_button_text}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.empty_button}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.black_button_text}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
