import { EventEmitter } from "stream";

export class PizzaShop extends EventEmitter{
    private orderNumber: number;

    constructor() {
        super();
        this.orderNumber = 2;
    }

     order(size : string, flavor: string): void {
        this.orderNumber = this.orderNumber+ 1;
        this.emit("order", size, flavor);
    }

    displayOrderNumber(): void {
        console.log(`Order number ${this.orderNumber}`);
    }
}
