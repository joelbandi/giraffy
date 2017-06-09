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

const _credentialEmptyError = function (key) {
  throw new Error(`The ${key} credentials has not been registered with the Giraffy client.`);
};

Giraffy.prototype.setAccessToken = function (accessToken) {
  this.credentials.accessToken = accessToken;
};

Giraffy.prototype.getAccessToken = function () {
  if (!this.credentials.accessToken) {
    throw new Error('Access token is not set');
  }
  return this.credentials.accessToken;
};

Giraffy.prototype.setRefreshToken = function (refreshToken) {
  this.credentials.RefreshToken = refreshToken;
};

Giraffy.prototype.getRefreshToken = function () {
  if (!this.credentials.RefreshToken) {
    throw new Error('Refresh token is not set');
  }
  return this.credentials.RefreshToken;
};

Giraffy.prototype.setCredential = function (key, value) {
  if (['clientId', 'clientSecret', 'callbackUri'].indexOf(key) === -1) {
    throw new Error(`Cannot set illegal credential ${key}`);
  } else {
    this.credentials[key] = value;
  }
};

Giraffy.prototype.getCredential = function (key) {
  if (['clientId', 'clientSecret', 'callbackUri'].indexOf(key) === -1) {
    throw new Error(`Cannot get illegal credential ${key}`);
  } else {
    if (this.credentials[key] === '') { _credentialEmptyError(key); }
    return this.credentials[key];
  }
};

Giraffy.prototype.setClientId = function (clientId) {
  this.setCredential('clientId', clientId);
};

Giraffy.prototype.setclientSecret = function (clientSecret) {
  this.setCredential('clientSecret', clientSecret);
};

Giraffy.prototype.setCallbackUri = function (callbackUri) {
  this.setCredential('callbackUri', callbackUri);
};

Giraffy.prototype.getClientId = function () {
  if (this.clientId === '') { _credentialEmptyError('clientId'); }
  return this.getCredential('clientId');
};

Giraffy.prototype.getclientSecret = function () {
  if (this.clientSecret === '') { _credentialEmptyError('clientSecret'); }
  return this.getCredential('clientSecret');
};

Giraffy.prototype.getCallbackUri = function () {
  if (this.clientSecret === '') { _credentialEmptyError('callbackUri'); }
  return this.getCredential('clientSecret');
};

function _addMethods(apis) {
  apis.forEach((methods) => {
    for (let i in methods) {
      if (methods.hasOwnProperty(i)) {
        Giraffy.prototype[i] = methods[i];
      }
    }
  });
}

_addMethods([
  image,
  auth,
]);

export default Giraffy;
