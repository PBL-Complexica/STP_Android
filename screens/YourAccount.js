import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

import BackButton from "../components/BackButton";
import { styles } from "../styles/Styles";

export default function YourAccount({ navigation }) {
  return (
    <SafeAreaView style={styles.container3}>
      <>
        {/* Vector at the Top */}
        <View style={styles.vectorContainerTop}>
          <Image source={require("../assets/images/vector1.png")} />
        </View>

        {/*Main Content*/}
        {/* Profile Picture */}
        <Image
          source={require("../assets/images/img1.png")}
          style={styles.profileImage}
        />

        {/* Name */}
        <Text style={styles.profileText}>Name Surname)</Text>
        {/* Separator Line */}
        <View style={styles.separatorLine}></View>

        {/* Birthday */}
        <Text style={styles.profileText}>Birthday</Text>
        {/* Separator Line */}
        <View style={styles.separatorLine}></View>

        {/* Phone Number (Moldova) */}
        <Text style={styles.profileText}>Phone Number</Text>
        {/* Separator Line */}
        <View style={styles.separatorLine}></View>

        {/* Email */}
        <Text style={styles.profileText}>Email</Text>
        {/* Separator Line */}
        <View style={styles.separatorLine}></View>

        {/* Password */}
        <Text style={styles.profileText}>Password</Text>
        {/* Separator Line */}
        <View style={styles.separatorLine}></View>

        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Vector at the Bottom */}
        <View style={styles.vectorContainerBottom}>
          <Image source={require("../assets/images/vector2.png")} />
        </View>
      </>
    </SafeAreaView>
  );
}
