import { Hippo } from './../src/hippo.js';

describe('Daisy', () => {
  // jest.useFakeTimers();
  let daisy;

  beforeEach(function() {
    daisy = new Hippo('Daisy');
    // daisy.setHunger();
  });

  // afterEach(function() {
  //   jest.clearAllTimers();
  // });

  test(`should have a name and a health level of 10 when created`, () => {
    expect(daisy.name).toEqual('Daisy');
    expect(daisy.healthLevel).toEqual(100);
  });

  test(`should show health decreasing by 1 `)

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