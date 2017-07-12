/**
 * Created by vahid on 7/11/17.
 */

import { default as Client } from 'restfulpy'

export class MockupClient extends Client {
  constructor () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 3
    super(window.__karma__.config.serverUrl)
  }
}
