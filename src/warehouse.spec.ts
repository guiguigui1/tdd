import {Warehouse} from "./warehouse";
import {CD} from "./warehouse.model";

describe.only('Customer can buy CD', () => {
    describe('When the CD is available', () => {
        const elvisCd: CD = {title: 'Hound Dog', artist: 'Elvis Presley', price: 25};
        const kinksCd: CD = {title: 'Lola', artist: 'The Kinks', price: 15};
        const mockStock = [elvisCd, elvisCd, kinksCd]

        it('should remove the CD when bought if in stock', () => {
            const warehouse = new Warehouse(mockStock);
            warehouse.buy(elvisCd);

            expect(warehouse.getStock(elvisCd)).toEqual(1);
        });

        it('should add the price of the CD to the balance of the warehouse when a CD is bought', () => {
            const warehouse = new Warehouse(mockStock);
            warehouse.buy(elvisCd);
            expect(warehouse.getBalance()).toEqual(25);
        })
    })
})