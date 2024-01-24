import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

import BackButton from "../components/BackButton";
import { styles } from "../styles/Styles";
import { user } from "../components/UserData";

export default function YourAccount({ navigation }) {
  const [editMode, setEditMode] = useState(false);
  const [fname, setFname] = useState(user.fname);
  const [lname, setLname] = useState(user.lname);
  const [birthday, setBirthday] = useState(user.birthday);
  const [phoneNumber, setPhoneNumber] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("********");

  const handleEditProfile = () => {
    setEditMode(!editMode);
    setPassword("");
  };

  const handleSaveProfile = () => {
    // Here, you can send the updated profile data to your server
    // For simplicity, let's just log the updated data for now
    console.log("Updated Profile Data:", { fname, lname, birthday, phoneNumber, email, password });

    // After saving, exit edit mode
    setEditMode(false);
    setPassword("********");
  };

  return (
    <SafeAreaView style={styles.container3}>
      <>
        {/* Vector at the Top */}
       <View style={styles.vectorContainerTop}>
         <Image source={require("../assets/images/vector1.png")} />
        </View>

        {/*Main Content*/}
        {/* Profile Picture */}
        <Image source={require("../assets/images/img1.png")} style={styles.profileImage} />

        {/* Name */}
        <Text style={styles.label}>First Name</Text>
        {editMode ? (
          <TextInput
            style={styles.profileText}
            value={fname}
            onChangeText={(text) => setFname(text)}
          />
        ) : (
          <Text style={styles.profileText}>{fname}</Text>
        )}

        <View style={styles.separatorLine}></View>

        <Text style={styles.label}>Last Name</Text>
        {editMode ? (
          <TextInput
            style={styles.profileText}
            value={lname}
            onChangeText={(text) => setLname(text)}
          />
        ) : (
          <Text style={styles.profileText}>{lname}</Text>
        )}
        {/* Separator Line */}
        <View style={styles.separatorLine}></View>

        {/* Birthday */}
        <Text style={styles.label}>Birthday</Text>
        {editMode ? (
          <TextInput
            style={styles.profileText}
            value={birthday}
            onChangeText={(text) => setBirthday(text)}
          />
        ) : (
          <Text style={styles.profileText}>{birthday}</Text>
        )}
        {/* Separator Line */}
        <View style={styles.separatorLine}></View>

        {/* Phone Number */}
        <Text style={styles.label}>Phone Number</Text>
        {editMode ? (
          <TextInput
            style={styles.profileText}
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        ) : (
          <Text style={styles.profileText}>{phoneNumber}</Text>
        )}
        {/* Separator Line */}
        <View style={styles.separatorLine}></View>

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        {editMode ? (
          <TextInput
            style={styles.profileText}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        ) : (
          <Text style={styles.profileText}>{email}</Text>
        )}
        {/* Separator Line */}
        <View style={styles.separatorLine}></View>

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        {editMode ? (
          <TextInput
            style={styles.profileText}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        ) : (
          <Text style={styles.profileText}>{password}</Text>
        )}
        {/* Separator Line */}
        <View style={styles.separatorLine}></View>

        {/* Edit Profile Button */}
        {editMode ? (
          <TouchableOpacity style={styles.editProfileButton} onPress={handleSaveProfile}>
            <Text style={styles.editProfileButtonText}>Save Profile</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.editProfileButton} onPress={handleEditProfile}>
            <Text style={styles.editProfileButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        )}

        {/* Vector at the Bottom */}
      <View style={styles.vectorContainerBottom}>           
      <Image source={require("../assets/images/vector2.png")} />
        </View>
      </>
    </SafeAreaView>
  );
}
