console.log('Awaiting test');

/**
 * This function calculates and returns the minimum length of the shelter
 * required to cover a certain number of cars in a parking lot
 *
 * @param {number[]} cars - The parking lot numbers where the cars are parked
 * @param {number} k - The number of cars to be covered
 * @return {number} - The minimum length of the shelter
 *                    required to cover the said number of cars
 */
const carParkingRoof = (cars, k) => {
  const carsAscending = cars.sort((a, b) => a - b);
  console.log(carsAscending);

  const parkingLengths = [];
  for (let i = 0; i <= carsAscending.length - k; i++) {
    parkingLengths.push(carsAscending[i + k - 1] - carsAscending[i] + 1);
  }
  console.log(parkingLengths);

  const parkingOrderLengthsAscending = parkingLengths.sort((a, b) => a - b);
  console.log(parkingOrderLengthsAscending[0]);
  return parkingOrderLengthsAscending[0];
};

carParkingRoof([6, 2, 12, 7], 3);
