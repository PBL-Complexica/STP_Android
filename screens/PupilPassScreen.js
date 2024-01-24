import React, { useState } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import BackButton from "../components/BackButton";
import { styles } from "../styles/Styles";

export default function PupilPassScreen({ navigation }) {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "1 Month", value: "1_month" },
    { label: "3 Months", value: "3_months" },
    { label: "6 Months", value: "6_months" },
  ]);

  const [openPayment, setOpenPayment] = useState(false);
  const [valuePayment, setValuePayment] = useState(null);
  const [itemsPayment, setItemsPayment] = useState([
    { label: "Mpay", value: "mpay" },
    { label: "PayPal", value: "paypal" },
    // Add more payment options as needed
  ]);

  // Function to get current month and next month
  const getCurrentAndNextMonth = () => {
    const getMonthName = (monthNumber) => {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      return monthNames[monthNumber - 1] || ""; // Months are zero-based
    };

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
    const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;

    return [
      { label: getMonthName(currentMonth), value: `month_${currentMonth}` },
      { label: getMonthName(nextMonth), value: `month_${nextMonth}` },
    ];
  };

  const [openSubscriptionMonth, setOpenSubscriptionMonth] = useState(false);
  const [valueSubscriptionMonth, setValueSubscriptionMonth] = useState(null);
  const [itemsSubscriptionMonth, setItemsSubscriptionMonth] = useState(
    getCurrentAndNextMonth()
  );

  return (
    <SafeAreaView style={styles.container4}>
      <>
        {/* Heading and Subheading */}
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Pupil Public Transport Pass</Text>
          <Text style={styles.subheadingText}>
            Back to school more convenient, affordable, and eco-conscious with
            the Pupil Pass!
          </Text>
        </View>

        {/* Colored Rectangle */}
        <View style={styles.coloredRectangle}></View>

        {/* Small Rectangles */}
        <View style={styles.smallRectanglesContainer}>
          <View style={styles.smallRectangleBlue}></View>
          <View style={styles.smallRectanglePurple}></View>
        </View>

        {/* Input Fields, Form*/}
        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>
            What will be the desired length ?
          </Text>
          {/* Subscription Duration Picker */}
          <DropDownPicker
            style={styles.durationDropdown}
            open={open}
            value={value}
            items={items}
            placeholder="Select Length"
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />

          <Text style={styles.inputLabel}>Starting from:</Text>

          {/* Subscription Start Month Picker */}
          <DropDownPicker
            style={styles.monthDropdown}
            open={openSubscriptionMonth}
            value={valueSubscriptionMonth}
            items={itemsSubscriptionMonth}
            placeholder="Select Month"
            setOpen={setOpenSubscriptionMonth}
            setValue={setValueSubscriptionMonth}
            setItems={setItemsSubscriptionMonth}
          />

          <Text style={styles.inputLabel}>How would you like to pay?</Text>
          {/* Payment Method Picker */}
          <DropDownPicker
            style={styles.paymentDropdown}
            open={openPayment}
            value={valuePayment}
            items={itemsPayment}
            placeholder="Select Payment Method"
            setOpen={setOpenPayment}
            setValue={setValuePayment}
            setItems={setItemsPayment}
          />
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() =>     navigation.navigate("MainScreen", { userName: null })}
              >
              <Text style={styles.black_button_text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() =>     navigation.navigate("MainScreen", { userName: null })}
              >
              <Text style={styles.white_button_text}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    </SafeAreaView>
  );
}
