/* eslint-disable no-undef */
import { Cat } from './../cat.js';

describe('Cat', () => {
  jest.userFakeTimers();
  let jerome;

  beforeEach(function() {
    jerome = new Cat('Jerome');
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test(`should have a name and health level of 100 when created`, () => {
    expect(jerome.name).toEqual('Jerome');
    expect(jerome.healthLevel).toEqual(100);
  })
});