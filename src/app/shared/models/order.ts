import { ShoppingCart } from './cart';

export class Order {
    datePlaced: number;
    item: any[];

    constructor(public userId: string, public shipping: any, shoppingCart: ShoppingCart) {
        this.datePlaced = new Date().getTime();

        this.item = shoppingCart.items.map(i => {
            return {
              product: {
                title: i.product.title,
                imageUrl: i.product.img,
                price: i.product.price
              },
              quantity: i.quantity,
              totalPrice: i.totalPrice
            };
          });
    }
}
