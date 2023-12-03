import React from 'react';
import { Text, View, Button, Image, SafeAreaView } from 'react-native';
import { styles } from '../styles/Styles';

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image 
                    source={require('../assets/images/welcome_image.png')} 
                    style={styles.welcome_image}/>
                <Text style={styles.welcome_text}>Make things easier with STP.</Text>
                <Text style={styles.default_text}>STP is a free public transport subscription manager.</Text>
                <View style={styles.button}>
                    <Button
                        title="Login"
                        color={styles.colorScheme === "dark" ? "#fff" : "#000"}
                        // color="#FFFF4967"
                        onPress={() => navigation.navigate('Login')} />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Register"
                        color={styles.colorScheme === "dark" ? "#fff" : "#000"}
                        // color="#FFFF4967"
                        onPress={() => navigation.navigate('Register')} />
                </View>
            </View>
        </SafeAreaView>
    );
}
