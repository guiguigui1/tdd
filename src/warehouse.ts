import {CD} from "./warehouse.model";

export class Warehouse {
    stock: CD[];
    balance = 0;

    constructor(cds: CD[]) {
        this.stock = cds
    }

    getStock(cd: CD){
        return this.stock.filter((stockCd) => stockCd.artist === cd.artist && stockCd.title === cd.title).length
    }

    getBalance(){
        return this.balance;
    }

    buy(cd: CD) {
        const foundIndex = this.stock.findIndex((stockCd) => stockCd.artist === cd.artist && stockCd.title === cd.title)
        const removedCd = this.stock.splice(foundIndex, 1);
        this.balance += removedCd[0].price
    }
}