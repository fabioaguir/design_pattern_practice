import { randomNumbers } from '../utils/random.numbers';
import { BicycleFactory } from './../factories/bicycle-factory';
import { CarFactory } from './../factories/car-factory';
import { Vehicle } from './../vehicle/vehicle';

export function randomVehicleAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta Preto');
  const bicycle = bicycleFactory.getVehicle('Bicycle');
  const cars = [car1, car2, bicycle];
  return cars[randomNumbers(cars.length)];
}
