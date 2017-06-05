import Builder from './utils/Builder';
import { API_VERSION } from './utils/env';

const DEFAULT_HOST = `api.imgur.com/${API_VERSION}`;
const DEFAULT_PROTOCOL = 'https';

export default function () {
  return new Builder()
    .withHost(DEFAULT_HOST)
    .withProtocol(DEFAULT_PROTOCOL);
}
