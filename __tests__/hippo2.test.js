import { Hippo2 } from './../src/hippo2.js';

describe('Duke', () => {
  jest.useFakeTimers();
  let duke;

  beforeEach(function() {
    duke = new Hippo2('Duke');
    duke.setHunger();
    duke.setHealth();
    duke.checkEverySecond();
    
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test(`should have a name and a health level of 100 when created`, () => {
    expect(duke.name).toEqual('Duke');
    expect(duke.healthLevel).toEqual(100);
  });

  test(`should show health decreasing every 1 every second`, () => {
    jest.advanceTimersByTime(1001);
    expect(duke.healthLevel).toEqual(99);
  });

  test(`should have hungerLevel that increases every second`, () => {
    jest.advanceTimersByTime(1001);
    expect(duke.hungerLevel).toEqual(11);
  });

  test(`should have a boolean isSick property with a default value of false`, () => {
  expect(duke.isSick).toEqual(false);
  });

  test(`should have a checkEverySecond method that runs every second and checks the various stats`, () => {
    jest.advanceTimersByTime(1001);
    expect(duke.healthLevel).toEqual(99);
    expect(duke.hungerLevel).toEqual(11);
  });

  test(`has feed method that decreases hungerLevel by 5`, () => {
    duke.feed();
    expect(duke.hungerLevel).toEqual(5);
  });

  test(`should have a boolean hasPooped property with a default value of false`, () => {
    expect(duke.hasPooped).toEqual(false);
  });
  // test(`test if hungerLevel is less than equal to zero, then animal has pooped.`, () => {
   
  // });
  
  // test(`should get sick if hungerLevel is greater than or equal to 20`, () => {
  //   jest.advanceTimersByTime(500001);
  //   expect(duke.isSick).toEqual(true);
  // });



  // test('should have a food level of 7 after 3001 milliseconds', () => {
  //   jest.advanceTimersByTime(3001);
  //   expect(duke.healthLevel).toEqual(7);
  // });

  // test(`should have a food level of 10`, () => {
  //   jest.advanceTimersByTime(9001);
  //   fuzzy.feed();
  //   expect(duke.healthLevel).toEqual(10);
  // });

});


