import { Cpu } from "./Cpu";

export class Bus {
  ram: Uint8Array;

  constructor(public cpu: Cpu) {
    this.cpu = cpu;
    // 64kb fake ram
    this.ram = new Uint8Array(64);
    this.initRam();
    this.cpu.connectBus(this);
  }

  initRam() {
    for (let i = 0; i < this.ram.length; i++) {
      this.ram[i] = 0x01;
    }
  }

  // addr: 16bit data: 8bit
  write(addr: number, data: number) {
    if (addr >= 0x0000 && addr <= 0xffff) {
      this.ram[addr] = data;
    }
  }

  read(addr: number, readOnly = false) {
    if (addr >= 0x0000 && addr <= 0xffff) {
      return this.ram[addr];
    }

    return 0x00;
  }
}
