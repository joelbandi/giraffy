/**
 * giraffy
 *
 * Copyright © 2016 joelbandi. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

function Girafferror(message, statusCode) {
  this.name = 'Girafferror';
  this.message = (message || '');
  this.statusCode = statusCode;
}

Girafferror.prototype = Error.prototype;

Girafferror.prototype.errorMessage = function () {
  return `${this.name}: ${this.message}(status code ${this.statusCode})`;
};

export default Girafferror;
