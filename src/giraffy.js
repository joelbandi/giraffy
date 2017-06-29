/**
 * giraffy
 *
 * Copyright © 2016 joelbandi. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import image from './giraffy-image';
import auth from './giraffy-auth';

/**
 * This the Giraffy functional constructor.
 * @param {object} credentials - conntains the clientID, clientSecret and callbackUri
 * @todo Support Proxy objects to privatize credentials
 */
function Giraffy(credentials) {
  if (typeof credentials !== 'undefined') {
    const { clientId = '', clientSecret = '', callbackUri = '' } = credentials;
    this.credentials = {
      clientId,
      clientSecret,
      callbackUri,
    };
  } else {
    this.credentials = {};
  }
}

// --- Utils ---

const _credentialEmptyError = function (key) {
  throw new Error(`The ${key} credentials has not been registered with the Giraffy client.`);
};

const _addMethods = function (apis) {
  apis.forEach((methods) => {
    for (let i in methods) {
      if (methods.hasOwnProperty(i)) {
        Giraffy.prototype[i] = methods[i];
      }
    }
  });
};


// --- Setters ---
/**
 * This sets giraffy credential
 * @param {string} key - the name of the credential
 * @param {string} value - the value of the credential
 */
Giraffy.prototype.setCredential = function (key, value) {
  if (['clientId', 'clientSecret', 'callbackUri'].indexOf(key) === -1) {
    throw new Error(`Cannot set illegal credential ${key}`);
  } else {
    this.credentials[key] = value;
  }
};

/**
 * This sets the clientId
 * @param {string} clientID - the value of the clientID
 */
Giraffy.prototype.setClientId = function (clientId) {
  this.setCredential('clientId', clientId);
};

/**
 * This sets the clientSecret
 * @param {string} clientSecret - the value of the clientSecret
 */
Giraffy.prototype.setclientSecret = function (clientSecret) {
  this.setCredential('clientSecret', clientSecret);
};

/**
 * This sets the callbackUri
 * @param {string} callbackUri - the value of the callbackUri
 */
Giraffy.prototype.setCallbackUri = function (callbackUri) {
  this.setCredential('callbackUri', callbackUri);
};

/**
 * This sets the setAccessToken
 * @param {string} setAccessToken - the value of the setAccessToken
 */
Giraffy.prototype.setAccessToken = function (accessToken) {
  this.credentials.accessToken = accessToken;
};

/**
 * This sets the refreshToken
 * @param {string} refreshToken - the value of the refreshToken
 */
Giraffy.prototype.setRefreshToken = function (refreshToken) {
  this.credentials.refreshToken = refreshToken;
};


// --- Getters ---
/**
 * This gets the giraffy credential
 * @param {string} key - the key of the credential
 * @return {string} credential - the value of the credential
 */
Giraffy.prototype.getCredential = function (key) {
  if (['clientId', 'clientSecret', 'callbackUri'].indexOf(key) === -1) {
    throw new Error(`Cannot get illegal credential ${key}`);
  } else {
    if (this.credentials[key] === '') { _credentialEmptyError(key); }
    return this.credentials[key];
  }
};

/**
 * This gets the giraffy clientId
 * @return {string} the value of the clientId
 */
Giraffy.prototype.getClientId = function () {
  if (this.clientId === '') { _credentialEmptyError('clientId'); }
  return this.getCredential('clientId');
};

/**
 * This gets the giraffy clientSecret
 * @return {string} the value of the clientSecret
 */
Giraffy.prototype.getclientSecret = function () {
  if (this.clientSecret === '') { _credentialEmptyError('clientSecret'); }
  return this.getCredential('clientSecret');
};

/**
 * This gets the giraffy callbackUri
 * @return {string} the value of the callbackUri
 */
Giraffy.prototype.getCallbackUri = function () {
  if (this.clientSecret === '') { _credentialEmptyError('callbackUri'); }
  return this.getCredential('clientSecret');
};

/**
 * This gets the giraffy accessToken
 * @return {string} the value of the accessToken
 */
Giraffy.prototype.getAccessToken = function () {
  if (!this.credentials.accessToken) {
    throw new Error('Access token is not set. Try calling the authorize() method');
  }
  return this.credentials.accessToken;
};

/**
 * This gets the giraffy refreshToken
 * @return {string} the value of the refreshToken
 */
Giraffy.prototype.getRefreshToken = function () {
  if (!this.credentials.refreshToken) {
    throw new Error('Refresh token is not set. Try calling the refreshAcessToken() method');
  }
  return this.credentials.refreshToken;
};


_addMethods([
  image,
  auth,
]);

export default Giraffy;
