/* eslint-disable no-undef */
import { Cat } from './../src/cat';

describe('Cat', () => {
  jest.useFakeTimers();
  let jerome;

  beforeEach(function() {
    jerome = new Cat('Jerome');
    jerome.increaseHunger();
    jerome.decreaseEnergy();
    jerome.checkIfPooped();
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
    jerome.feed();
    expect(jerome.hunger).toEqual(-1);
  });

  // Appears to be redundant test, but I wanted to make sure that the timers didn't mess this function up somehow
  test(`feed method should work, even after increaseHunger method has been run`, () => {
    jest.advanceTimersByTime(20001);
    expect(jerome.hunger).toEqual(1);
    jerome.feed();
    expect(jerome.hunger).toEqual(0);
  });

  test(`feed method also adds +10 to energy`, () => {
    jerome.feed();
    expect(jerome.energy).toEqual(110);
    jerome.feed();
    jerome.feed();
    expect(jerome.energy).toEqual(130);
  });

  test(`has a feedCount method that starts at 0. feed method increments feedCount property by 1`, () =>{
    expect(jerome.feedCount).toEqual(0);
    jerome.feed();
    expect(jerome.feedCount).toEqual(1);
    jerome.feed();
    jerome.feed();
    expect(jerome.feedCount).toEqual(3);
  });

  test(`has a checkIfPooped method that runs every second, and monitors/returns foodCount property`, () => {
    jerome.feed();
    jerome.feed();
    jerome.feed();  
    jerome.feed();
    jerome.feed();
    jest.advanceTimersByTime(1001);
    expect(jerome.feedCount).toEqual(5);
    expect(jerome.hasPooped).toEqual(true);
  });

  test(`has a playWith method that resets their energy to 100, if it's over 100`, () => {
    jerome.feed();
    expect(jerome.energy).toEqual(110);
    jerome.play();
    expect(jerome.energy).toEqual(100);
  });

  // test(`Has a nap method that resets energy to 100, if it is below 100`, () => {

  // });


});