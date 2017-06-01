/**
 * giraffy
 *
 * Copyright © 2016 joelbandi. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Request from '../src/utils/Request';
describe('Request', () => {


  it('throws error if builder is not supplied in the arguments', () => {
    const errorRequest = () => new Request();
    expect(errorRequest).to.throw('Builder not supplied to Request constructor.');
  });


});
