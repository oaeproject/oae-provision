/*
 * Copyright 2017 Apereo Foundation (AF) Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://opensource.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

const config = {};

// Configuration for running tests

/**
 * `config.test`
 *
 * Configuration namespace for the OAE tests.
 *
 * @param  {String}    timeout            The mocha timeout that should be used
 * @param  {String}    level              The log level that should be used for testing
 * @param  {String}    path               The log path that should be used for testing
 */
config.test = {
  timeout: 6000,
  level: 'error',
  path: './tests.log',
};

process.env.TWITTER_KEY = 'vuMy7DqnfPkHPrHE3eqkWp3uG';
process.env.TWITTER_SECRET =
  'coPAXA5Vsngt4k9ehHbmvRiG7qX0VKLBG47U0oJja2PkEYyOET';
process.env.FACEBOOK_APP_ID = 194758077323671;
process.env.FACEBOOK_APP_SECRET = '663d14e7f9ad0baeb4e43390825a659f';
process.env.GOOGLE_CLIENT_ID = '822036948319.apps.googleusercontent.com';
process.env.GOOGLE_CLIENT_SECRET = 'b5ccr5noy0j_gzj4kj42uuwm';
process.env.ETHEREAL_USER = 'holly.effertz2@ethereal.email';
process.env.ETHEREAL_PASS = 'AkCU3KyezN9u9VGXk9';

module.exports = {config};
