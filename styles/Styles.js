import React from "react";
import {
  StyleSheet,
  Appearance,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";

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
    flex: 1,
  },
  welcome_image: {
    flex: 0,
    width: 300,
    height: 300,
    alignSelf: "center",
    resizeMode: "contain",
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
  register_signin_header: {
    color: colorScheme === "dark" ? "#fff" : "#000",
    paddingHorizontal: "5%",
    fontSize: 30,
    textAlign: "left",
    margin: 10,
    lineHeight: 40,
    fontFamily: "Poppins Bold",
    marginLeft: 30,
    marginBottom: 40,
    marginTop: 40,
  },
  input_field: {
    padding: 10,
    paddingStart: 20,
    paddingEnd: 20,
    borderWidth: 1.5,
    borderColor: "#49497D",
    borderRadius: 30,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 15,
    fontFamily: "Poppins Light",
    fontSize: 15,
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
    flexDirection: "row", // Align items in a row
    alignSelf: "center", // Center the row within its container
    marginTop: 20, // Adjust the spacing as needed
  },
  small_text: {
    color: colorScheme === "dark" ? "#fff" : "#000",
    fontFamily: "Poppins Light",
    fontSize: 15,
    lineHeight: 20,
  },
  link_text: {
    color: "#FF4967", // Assuming this is the link color
    fontFamily: "Poppins Semi-Bold",
    fontSize: 15,
    lineHeight: 20,
    marginStart: 5,
    textDecorationLine: "none",
  },
  small_text2: {
    color: colorScheme === "dark" ? "#fff" : "#000",
    fontFamily: "Poppins Light",
    fontSize: 15,
    lineHeight: 20,
    textAlign: "right",
    marginEnd: 60,
    marginTop: 10,
  },

  ///////////////////////////////////
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  profileContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 25,
    fontFamily: "Poppins Semi-Bold",
    color: "#000",
  },
  subheaderText: {
    fontSize: 15,
    fontFamily: "Poppins Light",
    color: "#000",
  },
  profileImageContainer: {
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImageMain: {
    width: 50, // Adjust the width to match the container size
    height: 50, // Adjust the height to match the container size
    borderRadius: 25, // Adjust the borderRadius accordingly
  },
  subscriptionBox: {
    backgroundColor: "#49497D",
    borderRadius: 25,
    margin: 20,
    marginTop: 30,
    marginBottom: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "flex-start", // Align items at the start (top)
    position: "relative", // Set position to relative
  },

  subscriptionTextContainer: {
    flex: 1,
    marginRight: 15, // Add some space between text and image
  },

  subscriptionHeaderText: {
    fontSize: 16,
    fontFamily: "Poppins Bold",
    color: "#fff",
    marginBottom: 5, // Add some space between header and subheader
    maxWidth: "70%",
  },

  subscriptionSubheaderText: {
    fontSize: 12,
    fontFamily: "Poppins Light",
    color: "#fff",
  },

  personImage: {
    width: 130,
    height: 130,
    position: "absolute", // Set position to absolute
    top: -25, // Adjust the top value as needed
    right: 10, // Adjust the right value as needed
  },
  availableSubscriptions: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  availableSubscriptionsHeader: {
    fontSize: 20,
    fontFamily: "Poppins Bold",
    color: "#000",
  },
  subscriptionsSubheader: {
    fontSize: 12,
    fontFamily: "Poppins Light",
    color: "#000",
    marginBottom: 15,
  },
  subscriptionBoxContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  subscriptionBoxOption: {
    marginRight: 0,
    marginLeft: 0,
    borderRadius: 25,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  subscriptionBoxImage: {
    width: 50,
    height: 50,
    borderRadius: 15,
    marginRight: 10,
    // Add other image styles as needed
  },
  subscriptionBoxTextContainer: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
  },
  selectionCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  purchaseButton: {
    width: "35%",
    alignSelf: "center",
    backgroundColor: "#ff4967",
    borderRadius: 25,
    marginTop: 10,
  },
  backgroundSquare: {
    position: "absolute",
    top: 15,
    left: 15,
    width: "20%",
    height: "120%",
    backgroundColor: "#E8E8E8",
    borderRadius: 15,
  },
  lockImage: {
    width: 25, // Adjust the width as needed
    height: 25, // Adjust the height as needed
    resizeMode: "contain", // Preserve the aspect ratio
    position: "absolute", // Set position to absolute
    top: 7.5, // Adjust the top value as needed
    right: 7.5, // Adjust the right value as needed
  },
  ////////////////////////////////////
  //Settings page
  vectorContainerTop: {
    position: 'absolute',
    top: 0,
    //left: 0,
    right: 0,
    zIndex: 0, // Ensure it's under other components
  },
  vectorContainerBottom: {
    position: 'absolute',
    bottom: 0,
    //left: 0,
    right: 0,
    zIndex: 0, // Ensure it's under other components
  },
  contentContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  profileContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
  },
  profileImage1: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    marginLeft: 10,
    fontSize: 20,
    fontFamily: "Poppins Bold",
  },
  optionsContainer: {
    marginTop: 0,
    paddingHorizontal: 25,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 15,
    fontFamily: "Poppins Semi-Bold",
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  separatorLine1: {
    height: 1,
    backgroundColor: 'rgba(255, 73, 103, 0.17)',
    marginVertical: 20,
    maxWidth: '100%',
  },
  separatorLine2: {
    height: 1,
    backgroundColor: 'rgba(255, 73, 103, 0.17)',
    marginVertical: 0,
    marginHorizontal: 30,
  },
  logOutContainer: {
    position: 'relative',
    zIndex: 2, // Higher z-index to be above the vector
  },
  logOutButton: {
    marginHorizontal: 30,
    marginBottom: 50,
  },
  logOutButtonText: {
    color: '#ff4967',
    fontSize: 15,
    fontFamily: "Poppins Semi-Bold",
  },
  ///////////////////////////////////
  // Your account page
  container3: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    flexDirection: "column",
    justifyContent:"center",
    textAlign: "left",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 50,
    alignSelf: "center",
  },
  label:{
    fontSize: 12,
    fontFamily: "Poppins Regular",
    marginTop: 15,
    marginLeft: 45,
  },
  profileText: {
    fontSize: 15,
    fontFamily: "Poppins Semi-Bold",
    marginTop: 5,
    marginLeft: 45,
  },
  separatorLine: {
    height: 1,
    backgroundColor: 'rgba(255, 73, 103, 0.17)',
    marginHorizontal: 30,
  },
  editProfileButton: {
    width: "40%",
    alignSelf: "center",
    backgroundColor: "#ff4967",
    borderRadius: 25,
    marginTop: 50,
    paddingHorizontal: 20,
    paddingVertical : 10,
    zIndex:1,
  },
  editProfileButtonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins Semi-Bold',
    textAlign: "center",
  },
  //////////////////////////////////
  // General/Pupil/Student Pass screens
  container4: { 
    paddingTop: "5%",
    flexDirection: "column",
    justifyContent:"center",
    textAlign: "left",
    backgroundColor: 'white',
    flex: 1,
  },
  headingContainer: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  headingText: {
    fontSize: 20,
    fontFamily: 'Poppins Semi-Bold',      
  },
  subheadingText: {
    fontSize: 12,
    fontFamily: 'Poppins Light',
  },
  coloredRectangle: {
    height: 15,
    backgroundColor: 'rgba(255, 73, 103, 0.14)',
  },
  smallRectanglesContainer: {
    flexDirection: 'row',
    marginTop: 0,
  },
  smallRectangleBlue: {
    width: 70,
    height: 8,
    backgroundColor: '#548EE1',
    marginRight: 0,
  },
  smallRectanglePurple: {
    width: 70,
    height: 8,
    backgroundColor: '#49497D',
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 70,
  },
  inputLabel:{
    fontSize: 15,
    fontFamily: 'Poppins Semi-Bold',
    marginTop : 30,
    marginLeft: 10,
  },
  durationDropdown: {
    zIndex: 2,
    borderColor: '#cccccc',
    borderRadius  : 25,
    borderWidth: 1.5,
  },
  monthDropdown: { 
    zIndex: 1,
    borderColor: '#cccccc',
    borderRadius  : 25,
    borderWidth: 1.5,
  },
  paymentDropdown: {
    zIndex: 0,
    borderColor: '#cccccc',
    borderRadius  : 25,
    borderWidth: 1.5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginRight: 10, // Adjust the margin as needed
  },
  confirmButton: {
    width: "35%",
    backgroundColor: "#ff4967",
    borderRadius: 25,
    marginTop: 75,
    marginLeft: 10,
  },
  cancelButton: {
    width: "30%",
    borderRadius: 25,
    marginTop: 75,
    backgroundColor: "white",
  },
  /////////////////////////
  // Digital Pass Screen  
  codeHeadeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  codeHeader: {
    fontSize: 24,
    fontFamily: 'Poppins Bold',
    marginLeft: '25%',
  },
  codeSubHeader: {
    fontSize: 12,
    fontFamily: 'Poppins Regular',
    marginLeft: '25%',
    marginBottom: '5%',
  },
  barcodeIcon: {
    width: 24,
    height: 24,
    marginRight: '5%',
    marginBottom: '1%',
  },
  grayBox: {
    backgroundColor: '#ededee',
    borderRadius: 25,
    padding: 20,
    marginVertical: 20,
    marginHorizontal: '10%',
    minHeight: '35%',
    justifyContent: 'center', // Center vertically
    alignItems: 'center',     // Center horizontally
  },
  code: {
    fontSize: 24,
    fontFamily: 'Poppins Light',
  },
  textPassType: {
    fontSize: 12,
    fontFamily: 'Poppins Semi-Bold',
    alignSelf: 'center',
  },
  textValid: {
    fontSize: 12,
    fontFamily: 'Poppins Semi-Bold',
    alignSelf: 'center',
  },
  spacing: {
    height: 20,
  },
  refreshButtonContainer: {
    position: 'relative',
    zIndex: 2, // Higher z-index to be above the vector
  },
  refreshButton: {
    width: 160,
    height: 50,
    alignSelf: "center",
    backgroundColor: "#ff4967",
    borderRadius: 30,
    marginTop: '20%',
    justifyContent: "center",
    alignItems  : "center", 
  },
  refreshButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins Semi-Bold',
    zIndex:1,
  },
  /////////////////////////
  // Loading Screen
  loadingContainer: {
    alignItems: "center",
  },
  loadingText: {
    textAlign: "center",
    fontSize: 16,
    color: "#000000",
    marginTop: 40,
    fontFamily: "Poppins Regular",},
});

const generateStyles = (isSelected) =>
  StyleSheet.create({
    subscriptionBoxHeader: {
      fontSize: 16,
      fontFamily: "Poppins Bold",
      color: isSelected ? "white" : "black",
    },
    subscriptionBoxSubheader: {
      fontSize: 14,
      fontFamily: "Poppins Light",
      color: isSelected ? "#fff" : "black",
    },
    // Add other styles as needed
  });

export { styles, colorScheme, generateStyles };
