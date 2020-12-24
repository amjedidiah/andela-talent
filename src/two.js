console.log('Awaiting test');

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
};

carParkingRoof([6, 2, 12, 7], 3);
