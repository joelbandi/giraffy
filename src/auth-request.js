import Builder from './utils/Builder';

const DEFAULT_HOST = 'api.imgur.com/oauth2/authorize';
const DEFAULT_SCHEME = 'https';

export default new Builder()
      .withHost(DEFAULT_HOST)
      .withScheme(DEFAULT_SCHEME);
