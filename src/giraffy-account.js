/**
 * giraffy
 *
 * Copyright © 2016 joelbandi. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import builderFactory from './api-request-builder';
import { get, put, post, del } from './utils/Http';


function getAccountBase({ username }) {
  const request = builderFactory()
    .withPath(`account/${username}`)
    .addClientIdHeader(this.getClientId())
    .build();
  return get(request);
}

function getAccountImages() {
  const request = builderFactory()
    .withPath('account/me/images')
    .addTokenHeader(this.getAccessToken())
    .build();
  return get(request);
}

function getAccountGalleryFavorites({
  username,
  page = 0,
  favoritesSort = 'newest',
}) {
  const request = builderFactory()
    .withPath(`account/${username}/gallery_favorites/${page}/${favoritesSort}`)
    .addClientIdHeader(this.getClientId())
    .build();
  return get(request);
}

function getAccountFavorites({
  username,
  page = 0,
  favoritesSort = 'newest',
}) {
  const request = builderFactory()
    .withPath(`account/${username}/favorites/${page}/${favoritesSort}`)
    .addTokenHeader(this.getAccessToken())
    .build();
  return get(request);
}

function getAccountSubmissions({
  username,
  page = 0,
}) {
  const request = builderFactory()
    .withPath(`account/${username}/submissions/${page}`)
    .addClientIdHeader(this.getClientId())
    .build();
  return get(request);
}

function getAccountSettings() {
  const request = builderFactory()
    .withPath('account/me/settings')
    .addTokenHeader(this.getAccessToken())
    .build();
  return get(request);
}

function putChangeAccountSettings({ username }, params) {
  const request = builderFactory()
    .withPath(`account/${username}/settings`)
    .withBodyParameters(params)
    .addTokenHeader(this.getAccessToken())
    .build();
  return put(request);
}

function getAccountGalleryProfile({ username }) {
  const request = builderFactory()
    .withPath(`account/${username}/settings`)
    .addTokenHeader(this.getAccessToken())
    .build();
  return get(request);
}

function getVerifyUsersEmail({ username }) {
  const request = builderFactory()
    .withPath(`account/${username}/verifyemail`)
    .addTokenHeader(this.getAccessToken())
    .build();
  return get(request);
}

function postSendVerificationEmail({ username }) {
  const request = builderFactory()
    .withPath(`account/${username}/verifyemail`)
    .addTokenHeader(this.addTokenHeader())
    .build();
  return post(request);
}

function getAlbums({
  username,
  page = 0,
}) {
  const request = builderFactory()
    .withPath(`account/${username}/albums/${page}`)
    .addClientIdHeader(this.getClientId())
    .addTokenHeader(this.getAccessToken())
    .build();
  return get(request);
}

function getAlbum({
  username,
  albumHash,
}) {
  const request = builderFactory()
    .withPath(`account/${username}/album/${albumHash}`)
    .addTokenHeader(this.addTokenHeader())
    .builder();
  return get(request);
}

function getAlbumIds({
  username,
  page,
}) {
  const request = builderFactory()
    .withPath(`account/${username}/albums/ids/${page}`)
    .addClientIdHeader(this.addClientIdHeader())
    .addTokenHeader(this.addTokenHeader())
    .build();
  return get(request);
}

function getAlbumCount({ username }) {
  const request = builderFactory()
    .withPath(`account/${username}/albums/count`)
    .addClientIdHeader(this.getClientId())
    .addTokenHeader(this.getAccessToken())
    .build();
  return get(request);
}

function deleteAlbumDeletion({
  username,
  albumHash,
}) {
  const request = builderFactory()
    .withPath(`account/${username}/album/${albumHash}`)
    .addTokenHeader(this.getAccessToken())
    .build();
  return del(request);
}

function getComments({
  username,
  commentSort = 'newest',
  page = 0,
}) {
  const request = builderFactory()
    .withPath(`account/${username}/comments/${commentSort}/${page}`)
    .addTokenHeader(this.getAccessToken())
    .build();
  return get(request);
}

function getComment({
  username,
  commentId,
}) {
  const request = builderFactory()
    .withPath(`account/${username}/comment/${commentId}`)
    .addClientIdHeader(this.getClientId())
    .build();
  return get(request);
}

function getCommentIds({
  username,
  commentSort = 'newest',
  page = 0,
}) {
  const request = builderFactory()
    .withPath(`account/${username}/comments/ids/${commentSort}/${page}`)
    .addClientIdHeader(this.getClientId())
    .build();
  return get(request);
}

function getCommentCount({ username }) {
  const request = builderFactory()
    .withPath(`account/${username}/comments/count`)
    .addClientIdHeader(this.getClientId())
    .build();
  return get(request);
}

function deleteCommentDeletion({
  username,
  commentId,
}) {
  const request = builderFactory()
    .withPath(`account/${username}/comment/${commentId}`)
    .addTokenHeader(this.getAccessToken())
    .build();
  return del(request);
}

function getImages({
  username,
  page = 0,
}) {
  const request = builderFactory()
    .withPath(`account/${username}/images/${page}`)
    .addTokenHeader(this.getAccessToken())
    .build();
  return get(request);
}

function getImage({
  username,
  imageId,
}) {
  const request = builderFactory()
    .withPath(`account/${username}/image/${imageId}`)
    .addTokenHeader(this.getAccessToken())
    .build();
  return get(request);
}

function getImageIds({
  username,
  page = 0,
}) {
  const request = builderFactory()
    .withPath(`account/${username}/images/ids/${page}`)
    .addTokenHeader(this.getAccessToken())
    .build();
  return get(request);
}

function getImageCount({ username }) {
  const request = builderFactory()
    .withPath(`account/${username}/images/count`)
    .addTokenHeader(this.getAccessToken())
    .build();
  return get(request);
}

function deleteImageDeletion({
  username,
  deleteHash,
}) {
  const request = builderFactory()
    .withPath(`account/${username}/image/${deleteHash}`)
    .addTokenHeader(this.getAccessToken())
    .build();
  return del(request);
}

function getReplies({
  username,
  newOnly = true,
}) {
  const request = builderFactory()
    .withPath(`account/${username}/notifications/replies`)
    .withQueryParameters({
      new: newOnly,
    })
    .addTokenHeader(this.getAccessToken())
    .build();
  return get(request);
}

function postFollowTag({ tagName }) {
  const request = builderFactory()
    .withPath(`aaccount/me/follow/tag/${tagName}`)
    .addTokenHeader(this.getAccessToken())
    .build();
  return post(request);
}

function deleteUnfollowTag({ tagName }) {
  const request = builderFactory()
    .withPath(`aaccount/me/follow/tag/${tagName}`)
    .addTokenHeader(this.getAccessToken())
    .build();
  return del(request);
}

export default {
  getAccountBase,
  getAccountImages,
  getAccountGalleryFavorites,
  getAccountFavorites,
  getAccountSubmissions,
  getAccountSettings,
  putChangeAccountSettings,
  getAccountGalleryProfile,
  getVerifyUsersEmail,
  postSendVerificationEmail,
  getAlbums,
  getAlbum,
  getAlbumIds,
  getAlbumCount,
  deleteAlbumDeletion,
  getComments,
  getComment,
  getCommentIds,
  getCommentCount,
  deleteCommentDeletion,
  getImages,
  getImage,
  getImageIds,
  getImageCount,
  deleteImageDeletion,
  getReplies,
  postFollowTag,
  deleteUnfollowTag,
};
