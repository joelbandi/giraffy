/**
 * giraffy
 *
 * Copyright © 2016 joelbandi. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Builder from '../src/utils/Builder';
describe('Builder', () => {

  it('builds URIs correctly', () => {
    const builder = new Builder();
    const request = builder.withHostname('www.derp.com')
      .withPort(443)
      .withProtocol('https')
      .withPath('test/path')
      .withQueryParameters({ query1: 'query1' })
      .addQueryParameters({ query2: 'query2' })
      .build();
    expect(request.getURI()).to.equal('https://www.derp.com/test/path');
  });

  it('builds queryStrings correctly', () => {
    const builder = new Builder();
    const request = builder.withHostname('www.derp.com')
        .withPort(443)
        .withProtocol('https')
        .withPath('test/path')
        .withQueryParameters({ query1: 'query1' })
        .addQueryParameters({ query2: 'query2' })
        .build();
    expect(request.getQueryParameterString()).to.equal('?query1=query1&query2=query2');
  });

  it('builds URLs correctly', () => {
    const builder = new Builder();
    const request = builder.withHostname('www.derp.com/herp')
        .withPort(443)
        .withProtocol('https')
        .withPath('/test/path')
        .withQueryParameters({ query1: 'query1' })
        .addQueryParameters({ query2: 'query2' })
        .build();
    expect(request.getURL()).to.equal('https://www.derp.com/herp/test/path?query1=query1&query2=query2');
  });

});
