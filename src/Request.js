/**
 * giraffy
 *
 * Copyright © 2016 joelbandi. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import URI from 'urijs';

function Request(builder) {
  if (!builder) {
    throw new Error('Builder not supplied to Request constructor.');
  }

  this.hostname = builder.hostname;
  this.port = builder.port;
  this.protocol = builder.protocol;
  this.queryParameters = builder.queryParameters || {};
  this.bodyParameters = builder.bodyParameters || {};
  this.headers = builder.headers || {};
  this.path = builder.path || '';
}

Request.prototype.getHostname = function () {
  return this.hostname;
};

Request.prototype.getPort = function () {
  return this.port;
};

Request.prototype.getProtocol = function () {
  return this.protocol;
};

Request.prototype.getQueryParameters = function () {
  return this.queryParameters;
};

Request.prototype.getBodyParameters = function () {
  return this.bodyParameters;
};

Request.prototype.getHeaders = function () {
  return this.headers;
};

Request.prototype.getPath = function () {
  return this.path;
};

Request.prototype.getQueryParameterString = function () {
  const uri = new URI();
  uri.search(this.getQueryParameters());
  return uri.href();
};

Request.prototype.getURI = function () {
  const uri = new URI({
    protocol: this.protocol,
    hostname: this.hostname,
    port: this.port,
    path: this.path,
  });
  return uri.href();
};

Request.prototype.getURL = function () {
  const url = this.getURI() + this.getQueryParameterString();
  return url;
};

Request.prototype.addQueryPameter = function (key, value) {
  this.queryParameters[key] = value;
};

Request.prototype.addQueryParameters = function (parameters) {
  for (let key in parameters) {
    if (!parameters.hasOwnProperty(key)) { continue; }
    this.addQueryPameter(key, parameters[key]);
  }
};

Request.prototype.addBodyParameter = function (key, value) {
  this.bodyParameters[key] = value;
};

Request.prototype.addBodyParameters = function (parameters) {
  for (let key in parameters) {
    if (!parameters.hasOwnProperty(key)) { continue; }
    this.addBodyParameter(key, parameters[key]);
  }
};

Request.prototype.addHeader = function (key, value) {
  this.headers[key] = value;
};

Request.prototype.addHeaders = function (parameters) {
  for (let key in parameters) {
    if (!parameters.hasOwnProperty(key)) { continue; }
    this.addHeader(key, parameters[key]);
  }
};

export default Request;
