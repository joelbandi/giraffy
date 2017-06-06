/**
 * giraffy
 *
 * Copyright © 2016 joelbandi. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import image from './giraffy-image';

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

Giraffy.prototype.setAccessToken = function (accessToken) {
  this.credentials.accessToken = accessToken;
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
  return this.getCredential('clientId');
};

Giraffy.prototype.getclientSecret = function () {
  return this.getCredential('clientSecret');
};

Giraffy.prototype.getCallbackUri = function () {
  return this.getCredential('callbackUri');
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

_addMethods([image]);

export default Giraffy;
