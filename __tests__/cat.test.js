/* eslint-disable no-undef */
import { Cat } from './../src/cat';

describe('Cat', () => {
  jest.useFakeTimers();
  let jerome;

  beforeEach(function() {
    jerome = new Cat('Jerome');
    jerome.increaseHunger();
    jerome.decreaseEnergy();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test(`should have a name and health level of 100 when created`, () => {
    expect(jerome.name).toEqual('Jerome');
    expect(jerome.healthLevel).toEqual(100);
  });

  test(`should have hunger, hasPooped, and energy properties, each with a default value`, () => {
    expect(jerome.hunger).toEqual(0);
    expect(jerome.hasPooped).toEqual(false);
    expect(jerome.energy).toEqual(100);
  });

  test(`should have a method that increases hunger every 20 seconds`, () => {
    jest.advanceTimersByTime(20001);
    expect(jerome.hunger).toEqual(1);
  });

  test(`should have a method that decreases energy level every ten seconds`, () => {
    jest.advanceTimersByTime(10001);
    expect(jerome.energy).toEqual(99);
  });
  
  test(`should have a feed method that decreases hunger by 1`, () => {
    // jest.advanceTimersByTime(1001);
    jerome.feed();
    expect(jerome.hunger).toEqual(-1);
  });


});