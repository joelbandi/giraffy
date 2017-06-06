/**
 * giraffy
 *
 * Copyright © 2016 joelbandi. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


import { get } from './utils/Http';
import builderFactory from './api-request-builder';

function getImage(imageID) {
  const request = builderFactory()
    .addClientIdHeader(this.getCredential('clientId'))
    .withPath(`/image/${imageID}`)
    .build();
  request.getURI();
  return get(request);
}

export default {
  getImage,
};

