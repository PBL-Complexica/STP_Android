import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';

import { styles, generateStyles } from '../styles/Styles';

export default function MainScreen({ navigation, route }) {
     // Extract userName from the route params
    const { userName } = route.params;

     // Array representing subscription boxes
  const subscriptionBoxes = [
    { id: 1, header: 'General Pass', subheader: 'Starting from 234 MDL' },
    { id: 2, header: 'Student Pass', subheader: 'Starting from 164 MDL' },
    { id: 3, header: 'Pupil Pass', subheader: 'Starting from 117 MDL' },
  ];
    // State to track selected box
  const [selectedBox, setSelectedBox] = useState(null);

  // Function to handle box selection
  const handleBoxSelect = (boxId) => {
    setSelectedBox(boxId);
  };
  
    return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <Text style={styles.headerText}>What's up, {userName}</Text>
          <Text style={styles.subheaderText}>Where are you heading today?</Text>
        </View>
        <View style={styles.profileImageContainer}>
          <Image
            source={require('../assets/images/img1.png')} // Update the path to your PNG file
            style={styles.profileImage} // Apply any additional styles as needed
          />
        </View>
      </View>
      <View style={styles.subscriptionBox}>
        <View style={styles.subscriptionTextContainer}>
          <Text style={styles.subscriptionHeaderText}>General Subscription Active</Text>
          <Text style={styles.subscriptionSubheaderText}>29 days left</Text>
        </View>
        <Image
          source={require('../assets/images/person_image.png')}
          style={styles.personImage}
        />
      </View>

 {/* Available Subscriptions Section */}
 <View style={styles.availableSubscriptions}>
        <Text style={styles.availableSubscriptionsHeader}>Available Subscriptions</Text>
        <Text style={styles.subscriptionsSubheader}>Manage your Public Transport Passes</Text>

         {/* Subscription Boxes */}
      <View style={styles.subscriptionBoxContainer}>
        {subscriptionBoxes.map((box) => (
          <TouchableOpacity
            key={box.id}
            style={[
              styles.subscriptionBoxOption,
              {
                backgroundColor: selectedBox === box.id ? '#FF4967' : '#F5F5F5',
              },
            ]}
            onPress={() => handleBoxSelect(box.id)}
          >
            {/* Background Square */}
            <View style={styles.backgroundSquare}></View>
            {/* Image */}
            <Image
              source={require('../assets/images/img1.png')}
              style={styles.subscriptionBoxImage}
            />

            {/* Texts */}
            <View style={styles.subscriptionBoxTextContainer}>
              <Text style={generateStyles(selectedBox === box.id).subscriptionBoxHeader}>{box.header}</Text>
              <Text style={generateStyles(selectedBox === box.id).subscriptionBoxSubheader}>{box.subheader}</Text>
            </View>

            {selectedBox === box.id && (
              <View style={styles.selectionCircle}>
          {((box.id === 2) || (box.id === 3)) && ( // Check if the box is Student Pass or Pupil Pass
                  <Image
                    source={require('../assets/images/lock.png')}
                    style={styles.lockImage}
                  />
                )}
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
      </View>
      {/* Special Passes Button */}
      <TouchableOpacity
        style={styles.specialButton}
        onPress={() => {
          // Add logic for handling Special Passes button press
        }}
      >
        <Text style={styles.white_button_text}>Special Passes</Text>
      </TouchableOpacity>
      
    </View>
  );
}
