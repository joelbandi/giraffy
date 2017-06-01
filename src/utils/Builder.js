/**
 * giraffy
 *
 * Copyright © 2016 joelbandi. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import Request from './Request';

const Builder = function () {
  var host, port, scheme, queryParameters, bodyParameters, headers, jsonBody; // eslint-disable-line 
};

Builder.prototype.withHost = function (host) {
  this.host = host;
  return this;
};

Builder.prototype.withPort = function (port) {
  this.port = port;
  return this;
};

Builder.prototype.withScheme = function (scheme) {
  this.scheme = scheme;
  return this;
};

Builder.prototype.withQueryParameter = function (key, value) {
  if (!this.queryParameters) { this.queryParameters = {}; }
  this.queryParameters[key] = value;
  return this;
};

Builder.prototype.withQueryParameters = function (queryParameters) {
  this.queryParameters = queryParameters;
  return this;
};

Builder.prototype.addQueryParameters = function (queryParameters) {
  if (!this.queryParameters) { this.queryParameters = {}; }
  this.queryParameters = {
    ...this.queryParameters,
    ...queryParameters,
  };
  return this;
};

Builder.prototype.withPath = function (path) {
  this.path = path;
  return this;
};

Builder.prototype.withBodyParameter = function (key, value) {
  if (!this.bodyParameters) { this.bodyParameters = {}; }
  this.bodyParameters[key] = value;
  return this;
};

Builder.prototype.withBodyParameters = function (bodyParameters) {
  this.bodyParameters = bodyParameters;
  return this;
};

Builder.prototype.addBodyParameters = function (bodyParameters) {
  if (!this.bodyParameters) { this.bodyParameters = {}; }
  this.bodyParameters = {
    ...this.bodyParameters,
    ...bodyParameters,
  };
  return this;
};

Builder.prototype.withHeader = function (key, value) {
  if (!this.headers) { this.headers = {}; }
  this.headers[key] = value;
  return this;
};

Builder.prototype.withHeaders = function (headers) {
  this.headers = headers;
  return this;
};

Builder.prototype.addHeaders = function (headers) {
  if (!this.headers) { this.headers = {}; }
  this.headers = {
    ...this.headers,
    ...headers,
  };
  return this;
};

Builder.prototype.build = function () {
  return new Request(this);
};

export default Builder;
