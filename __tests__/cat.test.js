/* eslint-disable no-undef */
import { Cat } from './../src/cat';

describe('Cat', () => {
  jest.useFakeTimers();
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