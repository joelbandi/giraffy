/**
 * giraffy
 *
 * Copyright © 2016 joelbandi. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


import { get, post, del } from './utils/Http';
import builderFactory from './api-request-builder';

function getImage(imageID) {
  const request = builderFactory()
    .addClientIdHeader(this.getClientId())
    .withPath(`image/${imageID}`)
    .build();
  request.getURI();
  return get(request);
}

function postImage({ image, album, title, description, name, type }) {
  const request = builderFactory()
    .withPath('image')
    .withBodyParams({
      image,
      album,
      title,
      description,
      name,
      type,
    })
    .addClientIdHeader(this.getClientId())
    .addTokenHeader(this.getAccessToken())
    .build();
  return post(request);
}

function deleteImageUnAuth(imageDeleteHash) {
  const request = builderFactory()
    .withPath(`image/${imageDeleteHash}`)
    .withClientIdHeader(this.getClientId())
    .build();
  return del(request);
}

function deleteImageAuth(imageDeleteHash) {
  const request = builderFactory()
    .withPath(`image/${imageDeleteHash}`)
    .withTokenHeader(this.getAccessToken())
    .build();
  return del(request);
}

function updateImageUnAuth(imageHash, { title, description }) {
  const request = builderFactory()
    .withPath(`image/${imageHash}`)
    .addClientIdHeader(this.getClientId())
    .withBodyParam({
      title,
      description,
    })
    .build();
  return post(request);
}

function updateImageAuth(imageHash, { title, description }) {
  const request = builderFactory()
    .withPath(`image/${imageHash}`)
    .addTokenHeader(this.getAccessToken())
    .withBodyParam({
      title,
      description,
    })
    .build();
  return post(request);
}

function favoriteImage(imageHash) {
  const request = builderFactory()
    .withpath(`image/${imageHash}/favorite`)
    .addTokenHeader(this.getAccessToken())
    .build();
  return post(request);
}

export default {
  getImage,
  postImage,
  deleteImageUnAuth,
  deleteImageAuth,
  updateImageUnAuth,
  updateImageAuth,
  favoriteImage,
};
