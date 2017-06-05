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

  it('intitializes with default data', () => {
    const defaultRequest = new Request({
      hostname: 'www.test.org',
      port: 443,
      protocol: 'https',
    });
    expect(defaultRequest.getHostname()).to.equal('www.test.org');
    expect(defaultRequest.getPort()).to.equal(443);
    expect(defaultRequest.getProtocol()).to.equal('https');
    expect(defaultRequest.getQueryParameters()).to.eql({});
    expect(defaultRequest.getBodyParameters()).to.eql({});
    expect(defaultRequest.getHeaders()).to.eql({});
    expect(defaultRequest.getPath()).to.equal('');
  });

  it('intitializes with correct given data', () => {
    const request = new Request({
      hostname: 'www.test.org',
      port: 443,
      protocol: 'https',
      queryParameters: { test: 'testqueryparam' },
      bodyParameters: { test: 'testbodyparam' },
      headers: { test: 'testheader' },
      path: '/testing/new',
    });
    expect(request.getHostname()).to.equal('www.test.org');
    expect(request.getPort()).to.equal(443);
    expect(request.getProtocol()).to.equal('https');
    expect(request.getQueryParameters()).to.eql({ test: 'testqueryparam' });
    expect(request.getBodyParameters()).to.eql({ test: 'testbodyparam' });
    expect(request.getHeaders()).to.eql({ test: 'testheader' });
    expect(request.getPath()).to.equal('/testing/new');
  });

  it('returns the correct query parameter string', () => {
    const request = new Request({
      hostname: 'www.test.org',
      port: 443,
      protocol: 'https',
      queryParameters: { query1: 'testqueryparam1', query2: 'testqueryparam2' },
      bodyParameters: { body1: 'testbodyparam1', body2: 'testbodyparam2' },
      headers: { header1: 'testheader1', header2: 'testheader2' },
      path: '/testing/new',
    });
    expect(request.getQueryParameterString()).to
      .equal('?query1=testqueryparam1&query2=testqueryparam2');
  });

  it('returns the correct URI', () => {
    const request = new Request({
      hostname: 'www.test.org',
      port: 443,
      protocol: 'https',
      queryParameters: { query1: 'testqueryparam1', query2: 'testqueryparam2' },
      bodyParameters: { body1: 'testbodyparam1', body2: 'testbodyparam2' },
      headers: { header1: 'testheader1', header2: 'testheader2' },
      path: '/testing/new',
    });
    expect(request.getURI()).to
      .equal('https://www.test.org/testing/new');
  });

  it('returns the correct URI', () => {
    const request = new Request({
      hostname: 'www.test.org',
      port: 443,
      protocol: 'https',
      queryParameters: { query1: 'testqueryparam1', query2: 'testqueryparam2' },
      bodyParameters: { body1: 'testbodyparam1', body2: 'testbodyparam2' },
      headers: { header1: 'testheader1', header2: 'testheader2' },
      path: '/testing/new',
    });
    expect(request.getURL()).to
      .equal('https://www.test.org/testing/new?query1=testqueryparam1&query2=testqueryparam2');
  });

  it('adds query parameters', () => {
    const request = new Request({
      hostname: 'www.test.org',
      port: 443,
      protocol: 'https',
      queryParameters: { query1: 'testqueryparam1', query2: 'testqueryparam2' },
      bodyParameters: { body1: 'testbodyparam1', body2: 'testbodyparam2' },
      headers: { header1: 'testheader1', header2: 'testheader2' },
      path: '/testing/new',
    });
    request.addQueryParameters({ query3: 'testqueryparam3' });
    expect(request.getQueryParameters()).to.eql({
      query1: 'testqueryparam1',
      query2: 'testqueryparam2',
      query3: 'testqueryparam3',
    });
  });


  it('adds body parameters', () => {
    const request = new Request({
      hostname: 'www.test.org',
      port: 443,
      protocol: 'https',
      queryParameters: { query1: 'testqueryparam1', query2: 'testqueryparam2' },
      bodyParameters: { body1: 'testbodyparam1', body2: 'testbodyparam2' },
      headers: { header1: 'testheader1', header2: 'testheader2' },
      path: '/testing/new',
    });
    request.addBodyParameters({ body3: 'testbodyparam3' });
    expect(request.getBodyParameters()).to.eql({
      body1: 'testbodyparam1',
      body2: 'testbodyparam2',
      body3: 'testbodyparam3',
    });
  });

  it('adds headers', () => {
    const request = new Request({
      hostname: 'www.test.org',
      port: 443,
      protocol: 'https',
      queryParameters: { query1: 'testqueryparam1', query2: 'testqueryparam2' },
      bodyParameters: { body1: 'testbodyparam1', body2: 'testbodyparam2' },
      headers: { header1: 'testheader1', header2: 'testheader2' },
      path: '/testing/new',
    });
    request.addHeaders({ header3: 'testheader3' });
    expect(request.getHeaders()).to.eql({
      header1: 'testheader1',
      header2: 'testheader2',
      header3: 'testheader3',
    });
  });


});
