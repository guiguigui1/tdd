import {ShoppingBasket} from "./shopping-basket";

describe("Shopping basket", () => {
  it('should have 0 total when basket is empty', () => {
    const basket = new ShoppingBasket([]);
    expect(basket.total()).toEqual(0)
  });

  it("should have 100 total when basket there is one item worth 100", () => {
    const item = {
      price: 100,
      quantity: 1
    }
    const basket = new ShoppingBasket([item]);
    expect(basket.total()).toEqual(100);
  });

  it("should have 150 total when basket there is an item worth 75 with 2 quantity", () => {
    const item = {
      price: 75,
      quantity: 2
    }
    const basket = new ShoppingBasket([item]);
    expect(basket.total()).toEqual(150);
  });

  it("should have 500 total when basket there are 2 items worth 200 and 300 with 1 quantity", () => {
    const items = [{
      price: 200,
      quantity: 1
    },{
      price: 300,
      quantity: 1
    }]
    const basket = new ShoppingBasket(items);
    expect(basket.total()).toEqual(500);
  });
});
