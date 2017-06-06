import Builder from './utils/Builder';


const DEFAULT_HOST = 'api.imgur.com/oauth2';
const DEFAULT_PROTOCOL = 'https';

export default function () {
  return new Builder()
    .withHostname(DEFAULT_HOST)
    .withProtocol(DEFAULT_PROTOCOL);
}
