import React, { useState } from 'react';

import * as Device from 'expo-device';
import * as SecureStore from 'expo-secure-store';
import { subscriptionDetails, tokens, user } from './UserData';

const host = process.env.EXPO_PUBLIC_FLASK_HOST;

export const getIndex = () => {
  fetch(host)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  console.log(Device.modelName);
};

export const postLogin = (emailOrPhone, password, navigation) => {
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
      user.id = data.response.data.user_id;
      user.fname = data.response.data.first_name;
      user.lname = data.response.data.last_name;
      user.email = data.response.data.email_address;
      user.phone = data.response.data.phone_number;
      navigation.navigate("MainScreen");
    })
    .catch(error => console.log(error));

}

// Returns true if refresh token is valid and access token is refreshed
// Returns false otherwise
export const getRefresh = (navigation, setHasAccess) => {
  var refresh = null;
  SecureStore.getItemAsync('refresh_token')
    .then(refreshToken => {
      // setRefresh(refreshToken);
      refresh = refreshToken;
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
            getSubscriptionData()
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
      user.birthday = data.data.birth_date;
      navigation.navigate("MainScreen");
    })
    .catch(error => console.log(error));
}

export const postSignup = (
  firstName, 
  lastName, 
  phoneNumber,
  emailAddress,
  password,
  navigation 
) => {
  fetch(host + '/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      email_address: emailAddress,
      password: password,
      device_name: Device.modelName,
      birth_date: null,
    })
  })
    // TODO: Add response handling
    .then(response => response.json())
    .then(data => {
      console.log(data);
      postLogin(phoneNumber, password, navigation);
    })
    .catch(error => console.log(error));
}

export const getSubscriptionData = () => {
  SecureStore.getItemAsync('access_token')
    .then(accessToken => {
      fetch(host + '/get_user_subscription', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + accessToken,
        }
      })
        .then(response => {
          if (response.status == 200) {
            return response.json();
          }
          else {
            return null;
          }
        })
        .then(data => {
          if (data) {
            console.log(data);
            subscriptionDetails.name = data.name;
            subscriptionDetails.duration = data.duration;
            subscriptionDetails.days_left = data.days_left;
            subscriptionDetails.purchaseDate = data.valid_from;
          }
          else {
            console.log("No subscription data");
          }
        })
        .catch(error => console.log(error));
    });
}

export const generateSubscriptionOTP = (navigation) => {
  SecureStore.getItemAsync('access_token')
    .then(accessToken => {
      fetch(host + '/generate_subscription_otp', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + accessToken,
        }
      })
        .then(response => {
          if (response.status == 200) {
            return response.json();
          }
          else {
            return null;
          }
        })
        .then(data => {
          if (data){ 
            subscriptionDetails.subscrption_otp = data.subscription_key;
            navigation.navigate("DigitalPassScreen")
          }
          else {
            subscriptionDetails.subscrption_otp = null;
            navigation.navigate("DigitalPassScreen")
          }
        })
        .catch(error => console.log(error));
    });
}

export const buySubscription = (subscription_type, payment_method) => {
  SecureStore.getItemAsync('access_token')
    .then(accessToken => {
      fetch(host + '/buy_subscription', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + accessToken,
        },
        body: JSON.stringify({
          subscription_type: subscription_type,
          payment_method: payment_method,
        })
      })
        .then(response => {
          if (response.status == 200) {
            return response.json();
          }
          else {
            return null;
          }
        })
        .then(data => {
          if (data) {
            console.log(data);
            subscriptionDetails.name = data.name;
            subscriptionDetails.duration = data.duration;
            subscriptionDetails.days_left = data.days_left;
            subscriptionDetails.purchaseDate = data.valid_from;
          }
          else {
            console.log("No subscription data");
          }
        })
        .catch(error => console.log(error));
    });
}
