import * as Device from 'expo-device';
import * as SecureStore from 'expo-secure-store';

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
    })
    .catch(error => console.log(error));

}

// Returns true if refresh token is valid and access token is refreshed
// Returns false otherwise
export const getRefresh = () => {
  if (!SecureStore.getItemAsync('refresh_token')) {
    return false;
  }

  fetch(host + '/refresh', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + SecureStore.getItemAsync('refresh_token')
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.access_token) {
        SecureStore.setItemAsync('access_token', data.access_token);
        return true;
      }
      return false;
    })
    .catch(error => console.log(error));
    
    return false;
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
