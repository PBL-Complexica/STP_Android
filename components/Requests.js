import React, { useState } from 'react';

import * as Device from 'expo-device';
import * as SecureStore from 'expo-secure-store';
import { tokens, user } from './UserData';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const host = process.env.EXPO_PUBLIC_FLASK_HOST;

export const getIndex = () => {
  fetch(host)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  console.log(Device.modelName);
};

export const postLogin = (emailOrPhone, password) => {
  fetch(host + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      phone_number: emailOrPhone,
      password: password
    })
  })
    .then(response => response.json())
    .then(data => {
      SecureStore.setItemAsync('access_token', data.access_token);
      SecureStore.setItemAsync('refresh_token', data.refresh_token);
      console.log(data);
      user.id = data.data.user_id;
      user.fname = data.data.first_name;
      user.lname = data.data.last_name;
      user.email = data.data.email_address;
      user.phone = data.data.phone_number;
    })
    .catch(error => console.log(error));

}

// Returns true if refresh token is valid and access token is refreshed
// Returns false otherwise
export const getRefresh = (navigation, setHasAccess) => {
  const [refresh, setRefresh] = useState(null);

  SecureStore.getItemAsync('refresh_token')
    .then(refreshToken => {
      setRefresh(refreshToken);
    })
    .then(() => {
      if (refresh) {
        fetch(host + '/refresh', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + refresh
          }
        })
        .then(response => response.json())
        .then(data => {
          if (data) {
            SecureStore.setItemAsync('access_token', data.access_token);
            console.log(data);
            tokens.access = data.access_token;
            setHasAccess(true);
            getData(navigation);
          }
        })
      }
      else {
        setHasAccess(false);
        return;
      }
    });
}

export const getData = (navigation) => {
  fetch(host + '/protected', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokens.access
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data.data);
      user.id = data.data.user_id;
      user.fname = data.data.first_name;
      user.lname = data.data.last_name;
      user.email = data.data.email_address;
      user.phone = data.data.phone_number;
      // console.log(user);
      navigation.navigate("MainScreen");
    })
    .catch(error => console.log(error));
}

export const postSignup = (
  firstName, 
  lastName, 
  phoneNumber,
  emailAddress,
  password 
) => {
  // TODO: Add logic for handling sign up here
}
