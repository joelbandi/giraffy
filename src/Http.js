/**
 * giraffy
 *
 * Copyright © 2016 joelbandi. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import axios from 'axios';

const prepareAxiosConfig = function (request) {
  return {
    headers: request.getHeaders(),
    params: request.getQueryParameters(),
    data: request.getBodyParameters(),
  };
};

const prepareGirafferorObject = function (defaultMessage, err) { // eslint-disable-line

};

export function get(request) {
  return axios.get(request.getURI(), prepareAxiosConfig(request));
}

export function post(request) {
  return axios.post(request.getURI(), prepareAxiosConfig(request));
}

export function put(request) {
  return axios.put(request.getURI(), prepareAxiosConfig(request));
}

export function patch(request) {
  return axios.patch(request.getURI(), prepareAxiosConfig(request));
}

export function del(request) {
  return axios.delete(request.getURI(), prepareAxiosConfig(request));
}
