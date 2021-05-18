import { Bus } from "./Bus";

export class Cpu {
  bus: Bus;
  constructor() {}

  connectBus(bus: Bus) {
    this.bus = bus;
  }

  read(addr: number) {
    return this.bus.read(addr);
  }

  write(addr: number, data: number) {
    this.bus.write(addr, data);
  }
}
