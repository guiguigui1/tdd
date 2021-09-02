export interface Item {
  price: number;
  quantity: number;
}

export class ShoppingBasket {
  items: Item[] = [];

  constructor(items: Item[]){
    this.items = items;
  }

  total() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }
}
