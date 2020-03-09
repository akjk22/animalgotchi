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
  });

  test(`should have hunger, hasPooped, and energy properties, each with a default value`, () => {
    expect(jerome.hunger).toEqual(10);
    expect(jerome.hasPooped).toEqual(false);
    expect(jerome.energy).toEqual(100);
  });
});