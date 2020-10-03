import { CarFactory } from "./factories/car-factory";
const carFactory = new CarFactory();
const fusca = carFactory.getVehicle("fusca");
fusca.pickUp("Joana");
fusca.stop();
