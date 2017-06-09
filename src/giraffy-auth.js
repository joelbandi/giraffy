/**
 * giraffy
 *
 * Copyright © 2016 joelbandi. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


import { get, post } from './utils/Http';
import builderFactory from './auth-request-builder';


function authorize(params) {
  const request = builderFactory()
    .withPath('authorize')
    .addQueryParameters({
      response_type: 'token',
      client_id: params.clientId || this.getClientId(),
      state: params.state || {},
    })
    .build();
  return get(request);
}

function refreshAcessToken(body) {
  const request = builderFactory()
    .withPath('token')
    .withBodyParameters({
      refresh_token: body.refreshToken || this.getRefreshToken(),
      client_id: body.clientId || this.getClientId(),
      client_secret: body.clientSecret || this.getClientSecret(),
      grant_type: 'refresh_token',
    });
  return post(request);
}

export default {
  authorize,
  refreshAcessToken,
};

