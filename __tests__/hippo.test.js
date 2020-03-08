import { Hippo } from './../src/hippo.js';

describe('Daisy', () => {
  jest.useFakeTimers();
  let daisy;

  beforeEach(function() {
    daisy = new Hippo('Daisy');
    daisy.setHunger();
    daisy.setHealth();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test(`should have a name and a health level of 10 when created`, () => {
    expect(daisy.name).toEqual('Daisy');
    expect(daisy.healthLevel).toEqual(100);
  });

  test(`should show health decreasing by 1 every minute`, () => {
    jest.advanceTimersByTime(60001);
    expect(daisy.healthLevel).toEqual(99);
  });

  test(`should have hungerLevel that increases every 20 seconds`, () => {
    jest.advanceTimersByTime(20001);
    expect(daisy.hungerLevel).toEqual(11);
  });
  // test('should have a food level of 7 after 3001 milliseconds', () => {
  //   jest.advanceTimersByTime(3001);
  //   expect(daisy.healthLevel).toEqual(7);
  // });

  // test(`should have a food level of 10`, () => {
  //   jest.advanceTimersByTime(9001);
  //   fuzzy.feed();
  //   expect(daisy.healthLevel).toEqual(10);
  // });

});