'use strict';

import Builder from './utils/Builder';
import { API_VERSION } from './utils/env';

const DEFAULT_HOST = `api.imgur.com/${API_VERSION}`,
const DEFAULT_SCHEME = 'https';

export default new Builder()
      .withHost(DEFAULT_HOST)
      .withScheme(DEFAULT_SCHEME);
